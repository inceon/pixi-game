//Create the renderer
Engine.game = new PIXI.Application(
    Engine.maxWidth, Engine.maxHeight, Engine.config
);

Engine.game.backgroundColor = 0x000032;

//Add the canvas to the HTML document
document.body.appendChild(Engine.game.view);

var rect = new PIXI.Graphics();
    rect.beginFill(0x000022, 1);
    rect.drawRect(0, 0, Engine.maxWidth, Engine.maxHeight);

Engine.game.stage.interactive = true;
Engine.game.stage.click = (ev) => {
    newRect(ev.data.global);
};

Engine.game.stage.addChild(rect);
Engine.game.gravity = 2;

var figures = [];

function newRect(data) {

    let circle = new Circle(data.x, data.y);
    circle.gravity = Engine.game.gravity;

    Engine.game.stage.addChild(circle.model);

    console.log(circle.model);

}
    
// Engine.game.render(stage);
