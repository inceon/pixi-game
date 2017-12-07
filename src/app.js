let gameElement = document.getElementById('game');

Engine.game = new Game(
    gameElement.offsetWidth, gameElement.offsetHeight, Engine.config
);

gameElement.appendChild(Engine.game.view);

