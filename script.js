let points = 0;
const maxPoints = 500;
const fillBar = document.getElementById('fill-bar');
const pointsDisplay = document.getElementById('points');

function incrementBar() {
    if (points < maxPoints) {
        points++;
        const percentage = (points / maxPoints) * 100;
        fillBar.style.width = percentage + '%';
        pointsDisplay.textContent = `${points} / ${maxPoints} points`;
    }
}
