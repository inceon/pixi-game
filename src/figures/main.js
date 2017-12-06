class Figure {
    constructor(){
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.add(this.applyGravity.bind(this));
    }

    applyGravity() {
        if (this.ticker.started) {
            this.model.position.y += Engine.gravity;
            if (this.model.position.y > Engine.game.screen.height) {
                this.ticker.destroy();
            }
        }
    }

    drawFigure(x, y, fill) {}

    click(event) {
        this.ticker.destroy();
        this.model.destroy();
    }

}