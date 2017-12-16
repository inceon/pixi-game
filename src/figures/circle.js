class Circle {
    constructor(x, y, fillColor = 0x990099) {
        this.x = x;
        this.y = y;
        this.radius = getRandomInt(30, 60);

        this.model = new PIXI.Graphics();
        this.model.boundsPadding = 0;
        this.drawFigure(x, y, fillColor);
        this.model.interactive = true;
        this.model.buttonMode = true;

    }

    drawFigure(x, y, fillColor){
        this.model.beginFill(fillColor, 1);
        this.model.drawCircle(x, y, this.radius);
        this.model.endFill();
    }

    get area() {
        return Math.PI  * Math.pow(this.radius, 2);
    }

    destroyFigure() {
        if (this.stage) {
            this.stage.removeChild(this);
        }
        this.model.destroy();
    }

}