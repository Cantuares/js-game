import Engine from './Engine';
import Map from './Map';
import Ball from './Ball';
import Player from './Player';

class Game {
    constructor() {
        this.engine = new Engine();
        this.map = new Map();
        this.entities = [
            new Player(this, this.map, this.engine),
            new Ball(this, this.map, this.engine)
        ];
        this.startKeyboardEvents();
        this.engine.run(this.start.bind(this));
    }

    setKeyCode(keyCode) {
        this.keyCode = keyCode;
    }

    getKeyCode() {
        console.log(this.keyCode);
        return this.keyCode;
    }

    update() {
        this.entities.forEach(entity => entity.update());
    }

    render() {
        this.map.render();
        this.entities.forEach(entity => entity.render());
    }

    start() {
        this.update();
        this.render();
    }

    startKeyboardEvents() {
        window.addEventListener('keyup', e => {
            const keys = {
                37: 'left',
                39: 'right',
                38: 'top',
                40: 'bottom'
            };

            if (typeof keys[e.keyCode] === 'string') {
                this.entities.forEach(entity => entity.onKeyUp(keys[e.keyCode]));
                this.setKeyCode(keys[e.keyCode]);
            }
        });

        window.addEventListener('keypress', e => {
            const keys = {
                32: 'space'
            };

            this.handleInput(keys[e.keyCode]);
            this.entities.forEach(entity => entity.onKeyPress(keys[e.keyCode]));
        });
    }
}

new Game();
