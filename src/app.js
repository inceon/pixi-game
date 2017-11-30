//Create the renderer
Engine.game = PIXI.autoDetectRenderer(Engine.maxWidth, Engine.maxHeight);

//Add the canvas to the HTML document
document.body.appendChild(Engine.game.view);

var stage = new PIXI.Container();
var circle = new PIXI.Graphics();
circle.lineStyle(0);
circle.beginFill(0xf2f233, 1);
circle.drawCircle(550, 550, 50);
circle.endFill();
circle.interactive = true;
circle.buttonMode = true;
stage.addChild(circle);
circle.on('pointerdown', () => {
    console.log(5555555);
});

Engine.game.render(stage);
