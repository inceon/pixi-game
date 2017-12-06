class Game extends PIXI.Application {

    constructor(width, height, config) {
        super(width, height, config);

        this.figureClasses = [Triangle];

        let rect = new PIXI.Graphics();
        rect.beginFill(config.backgroundColor, 1);
        rect.drawRect(0, 0, this.screen.width, this.screen.height);

        this.stage.interactive = true;
        this.stage.click = this.newRandomFigure.bind(this);

        this.stage.addChild(rect);
        this.gravity = 2;
    }

    newRandomFigure(ev) {
        let randomFigure = choice(this.figureClasses);
        let figure = new randomFigure(ev.data.global.x, ev.data.global.y, getRandomColor());
        figure.gravity = this.gravity;

        this.stage.addChild(figure.model);

        console.log(figure.model);
    }

}