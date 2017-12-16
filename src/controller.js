class gameController {
    constructor(model, view) {
        this._model = model;
        this._view = view;

        this._view.stage.interactive = true;
        this._view.stage.on('pointerdown', (ev) => {
            this.newRandomFigure(ev.data.global);
        });

        this._view.increaseSpeedButton.addEventListener("click", () => {
            this._model.increaseSpeed();
        });

        this._view.decreaseSpeedButton.addEventListener("click", () => {
            this._model.decreaseSpeed();
        });

        this._view.increaseGravityButton.addEventListener("click", () => {
            this._model.increaseGravityY();
        });

        this._view.decreaseGravityButton.addEventListener("click", () => {
            this._model.decreaseGravityY();
        });

        this.makeGenerateFigureInterval();

        // Tickers for updating view and checking figure position
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.add(this._view.update.bind(this._view));
        this.ticker.add(this.update.bind(this));
        this.ticker.start();
    }

    /**
     * Function for generating new random figure
     */
    newRandomFigure(data) {
        let randomFigure = choice(this._model.figureClasses);
        let figure = new randomFigure(data.x, data.y, getRandomColor());
        figure.model.on('pointerdown', () => {
            this._model.removeItem(figure);
            this.redrawSameFigures(figure);
            figure.destroyFigure();
        });

        this._model.addItem(figure);
        this._view.stage.addChild(figure.model);
    }

    /**
     * Function for redrawing the figures same type
     * @param figure - figure instance
     */
    redrawSameFigures(figure) {
        let items = this._model.items;
        for (let item of items) {
            if (item instanceof figure.constructor) {
                item.model.clear();
                item.drawFigure(item.x, item.y, getRandomColor());
            }
        }
    }

    /**
     * Creating interval for random generating figures
     */
    makeGenerateFigureInterval() {
        this.generateInterval = setInterval(() => {
            // Generate N figures
            for (let i = 0; i < this._model.speed; i++) {
                this.newRandomFigure({
                    x: getRandomInt(30, this._view.width - 30),
                    y: -50
                });
            }

            this.update();
        }, this._model.step * 1000);
    }

    /**
     * Delete a figure if it is outside the screen
     */
    update() {
        let items = this._model.items;
        items.forEach((item) => {
            if (item.model.y > this._view.height + item.model.height) {
                this._model.removeItem(item);
                item.destroyFigure();
            }
        });
    }
}