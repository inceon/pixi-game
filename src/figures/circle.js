class Circle {
    constructor(x, y, fill = 0x990099) {
        this.radius = getRandomInt(30, 60);
        this.model = new PIXI.Graphics();
        this.model.beginFill(fill, 1);
        this.model.drawCircle(x, y, this.radius);
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
        return Math.PI  * Math.pow(this.radius, 2);
    }

}