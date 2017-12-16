class Rectangle {
    constructor(x, y, fillColor = 0x990099) {
        this.x = x;
        this.y = y;
        this.width = getRandomInt(50, 80);
        this.height = getRandomInt(50, 80);

        this.model = new PIXI.Graphics();
        this.model.boundsPadding = 0;
        this.drawFigure(x, y, fillColor);
        this.model.interactive = true;
        this.model.buttonMode = true;

    }

    drawFigure(x, y, fillColor){

        this.model.beginFill(fillColor, 1);
        this.model.drawRect(x - 25, y - 25, this.width, this.height);
        this.model.endFill();
    }

    get area() {
        return this.width * this.height;
    }

    destroyFigure() {
        if (this.stage) {
            this.stage.removeChild(this);
        }
        this.model.destroy();
    }

}