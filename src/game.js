class Game extends PIXI.Application {

    constructor(width, height, config) {
        super(width, height, config);

        this.figureClasses = [Rectangle, Triangle, Circle];
        this.figures = [];

        let area = this.drawGameArea(config);
        this.stage.interactive = true;
        // Click eveng on game area
        this.stage.click = this.newRandomFigure.bind(this);
        this.stage.addChild(area);
    }

    drawGameArea(config) {
        let area = new PIXI.Graphics();
        area.beginFill(config.backgroundColor, 1);
        area.drawRect(0, 0, this.screen.width, this.screen.height);
        return area;
    }

    // Event handler for click on game area
    newRandomFigure(ev) {
        let randomFigure = choice(this.figureClasses);
        let figure = new randomFigure(ev.data.global.x, ev.data.global.y, getRandomColor());
        figure.gravity = this.gravity;

        this.stage.addChild(figure.model);
        this.figures.push(figure);

        console.log(figure.model);
    }

    redrawSameFigures(figureClass) {
        this.figures = this.figures.filter(function (figure) {
            return !Object.is(figure, figureClass);
        });
        for(let figure of this.figures) {
            if ( figure instanceof figureClass.constructor) {
                figure.drawFigure(figure.x, figure.y, getRandomColor());
            }
        }
    }

}