function button() {
    return 'button';
}

class Slider {
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }
    nextSlide() {
        console.log('moving forvard')
    }
    prevSlide() {
        console.log('back forvard')
    }
    whoAmI() {
        console.log(`width: ${this.width}, height: ${this.height}, count: ${this.count} `);
    }

}

// const slider = new Slider(600, 400, 5),
//     someSlider = new Slider(400, 200, 10);

// slider.whoAmI();
// someSlider.whoAmI();

class AutoSlider extends Slider {
    constructor(width, height, count, auto) {
        super(width, height, count);
        this.auto = auto;
    }
    play() {
        console.log(`Autoplay: ${this.auto}`);
    }
}

const slider = new AutoSlider(500, 500, 4, true);

slider.whoAmI();
slider.play();