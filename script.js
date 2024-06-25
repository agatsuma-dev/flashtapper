const coin = document.getElementById('coin');
const tapLimitBarFill = document.getElementById('tap-limit-fill');
const tapCountBarFill = document.getElementById('tap-count-fill');
const tapLimitLabel = document.getElementById('tap-limit-label');
const tapCountLabel = document.getElementById('tap-count-label');
const upgradeButton = document.getElementById('upgrade-button');
const dailyClaimButton = document.getElementById('dailyclaim-button');
const tasksButton = document.getElementById('tasks-button');

let tapLimit = 100;
let taps = 0;

function updateBars() {
    tapLimitBarFill.style.width = `${tapLimit}%`;
    tapCountBarFill.style.width = `${taps % 100}%`;
    tapLimitLabel.textContent = `Taps Left: ${tapLimit}`;
    tapCountLabel.textContent = `Taps Done: ${taps}`;
}

function regenerateTapLimit() {
    if (tapLimit < 100) {
        tapLimit++;
        updateBars();
    }
}

setInterval(regenerateTapLimit, 1000);

coin.addEventListener('click', () => {
    if (tapLimit > 0) {
        taps++;
        tapLimit--;
        updateBars();

        coin.classList.add('down');
        setTimeout(() => {
            coin.classList.remove('down');
        }, 400);
    }
});

upgradeButton.addEventListener('click', () => {
    window.location.href = 'upgrade.html';
});

dailyClaimButton.addEventListener('click', () => {
    window.location.href = 'daily.html';
});

tasksButton.addEventListener('click', () => {
    window.location.href = 'tasks.html';
});
