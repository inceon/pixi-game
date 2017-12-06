class Triangle {
    constructor(x, y, fill = 0x990099) {
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
        }
        this.model = new PIXI.Graphics();
        this.model.beginFill(fill, 1);

        this.model.moveTo(this.a.x, this.a.y);
        this.model.lineTo(this.b.x, this.b.y);
        this.model.lineTo(this.c.x, this.c.y);
        this.model.lineTo(this.a.x, this.a.y);

        this.model.endFill();
        this.model.interactive = true;
        this.model.buttonMode = true;
        this.model.on('pointerdown', this.click.bind(this));

        this.gravity = 0;
        this.ticker = new PIXI.ticker.Ticker();

        this.ticker.add(this.applyGravity.bind(this));
        this.ticker.start();
    }

    applyGravity() {
        if (this.ticker.started) {
            this.model.position.y += this.gravity;
            if (this.model.position.y > Engine.game.screen.height) {
                this.ticker.destroy();
            }
        }
    }

    click(event) {
        this.ticker.destroy();
        this.model.destroy();
    }

    get area() {
        return Math.abs((
            (this.a.x * (this.b.y - this.c.y)) +
            (this.b.x * (this.c.y - this.a.y)) +
            (this.c.x * (this.a.y - this.b.y))
        ) / 2);
    }

}