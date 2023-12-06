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

    // checks if answer correct & updates score
    checkIfCorrect(buttonId, imageName, guessedImage, playedImage) {
        this.numberImagesPlayed += 1;
        playedImage.textContent = this.numberImagesPlayed;
        if ((['stratus', 'stratocumulus', 'cumulus', 'nimbostratus', 'cumulonimbus'].includes(imageName) 
            && buttonId === 'low-button') || 
            (['altostratus', 'altocumulus', 'cumulonimbus'].includes(imageName)
            && buttonId === 'medium-button') || 
            (['cirrostratus', 'cirrocumulus', 'cirrus', 'cumulonimbus'].includes(imageName)
            && buttonId === 'high-button')) 
        {
            this.imagesGuessed += 1;
            guessedImage.textContent = this.numberImagesGuessed;
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
}





