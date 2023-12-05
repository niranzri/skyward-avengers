class CloudGame {
    constructor(images) {
        this.images = images;
    }

    shuffleImages(images) {
    if (!this.images){
      return undefined;
    } else {
      for (let i = this.images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        let currentElement = this.images[i];
        this.images[i] = this.images[j];
        this.images[j] = currentElement;
      }
      return images;
    } 
  }


}