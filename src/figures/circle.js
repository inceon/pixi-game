class Circle extends Figure{
    constructor(x, y, fillColor = 0x990099) {
        super(x, y);
        this.radius = getRandomInt(30, 60);

        this.model = new PIXI.Graphics();
        this.drawFigure(x, y, fillColor);
        this.model.interactive = true;
        this.model.buttonMode = true;
        this.model.on('pointerdown', this.click.bind(this));

        this.ticker.start();
    }

    drawFigure(x, y, fillColor){
        this.model.beginFill(fillColor, 1);
        this.model.drawCircle(x, y, this.radius);
        this.model.endFill();
    }

    get area() {
        return Math.PI  * Math.pow(this.radius, 2);
    }

}