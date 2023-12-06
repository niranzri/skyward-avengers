const images = [
    {name: 'stratus', img: '1-stratus.jpg'},
    {name: 'stratocumulus', img: '2-stratocumulus.jpg'},
    {name: 'cumulus', img: '3-cumulus.jpg'},
    {name: 'nimbostratus', img: '4-nimbostratus.jpg'},
    {name: 'altostratus', img: '5-altostratus.jpg'},
    {name: 'altocumulus', img: '6-altocumulus.jpg'},
    {name: 'cirrostratus', img: '7-cirrostratus.jpg'},
    {name: 'cirrocumulus', img: '8-cirrocumulus.jpg'},
    {name: 'cirrus', img: '9-cirrus.jpg'},
    {name: 'cumulonimbus', img: '10-cumulonimbus.jpg'},
];

// Create instance of class CloudGame
const cloudGame = new CloudGame(images);

// Randomize images
const randomizedImages = cloudGame.randomizeImages();

// DOM elements -  Start & Instructions screens 
const gameScreen = document.querySelector(".js-start-screen");
let topContainer = document.querySelector(".top-container"); 
const cloudButton = document.querySelector(".cloud-button");

// DOM elements - Game screen
const mainScreen = document.querySelector(".js-main-screen");
const factoryButton = document.querySelector(".factory-button");
const gameImage = document.querySelector(".game-image");
const gameText =  document.querySelector(".game-text");
const counterGuessed = document.querySelector("#js-images-guessed");
const counterPlayed = document.querySelector("#js-images-played");
const heightButtons = document.querySelectorAll(".game-button");

// DOM elements - End screen
const endScreen = document.querySelector(".js-end-screen");
let endContainer = document.querySelector(".top-container-end");
const reStartButton = document.querySelector("#js-re-start-button");

// Move to instructions screen (click event)
function firstClick () {
    topContainer.innerHTML = `<h1>Do you want to become a skyward avenger?</h1>
    <br>
    <p> In the following game, you will learn to identify 
    the types of clouds you find at different height levels.</p>
    <br>
    <p> Why is this an important skill for an avenger?
    <ul>
        <li> <span> Visibility:</span> Lower clouds can reduce visibility, 
        which might affect your ability to spot danger or people in need from a distance.</li>
        <li><span>Flight navigation:</span> If you have the power to fly, flying above clouds 
        might be more energy-efficient than navigating through them. </li>
        <li><span>Stealth:</span> Need to hide? Lowers clouds could provide concealment at ground level, 
        while higher-clouds might help you hide from airborne or extra-terrestrial threats. </li>
        <li><span> Temperature & Pressure:</span> If you are sensitive to these factors, 
        knowing the cloud level is crucial for your well-being.</li>
    </ul>
    </p>
    <br>
    <p>You will be shown 10 pictures of clouds, one at a time. To earn points, click the correct answer. <em>May the force be with you!</em></p>`;
    topContainer.classList.remove("top-container");
    topContainer.classList.add("game-instructions");
    cloudButton.innerHTML = "NEXT";
    cloudButton.removeEventListener('click', firstClick);
    cloudButton.addEventListener('click', secondClick);
};

// Move to game screen (click event)
function secondClick () {
    gameScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    cloudButton.removeEventListener('click', secondClick);
}

cloudButton.addEventListener('click', firstClick);


let imageName = "";
let isHeightButtonClicked = false;

// Display cloud images & text 
function clickFactoryButton () {
    if (isHeightButtonClicked || imageName === "") {
        imageName = cloudGame.returnName(randomizedImages);
        let imageSrc = cloudGame.displayNextImage(randomizedImages);
        heightButtons.forEach((button) => { // adds event listeners again once a new image is displayed
            button.addEventListener('click', clickHeightButton);
        });
        //console.log(imageName);
        if (imageSrc) {
            gameImage.src = imageSrc;
            gameText.innerHTML = imageName;
        } else {
            factoryButton.removeEventListener('click', clickFactoryButton)
        }
        isHeightButtonClicked = false;
    }
};

// Check whether the correct game button has been clicked
function clickHeightButton (event) {
    let buttonId = event.target.id;
    let isCorrect = cloudGame.checkIfCorrect(buttonId, imageName);
    if (isCorrect){
        counterGuessed.innerHTML = parseInt(counterGuessed.innerHTML) + 1;
    }
    counterPlayed.innerHTML = parseInt(counterPlayed.innerHTML) + 1;
    let gameOver = cloudGame.gameOver();
    if (gameOver) {
        factoryButton.addEventListener('click', showEndScreen)
    }
    heightButtons.forEach((button) => {
        button.removeEventListener('click', clickHeightButton);
    });
    isHeightButtonClicked = true;
}

heightButtons.forEach((button) => {
    button.addEventListener('click', clickHeightButton);
});

factoryButton.addEventListener('click', clickFactoryButton);

function showEndScreen () {
    mainScreen.style.display = 'none';
    endScreen.style.display = 'flex';
    const score = parseInt(counterGuessed.innerHTML);
    if (score <= 4) {
        endContainer.innerHTML = `<h2> Result </h2>
        <br>
        <p> <span> Skyward novice: </span> You need to keep improving.</p>`
    } else if ((score >=5) && (score <= 8)) {
        endContainer.innerHTML = `<h2> Result </h2>
        <br>
        <p> <span> Skyward amateur: </span> You're on the right track, young padawan.</p>`
    } else if (score >= 9){
        endContainer.innerHTML = `<h2> Result </h2>
        <br>
        <p> <span> Skyward master: </span> Brilliant! You're ready to join the Avengers.</p>`
    }
    // cloudButton.innerHTML = "RE-START";
}

reStartButton.addEventListener("click", function () {
    location.reload(); //whenever you click on re-start button you re-load the page
});




