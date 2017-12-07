class Rectangle extends Figure {
    constructor(x, y, fillColor = 0x990099) {
        super(x, y);
        this.width = getRandomInt(50, 80);
        this.height = getRandomInt(50, 80);

        this.model = new PIXI.Graphics();
        this.drawFigure(x, y, fillColor);
        this.model.interactive = true;
        this.model.buttonMode = true;
        this.model.on('pointerdown', this.click.bind(this));

        this.ticker.start();
    }

    drawFigure(x, y, fillColor){

        this.model.beginFill(fillColor, 1);
        this.model.drawRect(x - 25, y - 25, this.width, this.height);
        this.model.endFill();
    }

    get area() {
        return this.width * this.height;
    }

}