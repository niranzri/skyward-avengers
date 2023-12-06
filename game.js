class CloudGame {
    constructor(images, imageName, buttonId) {
        this.images = images;
        this.imageName = imageName;
        this.buttonId = buttonId;
        this.numberImagesGuessed = 0;
        this.numberImagesPlayed = 0;
        this.currentImageIndex = 0;
    }

    // randomizes images at the beginning of the game
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

    // checks if answer is correct & updates score
    checkIfCorrect(buttonId, imageName) {
        if ((['stratus', 'stratocumulus', 'cumulus', 'nimbostratus', 'cumulonimbus'].includes(imageName) 
            && buttonId === 'js-low-button') || 
            (['altostratus', 'altocumulus', 'cumulonimbus'].includes(imageName)
            && buttonId === 'js-medium-button') || 
            (['cirrostratus', 'cirrocumulus', 'cirrus', 'cumulonimbus'].includes(imageName)
            && buttonId === 'js-high-button')) 
        {
            return true;
        } else {
            return false;
        }
    }

    // displays next cloud image
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

    // returns current image's name
    returnName (array) {
        this.array = array;
        return this.array[this.currentImageIndex].name;
    }

    // checks whether we've looped over the whole array to signal the end of the game 
    gameOver() {
        if (this.currentImageIndex >= this.array.length) {
            return true;
        }
    }
}






