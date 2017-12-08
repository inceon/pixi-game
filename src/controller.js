/**
 * Main site controller
 */
angular
    .module('game',[])
    .value('Engine', Engine)
    .controller('mainCtrl', ['$interval', 'Engine', function($interval, Engine){
        let vm = this;

        vm.gravity = Engine.gravity;
        vm.speed = Engine.speed;

        // Updating top counters
        $interval(() => {
            vm.figuresCount = Engine.game.figures.length;
            if (vm.figuresCount) {
                vm.squareCount = Math.floor(Math.pow(
                    Engine
                        .game
                        .figures
                        .reduce((square, figure) => square + figure.area, 0)
                , 2));
            } else {
                vm.squareCount = 0;
            }
        });

        vm.changeSpeed = changeSpeed;
        vm.changeGravity = changeGravity;

        /**
         * function for changing random generator speed
         * @param {integer} value
         */
        function changeSpeed(value) {
            vm.speed += value;
            Engine.speed += value;
        }

        /**
         * function for changing gravity value
         * @param {float} value
         */
        function changeGravity(value) {
            vm.gravity += value;
            Engine.gravity += value;
        }

    }]);