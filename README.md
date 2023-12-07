# Skyward Avengers

[Click here to see deployed game](niranzri.github.io/skyward-avengers/)

## Description
Skyward Avengers is an Avengers-themed educational game where players have to classify clouds based on their height (low-level, medium-level, or high-level). The game is not just a classification game but also a quiz: the player gets awarded points for correct answers. The final score is accompanied by a result description that sums up the player's skill in cloud classification. 


## MVP
- The game has 4 states: start, instructions, game, gameover.
- To move between states, the player clicks a central footer button. 
- The start and instructions screen introduce the aim and theme of the game.
- In the main screen, by clicking the central footer button images of clouds are displayed one by one. The images are accompanied by the names of the clouds (for all screens) and brief descriptions thereof (only for large and medium screens). 
- To score points, the player must click the correct button. There are three possibilities: low-level clouds (< 2000m), medium-level clouds (2000 - 6000m) and high-level clouds (> 6000m). 
- The current game displays 10 pictures, but extensions are possible.
- Bonus facts are displayed when the 'nimbostratus' and 'cumulonimbus' clouds are displayed. 
- Sound effects accompany the button click events, to provide a better user experience.
- After all images are displayed, the text in the central footer button changes to indicate to the player that they can move to the final screen.
- In the gameover screen, the score and a text interpretation of the score are provided.
- Audio accompanies animates the gameover screen.
- To re-start the game, the player has to click the central footer button. 


## Backlog
- Extending the current number of images.
- Incorporating a 'hint' option, so that descriptions are only displayed when the player needs them. The scoring system would therefore need to be adjusted.
- Incorporating a 'show me the correct answer' option. 
- Replacing the current click events on the game buttons by drag-and-drop events. 


## Techonologies Used
- HTML
- CSS
- Javascript
- DOM Manipulation
- JS Classes
- JS Audio()


## Data structure
### script.js
- clickStartButton();
- clickNextButton();
- clickFactoryButton();
- clickHeightButton();
- showEndScreen();

### game.js
CloudGame()
  - this.images;
  - this.imageName;
  - this.imageText;
  - this.buttonId;
  - this.numberImagesPlayed;
  - this.numberImagesGuessed;
  - this.currentImageIndex;
- randomizeImages();
- checkIfCorrect();
- displayAlert();
- displayNextImage();
- returnName();
- returnText();
- gameOver();


## Links
- [Slides Link](http://slides.com)
- [Github repository Link](https://github.com/niranzri/skyward-avengers)
- [Deployment Link](niranzri.github.io/skyward-avengers/)
