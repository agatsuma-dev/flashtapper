document.addEventListener("DOMContentLoaded", function() {
    let tapLimit = 100;
    let taps = 0;
    let maticBalance = 0;

    // Function to get the username from the URL or web app context
    function getUsername() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('username') || '';
    }

    // Initialize user data based on the username
    function initializeUserData() {
        const username = getUsername();
        if (username === 'noobavacado') {
            taps = 100;
            maticBalance = 5;
        }

        // Load data from localStorage
        const savedTaps = localStorage.getItem('taps');
        const savedMaticBalance = localStorage.getItem('maticBalance');
        const savedTapLimit = localStorage.getItem('tapLimit');
        const lastUpdate = localStorage.getItem('lastUpdate');

        if (savedTaps !== null) taps = parseInt(savedTaps, 10);
        if (savedMaticBalance !== null) maticBalance = parseInt(savedMaticBalance, 10);
        if (savedTapLimit !== null) tapLimit = parseInt(savedTapLimit, 10);

        // Calculate the time difference and regenerate tap limit accordingly
        if (lastUpdate !== null) {
            const now = new Date().getTime();
            const timeDifference = now - parseInt(lastUpdate, 10);
            const tapsToRegenerate = Math.floor(timeDifference / 2000);
            tapLimit = Math.min(tapLimit + tapsToRegenerate, 100);
        }

        updateBars();
        // Update the last update time
        localStorage.setItem('lastUpdate', new Date().getTime());
    }

    function updateBars() {
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = `${tapLimit}%`;
        document.getElementById('taps-left').textContent = `Taps Left: ${tapLimit}`;
        document.getElementById('taps-done').innerHTML = `<img src="noob.png" alt="Icon" class="small-icon"> ${taps}`;
        document.getElementById('matic-balance').textContent = `Matic Balance: ${maticBalance}`;

        // Save data to localStorage
        localStorage.setItem('taps', taps);
        localStorage.setItem('maticBalance', maticBalance);
        localStorage.setItem('tapLimit', tapLimit);
    }

    function regenerateTapLimit() {
        if (tapLimit < 100) {
            tapLimit++;
            updateBars();
        }
    }

    setInterval(regenerateTapLimit, 2000);

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

    // Initialize user data on page load
    initializeUserData();
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

function openTab(event, tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => content.classList.remove("active"));

    const tabs = document.querySelectorAll(".tab-button");
    tabs.forEach(tab => tab.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}
