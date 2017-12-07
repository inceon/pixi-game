angular
    .module('game',[])
    .constant('Engine', Engine)
    .controller('mainCtrl', ['Engine', function(Engine){
        let vm = this;

        vm.gravity = Engine.gravity;
        vm.speed = Engine.speed;
        vm.changeSpeed = changeSpeed;
        vm.changeGravity = changeGravity;

        function changeSpeed(value) {
            vm.speed += value;
            Engine.speed += value;
        }

        function changeGravity(value) {
            vm.gravity += value;
            Engine.gravity += value;
        }

    }]);

let gameElement = document.getElementById('game');

Engine.game = new Game(
    gameElement.offsetWidth, gameElement.offsetHeight, Engine.config
);

gameElement.appendChild(Engine.game.view);

