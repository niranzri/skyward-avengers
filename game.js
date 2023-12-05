class CloudGame {
    constructor(images) {
        this.images = images;
        this.imagesGuessed = 0;
        this.imagesPlayed = 0;
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

    // gets images 
    getImages() {
        return this.images;
    }

    // checks if answer correct & upadtes score
    checkIfCorrect(buttonId, image) {
        const guessedImage = document.querySelector(".js-images-guessed");
        const playedImage = document.querySelector(".js-images-played");
        this.imagesPlayed += 1;
        playedImage.textContent = this.imagesPlayed;
        if ((['stratus', 'stratocumulus', 'cumulus', 'nimbostratus', 'cumulonimbus'].includes(image.name) 
            && buttonId === 'low-button') || 
            (['altostratus', 'altocumulus', 'cumulonimbus'].includes(image.name)
            && buttonId === 'medium-button') || 
            (['cirrostratus', 'cirrocumulus', 'cirrus', 'cumulonimbus'].includes(image.name)
            && buttonId === 'high-button')) {
            this.imagesGuessed += 1;
            guessedImage.textContent = this.imagesGuessed;
            return true;
        } else {
            return false;
        }
    }

}



