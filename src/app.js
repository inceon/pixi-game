angular
    .module('game',[])
    .controller('mainCtrl', [function(){
        let vm = this;

    }]);

let gameElement = document.getElementById('game');

Engine.game = new Game(
    gameElement.offsetWidth, gameElement.offsetHeight, Engine.config
);

gameElement.appendChild(Engine.game.view);

