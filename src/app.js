//Create the renderer
Engine.game = new PIXI.Application(
    Engine.maxWidth, Engine.maxHeight, Engine.config
);

Engine.game.backgroundColor = 0x000032;

//Add the canvas to the HTML document
document.body.appendChild(Engine.game.view);

var rect = new PIXI.Graphics();
    rect.beginFill(0x000011, 1);
    rect.drawRect(0, 0, Engine.maxWidth, Engine.maxHeight);

Engine.game.stage.interactive = true;
Engine.game.stage.click = (ev) => {
    newRect(ev.data.global);
};

Engine.game.stage.addChild(rect);

var figures = [];
var gravity = 2;
function newRect(data) {
    let rect = new PIXI.Graphics();
        rect.lineStyle(0);
        rect.beginFill(0x990099, 0.5);
        rect.drawCircle(data.x, data.y, 60);
        rect.endFill();

    Engine.game.stage.addChild(rect);

    Engine.game.ticker.add(() => {
        rect.position.y += gravity;
        console.log('tick');
    });
}
    
// Engine.game.render(stage);
