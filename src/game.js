class Game extends PIXI.Application {

    constructor(width, height, config) {
        super(width, height, config);

        // list of figures classes
        this.figureClasses = [Rectangle, Triangle, Circle];
        // list of figures on the screen
        this.figures = [];

        let area = this.drawGameArea(config);
        this.stage.interactive = true;
        // Click eveng on game area
        this.stage.click = (ev) => {
            this.newRandomFigure(ev.data.global);
        };
        this.stage.addChild(area);

        this.generateInterval = setInterval(() => {
            for(let i = 0; i < Engine.speed; i++) {
                this.newRandomFigure({
                    x: getRandomInt(30, this.screen.width - 30),
                    y: -50
                });
            }
        }, 1000);
        this.ticker.start();
    }

    drawGameArea(config) {
        let area = new PIXI.Graphics();
        area.beginFill(config.backgroundColor, 1);
        area.drawRect(0, 0, this.screen.width, this.screen.height);
        return area;
    }

    // Event handler for click on game area
    newRandomFigure(data) {
        let randomFigure = choice(this.figureClasses);
        let figure = new randomFigure(data.x, data.y, getRandomColor());
        figure.gravity = this.gravity;

        this.stage.addChild(figure.model);
        this.figures.push(figure);
    }

    /**
     * Function for redrawing same figures
     * @param figureClass - deleted figure instance
     */
    redrawSameFigures(figureClass) {
        this.figures = this.figures.filter(function (figure) {
            return !Object.is(figure, figureClass);
        });
        for(let figure of this.figures) {
            if ( figure instanceof figureClass.constructor) {
                if ( figure.model.graphicsData ) {
                    figure.model.clear();
                    figure.drawFigure(figure.x, figure.y, getRandomColor());
                }
            }
        }
    }

}