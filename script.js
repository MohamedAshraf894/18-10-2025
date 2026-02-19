const images = [
    "images/img1.jpeg",
    "images/img2.jpeg",
    "images/img3.jpeg",
    "images/img4.jpeg",
    "images/img5.jpeg",
    "images/img6.jpeg",
    "images/img7.jpeg",
    "images/img8.jpeg",
    "images/img9.jpeg",
    "images/img10.jpeg"
];

let lastImageIndex = 0;

function shuffleImage() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === lastImageIndex);

    lastImageIndex = randomIndex;

    document.getElementById("mainImage").src = images[randomIndex];
}

const messages = [
    "Ana asef 5alas😘",
    "5alas ba2a",
    "3ashan 5atry",
    "Ramadan Kareem ba2a Kol sana wenty tyba",
    "3ashan n3ala2 el zeena kwys tyb",
    "5aleeha 3aleky el marady",
    "3ashan 5atry",
    "Kol sana wenty tyba",
    "haz3l wlahy",
    "enty 3arfa eny ma2darsh afdal keda kteer 5alas ba2a"
];

let messageIndex = 0;

function handleNoClick() {
    shuffleImage(); 

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