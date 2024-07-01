document.addEventListener("DOMContentLoaded", function() {
    const claimAmounts = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
    const claimInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const tapRegenerationRate = 1; // Number of taps regenerated per interval
    const tapRegenerationInterval = 2000; // Interval in milliseconds

    let taps = parseInt(localStorage.getItem('taps')) || 0;
    let tapLimit = parseInt(localStorage.getItem('tapLimit')) || 100;
    let maticBalance = parseInt(localStorage.getItem('maticBalance')) || 0;
    let lastClaimTime = localStorage.getItem('lastClaimTime');
    let claimedDays = parseInt(localStorage.getItem('claimedDays')) || 0;

    function getUsername() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('username') || '';
    }

    function initializeUserData() {
        const username = getUsername();
        if (username === 'noobavacado') {
            taps = 100;
            maticBalance = 5;
        }
        updateBars();
    }

    function updateBars() {
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = `${tapLimit}%`;
        document.getElementById('taps-left').textContent = `Taps Left: ${tapLimit}`;
        document.getElementById('taps-done').innerHTML = `<img src="noob.png" alt="Icon" class="small-icon"> ${taps}`;
        document.getElementById('matic-balance').textContent = `Matic Balance: ${maticBalance}`;

        // Save to localStorage
        localStorage.setItem('taps', taps);
        localStorage.setItem('tapLimit', tapLimit);
        localStorage.setItem('maticBalance', maticBalance);
    }

    function regenerateTapLimit() {
        const lastTapTime = parseInt(localStorage.getItem('lastTapTime')) || Date.now();
        const now = Date.now();
        const elapsed = now - lastTapTime;
        const tapsToRegenerate = Math.floor(elapsed / tapRegenerationInterval) * tapRegenerationRate;
        
        tapLimit = Math.min(tapLimit + tapsToRegenerate, 100);
        localStorage.setItem('lastTapTime', now);
        updateBars();
    }

    setInterval(() => {
        if (tapLimit < 100) {
            tapLimit++;
            localStorage.setItem('lastTapTime', Date.now());
            updateBars();
        }
    }, tapRegenerationInterval);

    const coin = document.getElementById('coin');
    coin.addEventListener('click', () => {
        if (tapLimit > 0) {
            taps++;
            tapLimit--;
            updateBars();
        }
    });

    document.querySelectorAll(".tab-button").forEach(button => {
        button.addEventListener("click", () => {
            const tabContents = document.querySelectorAll(".tab-content");
            tabContents.forEach(content => content.classList.remove("active"));
            
            const tabs = document.querySelectorAll(".tab-button");
            tabs.forEach(tab => tab.classList.remove("active"));
            
            const target = button.textContent.toLowerCase().replace(" ", "-");
            document.getElementById(target).classList.add("active");
            button.classList.add("active");
        });
    });

    window.showMaticBalance = function() {
        document.getElementById('matic-modal').style.display = 'block';
        document.getElementById('matic-balance').textContent = `Matic Balance: ${maticBalance}`;
    }

    window.closeMaticModal = function() {
        document.getElementById('matic-modal').style.display = 'none';
    }

    window.depositMatic = function() {
        const depositAddress = document.getElementById('deposit-address');
        depositAddress.style.display = 'block';
        setTimeout(() => {
            depositAddress.textContent = 'Deposit Address: 0xcC9C2344296E2758c4d032a94D4244432d20beCe';
        }, 2000);
    }

    window.openDailyClaimModal = function() {
        document.getElementById('daily-claim-modal').style.display = 'block';
        updateClaimBoxes();
    }

    window.closeDailyClaimModal = function() {
        document.getElementById('daily-claim-modal').style.display = 'none';
    }

    function claimReward(day) {
        if (day > claimedDays && new Date() - new Date(lastClaimTime) >= claimInterval) {
            taps += claimAmounts[day];
            claimedDays = day;
            lastClaimTime = new Date().toISOString();
            localStorage.setItem('claimedDays', claimedDays);
            localStorage.setItem('lastClaimTime', lastClaimTime);
            updateBars();
            updateClaimBoxes();
        }
    }
    function updateClaimBoxes() {
        const claimContainer = document.getElementById('claim-container');
        claimContainer.innerHTML = '';
        for (let i = 0; i < claimAmounts.length; i++) {
            const box = document.createElement('button');
            box.classList.add('claim-box');
            box.textContent = `${claimAmounts[i]} Coins`;
            if (i < claimedDays) {
                box.classList.add('disabled');
                box.disabled = true;
            } else if (i === claimedDays && new Date() - new Date(lastClaimTime) >= claimInterval) {
                box.onclick = () => claimReward(i);
            } else {
                box.classList.add('disabled');
                box.disabled = true;
            }
            claimContainer.appendChild(box);
        }
        if (claimedDays === claimAmounts.length) {
            claimedDays = 0; // Reset to first claimable day
            localStorage.setItem('claimedDays', claimedDays);
        }
        if (claimedDays < claimAmounts.length - 1 && new Date() - new Date(lastClaimTime) < claimInterval) {
            const nextClaimTime = new Date(new Date(lastClaimTime).getTime() + claimInterval);
            const timer = document.createElement('p');
            timer.id = 'next-claim-timer';
            claimContainer.appendChild(timer);
            updateTimer(timer, nextClaimTime);
            setInterval(() => updateTimer(timer, nextClaimTime), 1000);
        }
    }
    
    function updateTimer(timer, nextClaimTime) {
        const now = new Date();
        const timeDiff = nextClaimTime - now;
        if (timeDiff > 0) {
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            timer.textContent = `Next claim after: ${hours}h ${minutes}m ${seconds}s`;
        } else {
            timer.textContent = 'You can claim your reward now!';
            updateClaimBoxes();
        }
    }

    regenerateTapLimit();
    initializeUserData();
    updateClaimBoxes();
    const usernames = [
        "user1", "user2", "user3", "user4", "user5", 
        "user6", "user7", "user8", "user9", "user10"
    ];

    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || usernames.map(username => ({
        username: username,
        score: Math.floor(Math.random() * (10000000 - 100000 + 1)) + 100000
    }));

    function updateLeaderboard() {
        leaderboard = leaderboard.map(entry => ({
            ...entry,
            score: entry.score + Math.floor(Math.random() * 100000) // Update score by a random amount daily
        }));
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        renderLeaderboard();
    }

    function renderLeaderboard() {
        const leaderboardContainer = document.getElementById('leaderboard-container');
        leaderboardContainer.innerHTML = '';
        leaderboard.forEach(entry => {
            const entryElement = document.createElement('div');
            entryElement.classList.add('leaderboard-entry');
            entryElement.innerHTML = `
                <span>${entry.username}</span>
                <span>${entry.score}</span>
            `;
            leaderboardContainer.appendChild(entryElement);
        });
    }

    setInterval(updateLeaderboard, 24 * 60 * 60 * 1000); // Update scores daily

    renderLeaderboard(); // Initial render
});

function upgrade() {
    alert("Upgrade clicked!");
}

function dailyClaim() {
    alert("Daily Claim clicked!");
}

function tasks() {
    alert("Tasks clicked!");
}
