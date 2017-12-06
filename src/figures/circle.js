class Circle extends Figure{
    constructor(x, y, fill = 0x990099) {
        super();
        this.radius = getRandomInt(30, 60);

        this.drawFigure(x, y, fill);
        this.model.interactive = true;
        this.model.buttonMode = true;
        this.model.on('pointerdown', this.click.bind(this));

        this.ticker.start();
    }

    drawFigure(x, y, fill){
        this.model = new PIXI.Graphics();
        this.model.beginFill(fill, 1);
        this.model.drawCircle(x, y, this.radius);
        this.model.endFill();
    }

    get area() {
        return Math.PI  * Math.pow(this.radius, 2);
    }

}