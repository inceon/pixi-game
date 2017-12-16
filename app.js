"use strict";

/**
 * Get random integer within certain limits
 * @param {int} min
 * @param{int} max
 * @returns {int}
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/**
 * Get random color
 * @returns {int}
 */
function getRandomColor() {
  return getRandomInt(1, 0xffffff);
}

/**
 * Chice one random item from array
 * @param {array} array
 * @param {int} array.length
 * @returns {*}
 */
function choice(array) {
  return array[Math.floor(Math.random() * array.length)];
}
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gameView = function () {
    function gameView(model) {
        _classCallCheck(this, gameView);

        this._model = model;
        this.viewWidth = 850;
        this.viewHeight = 500;

        var gameElement = document.getElementById('game');
        this.renderer = PIXI.autoDetectRenderer(this.viewWidth, this.viewHeight);
        gameElement.appendChild(this.renderer.view);

        this.stage = new PIXI.Container();

        var area = new PIXI.Graphics();
        area.beginFill(0xCFE4F7);
        area.drawRect(0, 0, this.viewWidth, this.viewHeight);
        area.endFill();

        this.interactive = true;
        this.stage.addChild(area);

        this.renderer.render(this.stage);

        // View buttons
        this.increaseSpeedButton = document.getElementById('increase_speed');
        this.decreaseSpeedButton = document.getElementById('decrease_speed');
        this.increaseGravityButton = document.getElementById('increase_gravity');
        this.decreaseGravityButton = document.getElementById('decrease_gravity');

        this.speedValueEl = document.getElementById('speed_value');
        this.gravityValueEl = document.getElementById('gravity_value');

        this.currentFigureCounterEl = document.getElementById('figures_count');
        this.surfaceAreaEl = document.getElementById('square_count');
    }

    _createClass(gameView, [{
        key: 'update',
        value: function update() {
            var gravity = this._model.gravity;
            var speed = this._model.speed;
            var items = this._model.items;
            var surface = this._model.surfaceArea;

            // Apply gravity to figures
            items.forEach(function (item) {
                item.model.x += gravity.x;
                item.model.y += gravity.y;
            });

            this.gravityValueEl.innerHTML = "" + gravity.y;
            this.speedValueEl.innerHTML = "" + speed;
            this.currentFigureCounterEl.innerHTML = "" + items.length;
            this.surfaceAreaEl.innerHTML = "" + surface.toFixed(2);

            this.renderer.render(this.stage);
        }
    }, {
        key: 'height',
        get: function get() {
            return this.viewHeight;
        }
    }, {
        key: 'width',
        get: function get() {
            return this.viewWidth;
        }
    }]);

    return gameView;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gameModel = function () {
    function gameModel() {
        _classCallCheck(this, gameModel);

        this._gravity = { x: 0, y: 1 };
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


    _createClass(gameModel, [{
        key: "addItem",
        value: function addItem(item) {
            this._items.push(item);
            this.updateSurfaceArea(item.area);
        }

        /**
         * Remove figure from figures array
         * @param item - figure instance
         */

    }, {
        key: "removeItem",
        value: function removeItem(item) {
            var index = this._items.indexOf(item);
            this.updateSurfaceArea(-item.area);
            this._items.splice(index, 1);
        }
    }, {
        key: "increaseSpeed",
        value: function increaseSpeed() {
            this._speed += this._step;
        }
    }, {
        key: "decreaseSpeed",
        value: function decreaseSpeed() {
            if (this._speed === 0) {
                return;
            }
            this._speed -= this._step;
        }
    }, {
        key: "increaseGravityY",
        value: function increaseGravityY() {
            this._gravity.y += this._step;
        }
    }, {
        key: "decreaseGravityY",
        value: function decreaseGravityY() {
            if (this._gravity.y === 0) {
                return;
            }
            this._gravity.y -= this._step;
        }
    }, {
        key: "increaseGravityX",
        value: function increaseGravityX() {
            this._gravity.x += this._step;
        }
    }, {
        key: "decreaseGravityX",
        value: function decreaseGravityX() {
            if (this._gravity.x = 0) {
                return;
            }
            this._gravity.x -= this._step;
        }
    }, {
        key: "updateSurfaceArea",


        /**
         * Update total surface area
         * @param {int} value
         */
        value: function updateSurfaceArea(value) {
            this._surfaceArea += value;
            this._surfaceArea = Math.max(this._surfaceArea, 0);
        }
    }, {
        key: "items",
        get: function get() {
            return this._items;
        }
    }, {
        key: "gravity",
        get: function get() {
            return this._gravity;
        },
        set: function set(value) {
            this._gravity = value;
        }
    }, {
        key: "speed",
        get: function get() {
            return this._speed;
        }
    }, {
        key: "step",
        get: function get() {
            return this._step;
        }
    }, {
        key: "surfaceArea",
        get: function get() {
            return this._surfaceArea;
        }
    }]);

    return gameModel;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gameController = function () {
    function gameController(model, view) {
        var _this = this;

        _classCallCheck(this, gameController);

        this._model = model;
        this._view = view;

        this._view.stage.interactive = true;
        this._view.stage.on('pointerdown', function (ev) {
            _this.newRandomFigure(ev.data.global);
        });

        this._view.increaseSpeedButton.addEventListener("click", function () {
            _this._model.increaseSpeed();
        });

        this._view.decreaseSpeedButton.addEventListener("click", function () {
            _this._model.decreaseSpeed();
        });

        this._view.increaseGravityButton.addEventListener("click", function () {
            _this._model.increaseGravityY();
        });

        this._view.decreaseGravityButton.addEventListener("click", function () {
            _this._model.decreaseGravityY();
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


    _createClass(gameController, [{
        key: "newRandomFigure",
        value: function newRandomFigure(data) {
            var _this2 = this;

            var randomFigure = choice(this._model.figureClasses);
            var figure = new randomFigure(data.x, data.y, getRandomColor());
            figure.model.on('pointerdown', function () {
                _this2._model.removeItem(figure);
                _this2.redrawSameFigures(figure);
                figure.destroyFigure();
            });

            this._model.addItem(figure);
            this._view.stage.addChild(figure.model);
        }

        /**
         * Function for redrawing the figures same type
         * @param figure - figure instance
         */

    }, {
        key: "redrawSameFigures",
        value: function redrawSameFigures(figure) {
            var items = this._model.items;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item instanceof figure.constructor) {
                        item.model.clear();
                        item.drawFigure(item.x, item.y, getRandomColor());
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        /**
         * Creating interval for random generating figures
         */

    }, {
        key: "makeGenerateFigureInterval",
        value: function makeGenerateFigureInterval() {
            var _this3 = this;

            this.generateInterval = setInterval(function () {
                // Generate N figures
                for (var i = 0; i < _this3._model.speed; i++) {
                    _this3.newRandomFigure({
                        x: getRandomInt(30, _this3._view.width - 30),
                        y: -50
                    });
                }

                _this3.update();
            }, this._model.step * 1000);
        }

        /**
         * Delete a figure if it is outside the screen
         */

    }, {
        key: "update",
        value: function update() {
            var _this4 = this;

            var items = this._model.items;
            items.forEach(function (item) {
                if (item.model.y > _this4._view.height + item.model.height) {
                    _this4._model.removeItem(item);
                    item.destroyFigure();
                }
            });
        }
    }]);

    return gameController;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
    function Circle(x, y) {
        var fillColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0x990099;

        _classCallCheck(this, Circle);

        this.x = x;
        this.y = y;
        this.radius = getRandomInt(30, 60);

        this.model = new PIXI.Graphics();
        this.model.boundsPadding = 0;
        this.drawFigure(x, y, fillColor);
        this.model.interactive = true;
        this.model.buttonMode = true;
    }

    _createClass(Circle, [{
        key: "drawFigure",
        value: function drawFigure(x, y, fillColor) {
            this.model.beginFill(fillColor, 1);
            this.model.drawCircle(x, y, this.radius);
            this.model.endFill();
        }
    }, {
        key: "destroyFigure",
        value: function destroyFigure() {
            if (this.stage) {
                this.stage.removeChild(this);
            }
            this.model.destroy();
        }
    }, {
        key: "area",
        get: function get() {
            return Math.PI * Math.pow(this.radius, 2);
        }
    }]);

    return Circle;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
    function Rectangle(x, y) {
        var fillColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0x990099;

        _classCallCheck(this, Rectangle);

        this.x = x;
        this.y = y;
        this.width = getRandomInt(50, 80);
        this.height = getRandomInt(50, 80);

        this.model = new PIXI.Graphics();
        this.model.boundsPadding = 0;
        this.drawFigure(x, y, fillColor);
        this.model.interactive = true;
        this.model.buttonMode = true;
    }

    _createClass(Rectangle, [{
        key: "drawFigure",
        value: function drawFigure(x, y, fillColor) {

            this.model.beginFill(fillColor, 1);
            this.model.drawRect(x - 25, y - 25, this.width, this.height);
            this.model.endFill();
        }
    }, {
        key: "destroyFigure",
        value: function destroyFigure() {
            if (this.stage) {
                this.stage.removeChild(this);
            }
            this.model.destroy();
        }
    }, {
        key: "area",
        get: function get() {
            return this.width * this.height;
        }
    }]);

    return Rectangle;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Triangle = function () {
    function Triangle(x, y) {
        var fillColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0x990099;

        _classCallCheck(this, Triangle);

        this.x = x;
        this.y = y;
        this.a = {
            x: x - 40,
            y: y - 40
        };
        this.b = {
            x: x,
            y: y + 30
        };
        this.c = {
            x: x + 40,
            y: y - 40
        };

        this.model = new PIXI.Graphics();
        this.model.boundsPadding = 0;
        this.drawFigure(x, y, fillColor);
        this.model.interactive = true;
        this.model.buttonMode = true;
    }

    _createClass(Triangle, [{
        key: "drawFigure",
        value: function drawFigure(x, y, fillColor) {
            this.model.beginFill(fillColor, 1);

            this.model.moveTo(this.a.x, this.a.y);
            this.model.lineTo(this.b.x, this.b.y);
            this.model.lineTo(this.c.x, this.c.y);
            this.model.lineTo(this.a.x, this.a.y);

            this.model.endFill();
        }
    }, {
        key: "destroyFigure",
        value: function destroyFigure() {
            if (this.stage) {
                this.stage.removeChild(this);
            }
            this.model.destroy();
        }
    }, {
        key: "area",
        get: function get() {
            return Math.abs((this.a.x * (this.b.y - this.c.y) + this.b.x * (this.c.y - this.a.y) + this.c.x * (this.a.y - this.b.y)) / 2);
        }
    }]);

    return Triangle;
}();
"use strict";

var gameModel = new gameModel();
var gameView = new gameView(gameModel);
var gameController = new gameController(gameModel, gameView);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiLCJ2aWV3LmpzIiwibW9kZWwuanMiLCJjb250cm9sbGVyLmpzIiwiY2lyY2xlLmpzIiwicmVjdGFuZ2xlLmpzIiwidHJpYW5nbGUuanMiLCJhcHAuanMiXSwibmFtZXMiOlsiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsImdldFJhbmRvbUNvbG9yIiwiY2hvaWNlIiwiYXJyYXkiLCJsZW5ndGgiLCJnYW1lVmlldyIsIm1vZGVsIiwiX21vZGVsIiwidmlld1dpZHRoIiwidmlld0hlaWdodCIsImdhbWVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlcmVyIiwiUElYSSIsImF1dG9EZXRlY3RSZW5kZXJlciIsImFwcGVuZENoaWxkIiwidmlldyIsInN0YWdlIiwiQ29udGFpbmVyIiwiYXJlYSIsIkdyYXBoaWNzIiwiYmVnaW5GaWxsIiwiZHJhd1JlY3QiLCJlbmRGaWxsIiwiaW50ZXJhY3RpdmUiLCJhZGRDaGlsZCIsInJlbmRlciIsImluY3JlYXNlU3BlZWRCdXR0b24iLCJkZWNyZWFzZVNwZWVkQnV0dG9uIiwiaW5jcmVhc2VHcmF2aXR5QnV0dG9uIiwiZGVjcmVhc2VHcmF2aXR5QnV0dG9uIiwic3BlZWRWYWx1ZUVsIiwiZ3Jhdml0eVZhbHVlRWwiLCJjdXJyZW50RmlndXJlQ291bnRlckVsIiwic3VyZmFjZUFyZWFFbCIsImdyYXZpdHkiLCJzcGVlZCIsIml0ZW1zIiwic3VyZmFjZSIsInN1cmZhY2VBcmVhIiwiZm9yRWFjaCIsIml0ZW0iLCJ4IiwieSIsImlubmVySFRNTCIsInRvRml4ZWQiLCJnYW1lTW9kZWwiLCJfZ3Jhdml0eSIsIl9zcGVlZCIsIl9zdGVwIiwiX2l0ZW1zIiwiX3N1cmZhY2VBcmVhIiwiZmlndXJlQ2xhc3NlcyIsIlJlY3RhbmdsZSIsIlRyaWFuZ2xlIiwiQ2lyY2xlIiwicHVzaCIsInVwZGF0ZVN1cmZhY2VBcmVhIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwidmFsdWUiLCJnYW1lQ29udHJvbGxlciIsIl92aWV3Iiwib24iLCJldiIsIm5ld1JhbmRvbUZpZ3VyZSIsImRhdGEiLCJnbG9iYWwiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5jcmVhc2VTcGVlZCIsImRlY3JlYXNlU3BlZWQiLCJpbmNyZWFzZUdyYXZpdHlZIiwiZGVjcmVhc2VHcmF2aXR5WSIsIm1ha2VHZW5lcmF0ZUZpZ3VyZUludGVydmFsIiwidGlja2VyIiwiVGlja2VyIiwiYWRkIiwidXBkYXRlIiwiYmluZCIsInN0YXJ0IiwicmFuZG9tRmlndXJlIiwiZmlndXJlIiwicmVtb3ZlSXRlbSIsInJlZHJhd1NhbWVGaWd1cmVzIiwiZGVzdHJveUZpZ3VyZSIsImFkZEl0ZW0iLCJjb25zdHJ1Y3RvciIsImNsZWFyIiwiZHJhd0ZpZ3VyZSIsImdlbmVyYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImkiLCJ3aWR0aCIsInN0ZXAiLCJoZWlnaHQiLCJmaWxsQ29sb3IiLCJyYWRpdXMiLCJib3VuZHNQYWRkaW5nIiwiYnV0dG9uTW9kZSIsImRyYXdDaXJjbGUiLCJyZW1vdmVDaGlsZCIsImRlc3Ryb3kiLCJQSSIsInBvdyIsImEiLCJiIiwiYyIsIm1vdmVUbyIsImxpbmVUbyIsImFicyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBTUEsU0FBU0EsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzVCRCxRQUFNRSxLQUFLQyxJQUFMLENBQVVILEdBQVYsQ0FBTjtBQUNBQyxRQUFNQyxLQUFLRSxLQUFMLENBQVdILEdBQVgsQ0FBTjtBQUNBLFNBQU9DLEtBQUtFLEtBQUwsQ0FBV0YsS0FBS0csTUFBTCxNQUFpQkosTUFBTUQsR0FBdkIsQ0FBWCxJQUEwQ0EsR0FBakQsQ0FINEIsQ0FHMEI7QUFDekQ7O0FBRUQ7Ozs7QUFJQSxTQUFTTSxjQUFULEdBQTBCO0FBQ3RCLFNBQU9QLGFBQWEsQ0FBYixFQUFnQixRQUFoQixDQUFQO0FBQ0g7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SytELENBQUwsQ0FBTy9ELENBQTlCLENBSFcsSUFJWixDQUpHLENBQVA7QUFLSDs7Ozs7OztBQ3pDTCxJQUFJRyxZQUFZLElBQUlBLFNBQUosRUFBaEI7QUFDQSxJQUFJMUMsV0FBVyxJQUFJQSxRQUFKLENBQWEwQyxTQUFiLENBQWY7QUFDQSxJQUFJZ0IsaUJBQWlCLElBQUlBLGNBQUosQ0FBbUJoQixTQUFuQixFQUE4QjFDLFFBQTlCLENBQXJCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2V0IHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiBjZXJ0YWluIGxpbWl0c1xuICogQHBhcmFtIHtpbnR9IG1pblxuICogQHBhcmFte2ludH0gbWF4XG4gKiBAcmV0dXJucyB7aW50fVxuICovXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjsgLy9UaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxufVxuXG4vKipcbiAqIEdldCByYW5kb20gY29sb3JcbiAqIEByZXR1cm5zIHtpbnR9XG4gKi9cbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCkge1xuICAgIHJldHVybiBnZXRSYW5kb21JbnQoMSwgMHhmZmZmZmYpO1xufVxuXG4vKipcbiAqIENoaWNlIG9uZSByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHBhcmFtIHtpbnR9IGFycmF5Lmxlbmd0aFxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGNob2ljZShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbn0iLCJjbGFzcyBnYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICAgICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy52aWV3V2lkdGggID0gODUwO1xuICAgICAgICB0aGlzLnZpZXdIZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgbGV0IGdhbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IFBJWEkuYXV0b0RldGVjdFJlbmRlcmVyKHRoaXMudmlld1dpZHRoLCB0aGlzLnZpZXdIZWlnaHQpO1xuICAgICAgICBnYW1lRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLnZpZXcpO1xuXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblxuICAgICAgICBsZXQgYXJlYSA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgICAgICBhcmVhLmJlZ2luRmlsbCgweENGRTRGNyk7XG4gICAgICAgICAgICBhcmVhLmRyYXdSZWN0KDAsIDAsIHRoaXMudmlld1dpZHRoLCB0aGlzLnZpZXdIZWlnaHQpO1xuICAgICAgICAgICAgYXJlYS5lbmRGaWxsKCk7XG5cbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQoYXJlYSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zdGFnZSk7XG5cbiAgICAgICAgLy8gVmlldyBidXR0b25zXG4gICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZEJ1dHRvbiAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5jcmVhc2Vfc3BlZWQnKTtcbiAgICAgICAgdGhpcy5kZWNyZWFzZVNwZWVkQnV0dG9uICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNyZWFzZV9zcGVlZCcpO1xuICAgICAgICB0aGlzLmluY3JlYXNlR3Jhdml0eUJ1dHRvbiAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luY3JlYXNlX2dyYXZpdHknKTtcbiAgICAgICAgdGhpcy5kZWNyZWFzZUdyYXZpdHlCdXR0b24gICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNyZWFzZV9ncmF2aXR5Jyk7XG5cbiAgICAgICAgdGhpcy5zcGVlZFZhbHVlRWwgICAgICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVlZF92YWx1ZScpO1xuICAgICAgICB0aGlzLmdyYXZpdHlWYWx1ZUVsICAgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyYXZpdHlfdmFsdWUnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRGaWd1cmVDb3VudGVyRWwgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZ3VyZXNfY291bnQnKTtcbiAgICAgICAgdGhpcy5zdXJmYWNlQXJlYUVsICAgICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcXVhcmVfY291bnQnKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGxldCBncmF2aXR5ID0gdGhpcy5fbW9kZWwuZ3Jhdml0eTtcbiAgICAgICAgbGV0IHNwZWVkICAgPSB0aGlzLl9tb2RlbC5zcGVlZDtcbiAgICAgICAgbGV0IGl0ZW1zICAgPSB0aGlzLl9tb2RlbC5pdGVtcztcbiAgICAgICAgbGV0IHN1cmZhY2UgPSB0aGlzLl9tb2RlbC5zdXJmYWNlQXJlYTtcblxuICAgICAgICAvLyBBcHBseSBncmF2aXR5IHRvIGZpZ3VyZXNcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5tb2RlbC54ICs9IGdyYXZpdHkueDtcbiAgICAgICAgICAgIGl0ZW0ubW9kZWwueSArPSBncmF2aXR5Lnk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ3Jhdml0eVZhbHVlRWwuaW5uZXJIVE1MICAgICAgICAgID0gXCJcIiArIGdyYXZpdHkueTtcbiAgICAgICAgdGhpcy5zcGVlZFZhbHVlRWwuaW5uZXJIVE1MICAgICAgICAgICAgPSBcIlwiICsgc3BlZWQ7XG4gICAgICAgIHRoaXMuY3VycmVudEZpZ3VyZUNvdW50ZXJFbC5pbm5lckhUTUwgID0gXCJcIiArIGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgdGhpcy5zdXJmYWNlQXJlYUVsLmlubmVySFRNTCAgICAgICAgICAgPSBcIlwiICsgc3VyZmFjZS50b0ZpeGVkKDIpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc3RhZ2UpO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3V2lkdGg7XG4gICAgfVxufSIsImNsYXNzIGdhbWVNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5fZ3Jhdml0eSA9IHt4OiAwLCB5OiAxfTtcbiAgICAgICAgdGhpcy5fc3BlZWQgPSAzO1xuICAgICAgICB0aGlzLl9zdGVwID0gMTtcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5fc3VyZmFjZUFyZWEgPSAwO1xuICAgICAgICAvLyBsaXN0IG9mIGZpZ3VyZXMgY2xhc3Nlc1xuICAgICAgICB0aGlzLmZpZ3VyZUNsYXNzZXMgPSBbUmVjdGFuZ2xlLCBUcmlhbmdsZSwgQ2lyY2xlXTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBvbmUgZmlndXJlIHRvIGZpZ3VyZXMgYXJyYXlcbiAgICAgKiBAcGFyYW0gaXRlbSAtIGZpZ3VyZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLl9pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1cmZhY2VBcmVhKGl0ZW0uYXJlYSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGZpZ3VyZSBmcm9tIGZpZ3VyZXMgYXJyYXlcbiAgICAgKiBAcGFyYW0gaXRlbSAtIGZpZ3VyZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbW92ZUl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1cmZhY2VBcmVhKC1pdGVtLmFyZWEpO1xuICAgICAgICB0aGlzLl9pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGdldCBpdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICAgIH1cblxuICAgIGdldCBncmF2aXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3Jhdml0eTtcbiAgICB9XG5cbiAgICBzZXQgZ3Jhdml0eSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9ncmF2aXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaW5jcmVhc2VTcGVlZCgpIHtcbiAgICAgICAgdGhpcy5fc3BlZWQgKz0gdGhpcy5fc3RlcDtcbiAgICB9XG5cbiAgICBkZWNyZWFzZVNwZWVkKCkge1xuICAgICAgICBpZiAodGhpcy5fc3BlZWQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zcGVlZCAtPSB0aGlzLl9zdGVwO1xuICAgIH1cblxuICAgIGluY3JlYXNlR3Jhdml0eVkoKSB7XG4gICAgICAgIHRoaXMuX2dyYXZpdHkueSArPSB0aGlzLl9zdGVwO1xuICAgIH1cblxuICAgIGRlY3JlYXNlR3Jhdml0eVkoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ncmF2aXR5LnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ncmF2aXR5LnkgLT0gdGhpcy5fc3RlcDtcbiAgICB9XG5cbiAgICBpbmNyZWFzZUdyYXZpdHlYKCkge1xuICAgICAgICB0aGlzLl9ncmF2aXR5LnggKz0gdGhpcy5fc3RlcDtcbiAgICB9XG5cbiAgICBkZWNyZWFzZUdyYXZpdHlYKCkge1xuICAgICAgICBpZiAodGhpcy5fZ3Jhdml0eS54ID0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2dyYXZpdHkueCAtPSB0aGlzLl9zdGVwO1xuICAgIH1cblxuICAgIGdldCBzcGVlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwZWVkO1xuICAgIH1cblxuICAgIGdldCBzdGVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RlcDtcbiAgICB9XG5cbiAgICBnZXQgc3VyZmFjZUFyZWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdXJmYWNlQXJlYTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdG90YWwgc3VyZmFjZSBhcmVhXG4gICAgICogQHBhcmFtIHtpbnR9IHZhbHVlXG4gICAgICovXG4gICAgdXBkYXRlU3VyZmFjZUFyZWEodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fc3VyZmFjZUFyZWEgKz0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3N1cmZhY2VBcmVhID0gTWF0aC5tYXgodGhpcy5fc3VyZmFjZUFyZWEsIDApO1xuICAgIH1cbn0iLCJjbGFzcyBnYW1lQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcbiAgICAgICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5fdmlldyA9IHZpZXc7XG5cbiAgICAgICAgdGhpcy5fdmlldy5zdGFnZS5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3ZpZXcuc3RhZ2Uub24oJ3BvaW50ZXJkb3duJywgKGV2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5ld1JhbmRvbUZpZ3VyZShldi5kYXRhLmdsb2JhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3ZpZXcuaW5jcmVhc2VTcGVlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbW9kZWwuaW5jcmVhc2VTcGVlZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl92aWV3LmRlY3JlYXNlU3BlZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsLmRlY3JlYXNlU3BlZWQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fdmlldy5pbmNyZWFzZUdyYXZpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsLmluY3JlYXNlR3Jhdml0eVkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fdmlldy5kZWNyZWFzZUdyYXZpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsLmRlY3JlYXNlR3Jhdml0eVkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tYWtlR2VuZXJhdGVGaWd1cmVJbnRlcnZhbCgpO1xuXG4gICAgICAgIC8vIFRpY2tlcnMgZm9yIHVwZGF0aW5nIHZpZXcgYW5kIGNoZWNraW5nIGZpZ3VyZSBwb3NpdGlvblxuICAgICAgICB0aGlzLnRpY2tlciA9IG5ldyBQSVhJLnRpY2tlci5UaWNrZXIoKTtcbiAgICAgICAgdGhpcy50aWNrZXIuYWRkKHRoaXMuX3ZpZXcudXBkYXRlLmJpbmQodGhpcy5fdmlldykpO1xuICAgICAgICB0aGlzLnRpY2tlci5hZGQodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudGlja2VyLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgbmV3IHJhbmRvbSBmaWd1cmVcbiAgICAgKi9cbiAgICBuZXdSYW5kb21GaWd1cmUoZGF0YSkge1xuICAgICAgICBsZXQgcmFuZG9tRmlndXJlID0gY2hvaWNlKHRoaXMuX21vZGVsLmZpZ3VyZUNsYXNzZXMpO1xuICAgICAgICBsZXQgZmlndXJlID0gbmV3IHJhbmRvbUZpZ3VyZShkYXRhLngsIGRhdGEueSwgZ2V0UmFuZG9tQ29sb3IoKSk7XG4gICAgICAgIGZpZ3VyZS5tb2RlbC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbC5yZW1vdmVJdGVtKGZpZ3VyZSk7XG4gICAgICAgICAgICB0aGlzLnJlZHJhd1NhbWVGaWd1cmVzKGZpZ3VyZSk7XG4gICAgICAgICAgICBmaWd1cmUuZGVzdHJveUZpZ3VyZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tb2RlbC5hZGRJdGVtKGZpZ3VyZSk7XG4gICAgICAgIHRoaXMuX3ZpZXcuc3RhZ2UuYWRkQ2hpbGQoZmlndXJlLm1vZGVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBmb3IgcmVkcmF3aW5nIHRoZSBmaWd1cmVzIHNhbWUgdHlwZVxuICAgICAqIEBwYXJhbSBmaWd1cmUgLSBmaWd1cmUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZWRyYXdTYW1lRmlndXJlcyhmaWd1cmUpIHtcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5fbW9kZWwuaXRlbXM7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgZmlndXJlLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5tb2RlbC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGl0ZW0uZHJhd0ZpZ3VyZShpdGVtLngsIGl0ZW0ueSwgZ2V0UmFuZG9tQ29sb3IoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGluZyBpbnRlcnZhbCBmb3IgcmFuZG9tIGdlbmVyYXRpbmcgZmlndXJlc1xuICAgICAqL1xuICAgIG1ha2VHZW5lcmF0ZUZpZ3VyZUludGVydmFsKCkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBOIGZpZ3VyZXNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kZWwuc3BlZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3UmFuZG9tRmlndXJlKHtcbiAgICAgICAgICAgICAgICAgICAgeDogZ2V0UmFuZG9tSW50KDMwLCB0aGlzLl92aWV3LndpZHRoIC0gMzApLFxuICAgICAgICAgICAgICAgICAgICB5OiAtNTBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSwgdGhpcy5fbW9kZWwuc3RlcCAqIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhIGZpZ3VyZSBpZiBpdCBpcyBvdXRzaWRlIHRoZSBzY3JlZW5cbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMuX21vZGVsLml0ZW1zO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5tb2RlbC55ID4gdGhpcy5fdmlldy5oZWlnaHQgKyBpdGVtLm1vZGVsLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vZGVsLnJlbW92ZUl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95RmlndXJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJjbGFzcyBDaXJjbGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGZpbGxDb2xvciA9IDB4OTkwMDk5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gZ2V0UmFuZG9tSW50KDMwLCA2MCk7XG5cbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMubW9kZWwuYm91bmRzUGFkZGluZyA9IDA7XG4gICAgICAgIHRoaXMuZHJhd0ZpZ3VyZSh4LCB5LCBmaWxsQ29sb3IpO1xuICAgICAgICB0aGlzLm1vZGVsLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tb2RlbC5idXR0b25Nb2RlID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIGRyYXdGaWd1cmUoeCwgeSwgZmlsbENvbG9yKXtcbiAgICAgICAgdGhpcy5tb2RlbC5iZWdpbkZpbGwoZmlsbENvbG9yLCAxKTtcbiAgICAgICAgdGhpcy5tb2RlbC5kcmF3Q2lyY2xlKHgsIHksIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5tb2RlbC5lbmRGaWxsKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFyZWEoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLlBJICAqIE1hdGgucG93KHRoaXMucmFkaXVzLCAyKTtcbiAgICB9XG5cbiAgICBkZXN0cm95RmlndXJlKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsLmRlc3Ryb3koKTtcbiAgICB9XG5cbn0iLCJjbGFzcyBSZWN0YW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGZpbGxDb2xvciA9IDB4OTkwMDk5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSBnZXRSYW5kb21JbnQoNTAsIDgwKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBnZXRSYW5kb21JbnQoNTAsIDgwKTtcblxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5tb2RlbC5ib3VuZHNQYWRkaW5nID0gMDtcbiAgICAgICAgdGhpcy5kcmF3RmlndXJlKHgsIHksIGZpbGxDb2xvcik7XG4gICAgICAgIHRoaXMubW9kZWwuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vZGVsLmJ1dHRvbk1vZGUgPSB0cnVlO1xuXG4gICAgfVxuXG4gICAgZHJhd0ZpZ3VyZSh4LCB5LCBmaWxsQ29sb3Ipe1xuXG4gICAgICAgIHRoaXMubW9kZWwuYmVnaW5GaWxsKGZpbGxDb2xvciwgMSk7XG4gICAgICAgIHRoaXMubW9kZWwuZHJhd1JlY3QoeCAtIDI1LCB5IC0gMjUsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5tb2RlbC5lbmRGaWxsKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFyZWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgZGVzdHJveUZpZ3VyZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbC5kZXN0cm95KCk7XG4gICAgfVxuXG59IiwiY2xhc3MgVHJpYW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGZpbGxDb2xvciA9IDB4OTkwMDk5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuYSA9IHtcbiAgICAgICAgICAgIHg6IHggLSA0MCxcbiAgICAgICAgICAgIHk6IHkgLSA0MFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmIgPSB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeSArIDMwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYyA9IHtcbiAgICAgICAgICAgIHg6IHggKyA0MCxcbiAgICAgICAgICAgIHk6IHkgLSA0MFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICB0aGlzLm1vZGVsLmJvdW5kc1BhZGRpbmcgPSAwO1xuICAgICAgICB0aGlzLmRyYXdGaWd1cmUoeCwgeSwgZmlsbENvbG9yKTtcbiAgICAgICAgdGhpcy5tb2RlbC5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubW9kZWwuYnV0dG9uTW9kZSA9IHRydWU7XG5cbiAgICB9XG5cbiAgICBkcmF3RmlndXJlKHgsIHksIGZpbGxDb2xvcikge1xuICAgICAgICB0aGlzLm1vZGVsLmJlZ2luRmlsbChmaWxsQ29sb3IsIDEpO1xuXG4gICAgICAgIHRoaXMubW9kZWwubW92ZVRvKHRoaXMuYS54LCB0aGlzLmEueSk7XG4gICAgICAgIHRoaXMubW9kZWwubGluZVRvKHRoaXMuYi54LCB0aGlzLmIueSk7XG4gICAgICAgIHRoaXMubW9kZWwubGluZVRvKHRoaXMuYy54LCB0aGlzLmMueSk7XG4gICAgICAgIHRoaXMubW9kZWwubGluZVRvKHRoaXMuYS54LCB0aGlzLmEueSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbC5lbmRGaWxsKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFyZWEoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicygoXG4gICAgICAgICAgICAodGhpcy5hLnggKiAodGhpcy5iLnkgLSB0aGlzLmMueSkpICtcbiAgICAgICAgICAgICh0aGlzLmIueCAqICh0aGlzLmMueSAtIHRoaXMuYS55KSkgK1xuICAgICAgICAgICAgKHRoaXMuYy54ICogKHRoaXMuYS55IC0gdGhpcy5iLnkpKVxuICAgICAgICApIC8gMik7XG4gICAgfVxuXG4gICAgZGVzdHJveUZpZ3VyZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbC5kZXN0cm95KCk7XG4gICAgfVxuXG59IiwiXG5sZXQgZ2FtZU1vZGVsID0gbmV3IGdhbWVNb2RlbCgpO1xubGV0IGdhbWVWaWV3ID0gbmV3IGdhbWVWaWV3KGdhbWVNb2RlbCk7XG5sZXQgZ2FtZUNvbnRyb2xsZXIgPSBuZXcgZ2FtZUNvbnRyb2xsZXIoZ2FtZU1vZGVsLCBnYW1lVmlldyk7XG5cblxuIl19
