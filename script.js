const images = [];

const gameScreen = document.querySelector(".game-screen");
const mainScreen = document.querySelector(".main-screen");
let topContainer = document.querySelector(".top-container"); 
let mainButton = document.querySelector(".main-button");

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
    mainScreen.style.display = 'flex';
    mainButton.removeEventListener('click', secondClick);
}

mainButton.addEventListener('click', firstClick);


