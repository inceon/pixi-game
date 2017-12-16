class Triangle {
    constructor(x, y, fillColor = 0x990099) {
        this.a = {
            x: x - 40,
            y: y - 40
        };
        this.b = {
            x,
            y: y + 30
        };
        this.c = {
            x: x + 40,
            y: y - 40
        };

        this.model = new PIXI.Graphics();
        this.drawFigure(x, y, fillColor);
        this.model.interactive = true;
        this.model.buttonMode = true;

    }

    drawFigure(x, y, fillColor) {
        this.model.beginFill(fillColor, 1);

        this.model.moveTo(this.a.x, this.a.y);
        this.model.lineTo(this.b.x, this.b.y);
        this.model.lineTo(this.c.x, this.c.y);
        this.model.lineTo(this.a.x, this.a.y);

        this.model.endFill();
    }

    get area() {
        return Math.abs((
            (this.a.x * (this.b.y - this.c.y)) +
            (this.b.x * (this.c.y - this.a.y)) +
            (this.c.x * (this.a.y - this.b.y))
        ) / 2);
    }

    destroyFigure() {
        if (this.stage) {
            this.stage.removeChild(this);
        }
        this.model.destroy();
    }

}