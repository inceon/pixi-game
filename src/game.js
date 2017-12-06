class Game extends PIXI.Application {
    constructor(width, height, config) {
        super(width, height, config);

        let rect = new PIXI.Graphics();
        rect.beginFill(config.backgroundColor, 1);
        rect.drawRect(0, 0, this.screen.width, this.screen.height);

        this.stage.interactive = true;
        this.stage.click = (ev) => {
            this.newCircle(ev.data.global);
        };

        this.stage.addChild(rect);
        this.gravity = 2;
    }

    newCircle(data) {
        let circle = new Circle(data.x, data.y, 50, getRandomColor());
        circle.gravity = this.gravity;

        this.stage.addChild(circle.model);

        console.log(circle.model);
    }

}