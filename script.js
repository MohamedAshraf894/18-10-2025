const messages = [
    "Wlahyy",
    "Sureeee???",
    "La nengez",
    "Kimyyyy",
    "Hanhazarrrr",
    "If you say no, I will be really sad...",
    "Ah dy elet adabb",
    "3eb kedaa",
    "Tmaaaammmmmm ana asln msh 3ayez...",
    "Bahzar bs 2ooly ah bel zooo2❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}