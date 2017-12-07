/**
 * Main class for figures
 * Contain three main functions
 */
class Figure {
    constructor(){
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.add(this.applyGravity.bind(this));
    }

    /**
     * Function checks whether the ticker is running
     * and and applies gravity for figures
     */
    applyGravity() {
        if (this.ticker.started) {
            this.model.position.y += Engine.gravity;

            // If the figure outside the game area removes it
            if (this.model.position.y > Engine.game.screen.height) {
                this.click();
            }
        }
    }

    drawFigure(x, y, fill) {}

    click(event) {
        this.ticker.destroy();
        this.model.destroy();
    }

}