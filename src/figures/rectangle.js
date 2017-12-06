class Rectangle extends Figure {
    constructor(x, y, fill = 0x990099) {
        super();
        this.width = getRandomInt(50, 80);
        this.height = getRandomInt(50, 80);

        this.drawFigure(x, y, fill);
        this.model.interactive = true;
        this.model.buttonMode = true;
        this.model.on('pointerdown', this.click.bind(this));

        this.ticker.start();
    }

    drawFigure(x, y, fill){
        this.model = new PIXI.Graphics();

        this.model.beginFill(fill, 1);
        this.model.drawRect(x - 25, y - 25, this.width, this.height);
        this.model.endFill();
    }

    get area() {
        return this.width * this.height;
    }

}