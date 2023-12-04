const images = [];

const gameScreen = document.querySelector(".game-screen");
const instructions = document.querySelector(".game-instructions");
document.querySelector(".main-button").addEventListener('click', function () {
    instructions.style.display = "block";
    gameScreen.style.display = "none";
})

