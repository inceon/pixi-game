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

//Create the renderer
Engine.game = new PIXI.Application(Engine.maxWidth, Engine.maxHeight, Engine.config);

Engine.game.backgroundColor = 0x000032;

//Add the canvas to the HTML document
document.body.appendChild(Engine.game.view);

var rect = new PIXI.Graphics();
rect.beginFill(0x000011, 1);
rect.drawRect(0, 0, Engine.maxWidth, Engine.maxHeight);

Engine.game.stage.interactive = true;
Engine.game.stage.click = function (ev) {
    newRect(ev.data.global);
};

Engine.game.stage.addChild(rect);

var figures = [];
var gravity = 2;
function newRect(data) {
    var rect = new PIXI.Graphics();
    rect.lineStyle(0);
    rect.beginFill(0x990099, 0.5);
    rect.drawCircle(data.x, data.y, 60);
    rect.endFill();

    Engine.game.stage.addChild(rect);

    Engine.game.ticker.add(function () {
        rect.position.y += gravity;
        console.log('tick');
    });
}

// Engine.game.render(stage);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5qcyIsImFwcC5qcyJdLCJuYW1lcyI6WyJFbmdpbmUiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heEhlaWdodCIsImlubmVySGVpZ2h0IiwiY29uZmlnIiwiYW50aWFsaWFzIiwidHJhbnNwYXJlbnQiLCJyZXNvbHV0aW9uIiwiZ2FtZSIsIlBJWEkiLCJBcHBsaWNhdGlvbiIsImJhY2tncm91bmRDb2xvciIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidmlldyIsInJlY3QiLCJHcmFwaGljcyIsImJlZ2luRmlsbCIsImRyYXdSZWN0Iiwic3RhZ2UiLCJpbnRlcmFjdGl2ZSIsImNsaWNrIiwiZXYiLCJuZXdSZWN0IiwiZGF0YSIsImdsb2JhbCIsImFkZENoaWxkIiwiZmlndXJlcyIsImdyYXZpdHkiLCJsaW5lU3R5bGUiLCJkcmF3Q2lyY2xlIiwieCIsInkiLCJlbmRGaWxsIiwidGlja2VyIiwiYWRkIiwicG9zaXRpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVM7QUFDVEMsY0FBVSxHQUREO0FBRVRDLGVBQVcsR0FGRjtBQUdUQyxjQUFVQyxPQUFPQyxVQUFQLEdBQW9CLEVBSHJCO0FBSVRDLGVBQVdGLE9BQU9HLFdBQVAsR0FBcUIsRUFKdkI7QUFLVEMsWUFBUTtBQUNKQyxtQkFBVyxLQURQO0FBRUpDLHFCQUFhLEtBRlQ7QUFHSkMsb0JBQVk7QUFIUjtBQUxDLENBQWI7OztBQ0FBO0FBQ0FYLE9BQU9ZLElBQVAsR0FBYyxJQUFJQyxLQUFLQyxXQUFULENBQ1ZkLE9BQU9HLFFBREcsRUFDT0gsT0FBT00sU0FEZCxFQUN5Qk4sT0FBT1EsTUFEaEMsQ0FBZDs7QUFJQVIsT0FBT1ksSUFBUCxDQUFZRyxlQUFaLEdBQThCLFFBQTlCOztBQUVBO0FBQ0FDLFNBQVNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmxCLE9BQU9ZLElBQVAsQ0FBWU8sSUFBdEM7O0FBRUEsSUFBSUMsT0FBTyxJQUFJUCxLQUFLUSxRQUFULEVBQVg7QUFDSUQsS0FBS0UsU0FBTCxDQUFlLFFBQWYsRUFBeUIsQ0FBekI7QUFDQUYsS0FBS0csUUFBTCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0J2QixPQUFPRyxRQUEzQixFQUFxQ0gsT0FBT00sU0FBNUM7O0FBRUpOLE9BQU9ZLElBQVAsQ0FBWVksS0FBWixDQUFrQkMsV0FBbEIsR0FBZ0MsSUFBaEM7QUFDQXpCLE9BQU9ZLElBQVAsQ0FBWVksS0FBWixDQUFrQkUsS0FBbEIsR0FBMEIsVUFBQ0MsRUFBRCxFQUFRO0FBQzlCQyxZQUFRRCxHQUFHRSxJQUFILENBQVFDLE1BQWhCO0FBQ0gsQ0FGRDs7QUFJQTlCLE9BQU9ZLElBQVAsQ0FBWVksS0FBWixDQUFrQk8sUUFBbEIsQ0FBMkJYLElBQTNCOztBQUVBLElBQUlZLFVBQVUsRUFBZDtBQUNBLElBQUlDLFVBQVUsQ0FBZDtBQUNBLFNBQVNMLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ25CLFFBQUlULE9BQU8sSUFBSVAsS0FBS1EsUUFBVCxFQUFYO0FBQ0lELFNBQUtjLFNBQUwsQ0FBZSxDQUFmO0FBQ0FkLFNBQUtFLFNBQUwsQ0FBZSxRQUFmLEVBQXlCLEdBQXpCO0FBQ0FGLFNBQUtlLFVBQUwsQ0FBZ0JOLEtBQUtPLENBQXJCLEVBQXdCUCxLQUFLUSxDQUE3QixFQUFnQyxFQUFoQztBQUNBakIsU0FBS2tCLE9BQUw7O0FBRUp0QyxXQUFPWSxJQUFQLENBQVlZLEtBQVosQ0FBa0JPLFFBQWxCLENBQTJCWCxJQUEzQjs7QUFFQXBCLFdBQU9ZLElBQVAsQ0FBWTJCLE1BQVosQ0FBbUJDLEdBQW5CLENBQXVCLFlBQU07QUFDekJwQixhQUFLcUIsUUFBTCxDQUFjSixDQUFkLElBQW1CSixPQUFuQjtBQUNBUyxnQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDSCxLQUhEO0FBSUg7O0FBRUQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEVuZ2luZSA9IHtcclxuICAgIG1pbldpZHRoOiA2NDAsXHJcbiAgICBtaW5IZWlnaHQ6IDMyMCxcclxuICAgIG1heFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDUwLFxyXG4gICAgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1MCxcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGFudGlhbGlhczogZmFsc2UsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQ6IGZhbHNlLFxyXG4gICAgICAgIHJlc29sdXRpb246IDFcclxuICAgIH1cclxufTtcclxuIiwiLy9DcmVhdGUgdGhlIHJlbmRlcmVyXHJcbkVuZ2luZS5nYW1lID0gbmV3IFBJWEkuQXBwbGljYXRpb24oXHJcbiAgICBFbmdpbmUubWF4V2lkdGgsIEVuZ2luZS5tYXhIZWlnaHQsIEVuZ2luZS5jb25maWdcclxuKTtcclxuXHJcbkVuZ2luZS5nYW1lLmJhY2tncm91bmRDb2xvciA9IDB4MDAwMDMyO1xyXG5cclxuLy9BZGQgdGhlIGNhbnZhcyB0byB0aGUgSFRNTCBkb2N1bWVudFxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEVuZ2luZS5nYW1lLnZpZXcpO1xyXG5cclxudmFyIHJlY3QgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgcmVjdC5iZWdpbkZpbGwoMHgwMDAwMTEsIDEpO1xyXG4gICAgcmVjdC5kcmF3UmVjdCgwLCAwLCBFbmdpbmUubWF4V2lkdGgsIEVuZ2luZS5tYXhIZWlnaHQpO1xyXG5cclxuRW5naW5lLmdhbWUuc3RhZ2UuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG5FbmdpbmUuZ2FtZS5zdGFnZS5jbGljayA9IChldikgPT4ge1xyXG4gICAgbmV3UmVjdChldi5kYXRhLmdsb2JhbCk7XHJcbn07XHJcblxyXG5FbmdpbmUuZ2FtZS5zdGFnZS5hZGRDaGlsZChyZWN0KTtcclxuXHJcbnZhciBmaWd1cmVzID0gW107XHJcbnZhciBncmF2aXR5ID0gMjtcclxuZnVuY3Rpb24gbmV3UmVjdChkYXRhKSB7XHJcbiAgICBsZXQgcmVjdCA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgcmVjdC5saW5lU3R5bGUoMCk7XHJcbiAgICAgICAgcmVjdC5iZWdpbkZpbGwoMHg5OTAwOTksIDAuNSk7XHJcbiAgICAgICAgcmVjdC5kcmF3Q2lyY2xlKGRhdGEueCwgZGF0YS55LCA2MCk7XHJcbiAgICAgICAgcmVjdC5lbmRGaWxsKCk7XHJcblxyXG4gICAgRW5naW5lLmdhbWUuc3RhZ2UuYWRkQ2hpbGQocmVjdCk7XHJcblxyXG4gICAgRW5naW5lLmdhbWUudGlja2VyLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgcmVjdC5wb3NpdGlvbi55ICs9IGdyYXZpdHk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RpY2snKTtcclxuICAgIH0pO1xyXG59XHJcbiAgICBcclxuLy8gRW5naW5lLmdhbWUucmVuZGVyKHN0YWdlKTtcclxuIl19
