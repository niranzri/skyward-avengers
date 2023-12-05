const images = [
    {name: 'stratus', img: '1-stratus.jpg', status: 'inactive'},
    {name: 'stratocumulus', img: '2-stratocumulus.jpg', status: 'inactive'},
    {name: 'cumulus', img: '3-cumulus.jpg', status: 'inactive'},
    {name: 'nimbostratus', img: '4-nimbostratus.jpg', status: 'inactive'},
    {name: 'altostratus', img: '5-altostratus.jpg', status: 'inactive'},
    {name: 'altocumulus', img: '6-altocumulus.jpg', status: 'inactive'},
    {name: 'cirrostratus', img: '7-cirrostratus.jpg', status: 'inactive'},
    {name: 'cirrocumulus', img: '8-cirrocumulus.jpg', status: 'inactive'},
    {name: 'cirrus', img: '9-cirrus.jpg', status: 'inactive'},
    {name: 'cumulonimbus', img: '10-cumulonimbus.jpg', status: 'inactive'},
];

// Create instance of class CloudGame

const cloudGame = new CloudGame(images);
cloudGame.shuffleImages(cloudGame.cards);

// First and second screens
const gameScreen = document.querySelector(".js-game-screen");
const mainScreen = document.querySelector(".js-main-screen");
let topContainer = document.querySelector(".top-container"); 
let mainButton = document.querySelector(".cloud-button");

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
    mainButton.innerHTML = "NEXT";
    mainButton.removeEventListener('click', firstClick);
    mainButton.addEventListener('click', secondClick);
};

function secondClick () {
    gameScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    mainButton.removeEventListener('click', secondClick);
}

mainButton.addEventListener('click', firstClick);


