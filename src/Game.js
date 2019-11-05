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

    setGravity(gravity) {
        this.gravity = gravity;
    }

    getGravity() {
        return this.gravity ? this.gravity : 0.8;
    }

    setVx(vx) {
        this.vx = vx;
    }

    getVx() {
        return this.vx ? this.vx : 1;
    }

    setVy(vy) {
        this.vy = vy;
    }

    getVy() {
        return this.vy ? this.vy : 1;
    }

    setKeyCode(keyCode) {
        this.keyCode = keyCode;
    }

    getKeyCode() {
        console.log(this.keyCode);
        return this.keyCode;
    }

    handleInput(keyCode) {
        if (typeof keyCode === 'string') {
            this.setKeyCode(keyCode);
        }
    }

    update() {
        this.setVx(this.getVx() + this.getGravity());
        this.setVy(this.getVy() + this.getGravity());
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

            this.handleInput(keys[e.keyCode]);
            this.entities.forEach(entity => entity.onKeyUp());
        });

        window.addEventListener('keypress', e => {
            const keys = {
                32: 'space'
            };

            this.handleInput(keys[e.keyCode]);
            this.entities.forEach(entity => entity.onKeyPress());
        });
    }
}

new Game();
