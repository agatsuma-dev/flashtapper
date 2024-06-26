document.addEventListener("DOMContentLoaded", function() {
    let tapLimit = 100;
    let taps = 0;

    function updateBars() {
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = `${tapLimit}%`;
        document.getElementById('taps-left').textContent = `Taps Left: ${tapLimit}`;
        document.getElementById('taps-done').textContent = `Wallet Balance: ${taps}`;
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
