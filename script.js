document.addEventListener("DOMContentLoaded", function() {
    let tapLimit = 100;
    let taps = 0;
    let maticBalance = 0;

    function updateBars() {
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = `${tapLimit}%`;
        document.getElementById('taps-left').textContent = `Taps Left: ${tapLimit}`;
        document.getElementById('taps-done').innerHTML = `<img src="noob.png" alt="Icon" class="small-icon"> ${taps}`;
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
