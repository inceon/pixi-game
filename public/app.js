"use strict";

var Engine = {
    minWidth: 640,
    minHeight: 320,
    maxWidth: window.innerWidth - 50,
    maxHeight: window.innerHeight - 50,
    config: {
        antialias: false,
        transparent: false,
        resolution: 1
    }
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
    function Circle(x, y) {
        var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
        var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x990099;

        _classCallCheck(this, Circle);

        this.model = new PIXI.Graphics();
        this.model.beginFill(fill, 1);
        this.model.drawCircle(x, y, radius);
        this.model.endFill();
        this.model.interactive = true;
        this.model.buttonMode = true;
        this.model.on('pointerdown', this.click.bind(this));

        this.gravity = 0;
        this.ticker = new PIXI.ticker.Ticker();

        this.ticker.add(this.applyGravity.bind(this));
        this.ticker.start();
    }

    _createClass(Circle, [{
        key: 'applyGravity',
        value: function applyGravity() {
            if (this.ticker.started) {
                this.model.position.y += this.gravity;
                if (this.model.position.y > Engine.game.screen.height) {
                    this.ticker.destroy();
                }
            }
        }
    }, {
        key: 'click',
        value: function click(event) {
            this.ticker.destroy();
            this.model.destroy();
        }
    }]);

    return Circle;
}();
"use strict";

//Create the renderer
Engine.game = new PIXI.Application(Engine.maxWidth, Engine.maxHeight, Engine.config);

Engine.game.backgroundColor = 0x000032;

//Add the canvas to the HTML document
document.body.appendChild(Engine.game.view);

var rect = new PIXI.Graphics();
rect.beginFill(0x000022, 1);
rect.drawRect(0, 0, Engine.maxWidth, Engine.maxHeight);

Engine.game.stage.interactive = true;
Engine.game.stage.click = function (ev) {
    newRect(ev.data.global);
};

Engine.game.stage.addChild(rect);
Engine.game.gravity = 2;

var figures = [];

function newRect(data) {

    var circle = new Circle(data.x, data.y);
    circle.gravity = Engine.game.gravity;

    Engine.game.stage.addChild(circle.model);

    console.log(circle.model);
}

// Engine.game.render(stage);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5qcyIsImNpcmNsZS5qcyIsImFwcC5qcyJdLCJuYW1lcyI6WyJFbmdpbmUiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heEhlaWdodCIsImlubmVySGVpZ2h0IiwiY29uZmlnIiwiYW50aWFsaWFzIiwidHJhbnNwYXJlbnQiLCJyZXNvbHV0aW9uIiwiQ2lyY2xlIiwieCIsInkiLCJyYWRpdXMiLCJmaWxsIiwibW9kZWwiLCJQSVhJIiwiR3JhcGhpY3MiLCJiZWdpbkZpbGwiLCJkcmF3Q2lyY2xlIiwiZW5kRmlsbCIsImludGVyYWN0aXZlIiwiYnV0dG9uTW9kZSIsIm9uIiwiY2xpY2siLCJiaW5kIiwiZ3Jhdml0eSIsInRpY2tlciIsIlRpY2tlciIsImFkZCIsImFwcGx5R3Jhdml0eSIsInN0YXJ0Iiwic3RhcnRlZCIsInBvc2l0aW9uIiwiZ2FtZSIsInNjcmVlbiIsImhlaWdodCIsImRlc3Ryb3kiLCJldmVudCIsIkFwcGxpY2F0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2aWV3IiwicmVjdCIsImRyYXdSZWN0Iiwic3RhZ2UiLCJldiIsIm5ld1JlY3QiLCJkYXRhIiwiZ2xvYmFsIiwiYWRkQ2hpbGQiLCJmaWd1cmVzIiwiY2lyY2xlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTO0FBQ1RDLGNBQVUsR0FERDtBQUVUQyxlQUFXLEdBRkY7QUFHVEMsY0FBVUMsT0FBT0MsVUFBUCxHQUFvQixFQUhyQjtBQUlUQyxlQUFXRixPQUFPRyxXQUFQLEdBQXFCLEVBSnZCO0FBS1RDLFlBQVE7QUFDSkMsbUJBQVcsS0FEUDtBQUVKQyxxQkFBYSxLQUZUO0FBR0pDLG9CQUFZO0FBSFI7QUFMQyxDQUFiOzs7Ozs7O0lDQU1DO0FBQ0Ysb0JBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFnRDtBQUFBLFlB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a0JLLFFBQWxCLENBQTJCRSxPQUFPdkMsS0FBbEM7O0FBRUF3QyxZQUFRQyxHQUFSLENBQVlGLE9BQU92QyxLQUFuQjtBQUVIOztBQUVEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBFbmdpbmUgPSB7XHJcbiAgICBtaW5XaWR0aDogNjQwLFxyXG4gICAgbWluSGVpZ2h0OiAzMjAsXHJcbiAgICBtYXhXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSA1MCxcclxuICAgIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTAsXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgICBhbnRpYWxpYXM6IGZhbHNlLFxyXG4gICAgICAgIHRyYW5zcGFyZW50OiBmYWxzZSxcclxuICAgICAgICByZXNvbHV0aW9uOiAxXHJcbiAgICB9XHJcbn07XHJcbiIsImNsYXNzIENpcmNsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMgPSA2MCwgZmlsbCA9IDB4OTkwMDk5KSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5iZWdpbkZpbGwoZmlsbCwgMSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kcmF3Q2lyY2xlKHgsIHksIHJhZGl1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vZGVsLm9uKCdwb2ludGVyZG93bicsIHRoaXMuY2xpY2suYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrZXIgPSBuZXcgUElYSS50aWNrZXIuVGlja2VyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGlja2VyLmFkZCh0aGlzLmFwcGx5R3Jhdml0eS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5R3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAodGhpcy50aWNrZXIuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnBvc2l0aW9uLnkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5wb3NpdGlvbi55ID4gRW5naW5lLmdhbWUuc2NyZWVuLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWNrZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy50aWNrZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxufSIsIi8vQ3JlYXRlIHRoZSByZW5kZXJlclxyXG5FbmdpbmUuZ2FtZSA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKFxyXG4gICAgRW5naW5lLm1heFdpZHRoLCBFbmdpbmUubWF4SGVpZ2h0LCBFbmdpbmUuY29uZmlnXHJcbik7XHJcblxyXG5FbmdpbmUuZ2FtZS5iYWNrZ3JvdW5kQ29sb3IgPSAweDAwMDAzMjtcclxuXHJcbi8vQWRkIHRoZSBjYW52YXMgdG8gdGhlIEhUTUwgZG9jdW1lbnRcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChFbmdpbmUuZ2FtZS52aWV3KTtcclxuXHJcbnZhciByZWN0ID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgIHJlY3QuYmVnaW5GaWxsKDB4MDAwMDIyLCAxKTtcclxuICAgIHJlY3QuZHJhd1JlY3QoMCwgMCwgRW5naW5lLm1heFdpZHRoLCBFbmdpbmUubWF4SGVpZ2h0KTtcclxuXHJcbkVuZ2luZS5nYW1lLnN0YWdlLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuRW5naW5lLmdhbWUuc3RhZ2UuY2xpY2sgPSAoZXYpID0+IHtcclxuICAgIG5ld1JlY3QoZXYuZGF0YS5nbG9iYWwpO1xyXG59O1xyXG5cclxuRW5naW5lLmdhbWUuc3RhZ2UuYWRkQ2hpbGQocmVjdCk7XHJcbkVuZ2luZS5nYW1lLmdyYXZpdHkgPSAyO1xyXG5cclxudmFyIGZpZ3VyZXMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIG5ld1JlY3QoZGF0YSkge1xyXG5cclxuICAgIGxldCBjaXJjbGUgPSBuZXcgQ2lyY2xlKGRhdGEueCwgZGF0YS55KTtcclxuICAgIGNpcmNsZS5ncmF2aXR5ID0gRW5naW5lLmdhbWUuZ3Jhdml0eTtcclxuXHJcbiAgICBFbmdpbmUuZ2FtZS5zdGFnZS5hZGRDaGlsZChjaXJjbGUubW9kZWwpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNpcmNsZS5tb2RlbCk7XHJcblxyXG59XHJcbiAgICBcclxuLy8gRW5naW5lLmdhbWUucmVuZGVyKHN0YWdlKTtcclxuIl19
