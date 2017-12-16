class gameView {
    constructor(model) {
        this._model = model;
        this.viewWidth  = 850;
        this.viewHeight = 500;

        let gameElement = document.getElementById('game');
        this.renderer = PIXI.autoDetectRenderer(this.viewWidth, this.viewHeight);
        gameElement.appendChild(this.renderer.view);

        this.stage = new PIXI.Container();

        let area = new PIXI.Graphics();
            area.beginFill(0xCFE4F7);
            area.drawRect(0, 0, this.viewWidth, this.viewHeight);
            area.endFill();

        this.interactive = true;
        this.stage.addChild(area);

        this.renderer.render(this.stage);

        // View buttons
        this.increaseSpeedButton     = document.getElementById('increase_speed');
        this.decreaseSpeedButton     = document.getElementById('decrease_speed');
        this.increaseGravityButton   = document.getElementById('increase_gravity');
        this.decreaseGravityButton   = document.getElementById('decrease_gravity');

        this.speedValueEl            = document.getElementById('speed_value');
        this.gravityValueEl          = document.getElementById('gravity_value');

        this.currentFigureCounterEl  = document.getElementById('figures_count');
        this.surfaceAreaEl           = document.getElementById('square_count');
    }

    update() {
        let gravity = this._model.gravity;
        let speed   = this._model.speed;
        let items   = this._model.items;
        let surface = this._model.surfaceArea;

        // Apply gravity to figures
        items.forEach((item) => {
            item.model.x += gravity.x;
            item.model.y += gravity.y;
        });

        this.gravityValueEl.innerHTML          = "" + gravity.y;
        this.speedValueEl.innerHTML            = "" + speed;
        this.currentFigureCounterEl.innerHTML  = "" + items.length;
        this.surfaceAreaEl.innerHTML           = "" + surface.toFixed(2);

        this.renderer.render(this.stage);
    }

    get height() {
        return this.viewHeight;
    }

    get width() {
        return this.viewWidth;
    }
}