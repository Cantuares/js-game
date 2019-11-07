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
}

new Game();
