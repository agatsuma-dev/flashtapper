document.addEventListener("DOMContentLoaded", function() {
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
