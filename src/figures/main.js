/**
 * Main class for figures
 * Contain three main functions
 */
class Figure {
    constructor(x, y){
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.add(this.applyGravity.bind(this));
        this.x = x;
        this.y = y;
    }

    /**
     * Function checks whether the ticker is running
     * and and applies gravity for figures
     */
    applyGravity() {
        if (this.ticker.started) {
            this.model.position.y += Engine.gravity;

            // If the figure outside the game area removes it
            if (this.model.position.y > Engine.game.screen.height + 100) {
                this.click();
            }
        }
    }

    /**
     *
     * @param {int} x - x position
     * @param {int} y - y position
     * @param {int} fill - fill color
     */
    drawFigure(x, y, fill) {}

    click(event) {
        // check if this event
        if (event) {
            Engine.game.redrawSameFigures(this);
        } else {
            Engine.game.figures = Engine.game.figures.filter(figure => !Object.is(figure, this));
        }
        this.ticker.destroy();
        this.model.clear();
        this.model.destroy();
    }

}