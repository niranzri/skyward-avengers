const images = [
    {name: 'stratus', img: '1-stratus.jpg', 
    text: 'characterized by their uniform, flat, and hazy appearance, they often cover the sky in an even sheet and can vary in color from dark gray to nearly white. These clouds are known to produce a light drizzle or a small amount of snow.'},
    {name: 'stratocumulus', img: '2-stratocumulus.jpg',
    text: 'characterized by rounded clumps or patches that usually form in groups, lines, or waves. Found in all kinds of weather, they may indicate storms to come, but it is rare to get anything more than the lightest drizzle from them.'},
    {name: 'cumulus', img: '3-cumulus.jpg',
    text: 'often described as puffy, cotton-like or cauliflower-shaped clouds; this shape is due to their formation via atmospheric convection. They are usually spotted in fair weather conditions.'},
    {name: 'nimbostratus', img: '4-nimbostratus.jpg',
    text: 'amorphous, nearly uniform, and often dark-grey clouds. They are generally the sign of an approaching warm or occluded front producing steady moderate precipitation in the form of rain, snow, or sleet, but they produce no lighting or thunder.'},
    {name: 'altostratus', img: '5-altostratus.jpg',
    text: ' generally gray or blue-tinged with a largely-uniform blanket-like appearance. They are composed of water droplets and/or ice crystals, because they are the result of the condensation of water vapor. They constitute 1/3 of the Earth\'s total cloud coverage.'},
    {name: 'altocumulus', img: '6-altocumulus.jpg',
    text: 'characterized by white or grey globular masses or rolls in layers or patches. They have a more ethereal appearance than other fluffier clouds because they are made up of a mix of ice and water. Generally associated with settled weather, if they form rain it does not reach the ground.'},
    {name: 'cirrostratus', img: '7-cirrostratus.jpg',
    text: 'very thin and stratiform clouds, they are made of ice crystals and they can make halos. Their presence indicates a large amount of moisture in the upper troposphere.'},
    {name: 'cirrocumulus', img: '8-cirrocumulus.jpg',
    text: 'small rounded puffs formed via convection, they often appear in long rows in the sky. They are composed almost entirely from ice crystals, and their precipitation never reaches the surface, which means they are usually associated with fair weather.'},
    {name: 'cirrus', img: '9-cirrus.jpg', 
    text: 'they have a delicate and hair-like appearance. They are made up completely of ice crystals which form when ascending dry air makes water vapour (including contrails) turn into ice.'},
    {name: 'cumulonimbus', img: '10-cumulonimbus.jpg',
    text: 'dense, towering vertical clouds. They form from water vapour condensing that builds upward because of air currents. Their most distinctive feature is that they can produce lightning and other dangerous severe weather, such as tornadoes, hazardous winds and large hailstones.'},
];

const cloudGame = new CloudGame(images);
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

// Move to instructions screen upon click
function clickStartButton () {
    topContainer.innerHTML = `<h1>Do you want to become a skyward avenger?</h1>
    <br>
    <p> In the following game, you will learn to identify 
    the types of clouds you find at different height levels.</p>
    <br>
    <p> Why is this an important skill for an avenger?</p>
    <br>
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
    <br>
    <p>You will be shown 10 pictures of clouds, one at a time. To earn points, click the correct answer. <em>May the force be with you!</em></p>`;
    topContainer.classList.remove("top-container");
    topContainer.classList.add("game-instructions");
    cloudButton.innerHTML = "NEXT";
    cloudButton.removeEventListener('click', clickStartButton);
    cloudButton.addEventListener('click', clickNextButton);
};

// Moves to game screen upon click on start button
function clickNextButton () {
    gameScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    cloudButton.removeEventListener('click', clickNextButton);
}

cloudButton.addEventListener('click', clickStartButton);

// Displays cloud images & text 
let imageName = "";
let isHeightButtonClicked = false;

function clickFactoryButton () {
    if (isHeightButtonClicked || imageName === "") {
        imageName = cloudGame.returnName(randomizedImages);
        imageText = cloudGame.returnText(randomizedImages);
        let imageSrc = cloudGame.displayNextImage(randomizedImages);
        // adds 'click' to all game buttons again after new image displayed
        heightButtons.forEach((button) => { 
            button.addEventListener('click', clickHeightButton);
        });
        //console.log(imageName);
        if (imageSrc) {
            gameImage.src = imageSrc;
            gameText.innerHTML = `${imageName}: ${imageText}`;
        // removes 'click' from factory button once a click event has been triggered
        } else {
            factoryButton.removeEventListener('click', clickFactoryButton)
        }
        isHeightButtonClicked = false;
    }
};

// Checks if correct game button has been clicked and updates score
function clickHeightButton (event) {
    let buttonId = event.target.id;
    let isCorrect = cloudGame.checkIfCorrect(buttonId, imageName);
    if (isCorrect){
        counterGuessed.innerHTML = parseInt(counterGuessed.innerHTML) + 1;
    }
    counterPlayed.innerHTML = parseInt(counterPlayed.innerHTML) + 1;
    let gameOver = cloudGame.gameOver();
    // adds 'click' to factory button to move to final screen once game is over
    if (gameOver) {
        factoryButton.addEventListener('click', showEndScreen)
    }
    // removes 'click' from all game buttons once a click event has been triggered
    heightButtons.forEach((button) => {
        button.removeEventListener('click', clickHeightButton);
    });
    isHeightButtonClicked = true;
}

// Adds event listener 'click' to game buttons
heightButtons.forEach((button) => {
    button.addEventListener('click', clickHeightButton);
});

factoryButton.addEventListener('click', clickFactoryButton);

// Shows end screen and updates text displayed according to score
function showEndScreen () {
    mainScreen.style.display = 'none';
    endScreen.style.display = 'flex';
    const score = parseInt(counterGuessed.innerHTML);
    if (score <= 4) {
        endContainer.innerHTML = `<h2> Result </h2>
        <br>
        <p> <span> Skyward novice: </span> You're at the starting line, much like Tony Stark in his early days. 
        It might seem daunting now, but remember, every expert was once a beginner. The sky's the limit! </p>`
    } else if ((score >=5) && (score <= 7)) {
        endContainer.innerHTML = `<h2> Result </h2>
        <br>
        <p> <span> Skyward amateur: </span> You've moved past the initial stage, just like Falcon when he took flight. 
        The sky is no longer a mystery but a canvas for you to explore. Continue the ascent skyward!” </p>`
    } else if (score >= 8){
        endContainer.innerHTML = `<h2> Result </h2>
        <br>
        <p> <span> Skyward master: </span> Impressive! Like Thor, you've mastered the skies. 
        With your cloud knowledge, you're ready to join the Avengers. Avengers, unite!” </p>`
    }
}

// Reloads page upon click on re-start button
reStartButton.addEventListener("click", function () {
    location.reload(); 
});




