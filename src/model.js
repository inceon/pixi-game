class gameModel {
    constructor() {

        this._gravity = {x: 0, y: 1};
        this._speed = 3;
        this._step = 1;
        this._items = [];
        this._surfaceArea = 0;
        // list of figures classes
        this.figureClasses = [Rectangle, Triangle, Circle];

    }

    /**
     * Add one figure to figures array
     * @param item - figure instance
     */
    addItem(item) {
        this._items.push(item);
        this.updateSurfaceArea(item.area);
    }

    /**
     * Remove figure from figures array
     * @param item - figure instance
     */
    removeItem(item) {
        let index = this._items.indexOf(item);
        this.updateSurfaceArea(-item.area);
        this._items.splice(index, 1);
    }

    get items() {
        return this._items;
    }

    get gravity() {
        return this._gravity;
    }

    set gravity(value) {
        this._gravity = value;
    }

    increaseSpeed() {
        this._speed += this._step;
    }

    decreaseSpeed() {
        if (this._speed === 0) {
            return;
        }
        this._speed -= this._step;
    }

    increaseGravityY() {
        this._gravity.y += this._step;
    }

    decreaseGravityY() {
        if (this._gravity.y === 0) {
            return;
        }
        this._gravity.y -= this._step;
    }

    increaseGravityX() {
        this._gravity.x += this._step;
    }

    decreaseGravityX() {
        if (this._gravity.x = 0) {
            return;
        }
        this._gravity.x -= this._step;
    }

    get speed() {
        return this._speed;
    }

    get step() {
        return this._step;
    }

    get surfaceArea() {
        return this._surfaceArea;
    }

    /**
     * Update total surface area
     * @param {int} value
     */
    updateSurfaceArea(value) {
        this._surfaceArea += value;
        this._surfaceArea = Math.max(this._surfaceArea, 0);
    }
}