class CloudGame {
    constructor(images, imageName, imageText, buttonId) {
        this.images = images;
        this.imageName = imageName;
        this.imageText = imageText;
        this.buttonId = buttonId;
        this.numberImagesPlayed = 0;
        this.numberImagesGuessed = 0;
        this.currentImageIndex = 0;
    }

    // Randomizes images at the beginning of the game
    randomizeImages() {
        if (!this.images){
        return undefined;
        } else {
        for (let i = this.images.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random()*(i+1));
            let currentElement = this.images[i];
            this.images[i] = this.images[j];
            this.images[j] = currentElement;
        }
        return this.images;
        } 
    }

    // Checks if answer is correct & updates score
    checkIfCorrect(buttonId, imageName) {
        if ((['stratus', 'stratocumulus', 'cumulus', 'nimbostratus', 'cumulonimbus'].includes(imageName) 
            && buttonId === 'js-low-button') || 
            (['altostratus', 'altocumulus', 'nimbostratus', 'cumulonimbus'].includes(imageName)
            && buttonId === 'js-medium-button') || 
            (['cirrostratus', 'cirrocumulus', 'cirrus', 'cumulonimbus'].includes(imageName)
            && buttonId === 'js-high-button')) 
        {
            let correct = new Audio("audio/correctAnswer.mp3");
            correct.play()
            return true;
        } else {
            let incorrect = new Audio("audio/incorrectAnswer.mp3");
            incorrect.play()
            return false;
        }
    }

    // Displays alert message with bonus info if 'nimbostratus' or 'cumulonimbus' images are displayed. 
    displayAlert(imageName) {
        if (imageName === 'nimbostratus') {
            setTimeout(() => {
                alert("Bonus fact: nimbostratus are considered both low and medium-level clouds: they usually form in the middle layer and have bases that can extend into the lower layer.")
            }, 500);
        }
        if (imageName === 'cumulonimbus') {
            setTimeout(() => {
                alert("Bonus fact: cumulonimbus are multi-level clouds because they span the low, middle, and high layers.")
            }, 500);
        }
    }

    // Displays next cloud image
    displayNextImage (array) {
        this.array = array;
        if (this.currentImageIndex >= this.images.length) {
            this.currentImageIndex = 0;
            return; 
        } 
        let imageSrc = `images/${this.array[this.currentImageIndex].img}`;
        this.currentImageIndex += 1;
        return imageSrc;
    };

    // Returns current image's name
    returnName (array) {
        this.array = array;
        return this.array[this.currentImageIndex].name;
    }

    // Returns current image's description
    returnText (array) {
        this.array = array;
        return this.array[this.currentImageIndex].text;
    }

    // Checks whether we've looped over the whole array to signal the end of the game 
    gameOver() {
        if (this.currentImageIndex >= this.array.length) {
            return true;
        }
    }
}






