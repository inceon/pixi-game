class Game extends PIXI.Application {

    constructor(width, height, config) {
        super(width, height, config);

        this.figureClasses = [Rectangle, Triangle, Circle];

        let area = this.drawGameArea(config);
        this.stage.interactive = true;
        this.stage.click = this.newRandomFigure.bind(this);
        this.stage.addChild(area);
    }

    drawGameArea(config) {
        let area = new PIXI.Graphics();
        area.beginFill(config.backgroundColor, 1);
        area.drawRect(0, 0, this.screen.width, this.screen.height);
        return area;
    }

    newRandomFigure(ev) {
        let randomFigure = choice(this.figureClasses);
        let figure = new randomFigure(ev.data.global.x, ev.data.global.y, getRandomColor());
        figure.gravity = this.gravity;

        this.stage.addChild(figure.model);

        console.log(figure.model);
    }

}