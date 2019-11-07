import Entity from './Entity';

class Player extends Entity {
    constructor(game, map, engine) {
        super(game, map, engine);
        this.setRadius(30);
        this.setDebounce(-0.8);
        this.keyboardEvents();

        this.holdingSpace = false;
        this.pressedSpace = false;
    }

    keyboardEvents() {
        window.addEventListener('keypress', this.onKeyPress.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    getKeyboardCode(code) {
        const keys = {
            //32: 'space',
            37: 'left',
            39: 'right',
            38: 'top',
            40: 'bottom'
        };

        return keys[code];
    }

    onKeyPress(e) {
        if (e.keyCode === 32) {
            this.setVx(this.getVx() * 15 + this.getGravity());
        }
    }

    onKeyUp(e) {}

    update() {
        this.checkOverflowMapX();
        this.checkOverflowMapY();
    }

    render() {
        this.map.getCtx().beginPath();
        this.map.getCtx().fillStyle = 'red';
        this.map.getCtx().fillRect(this.getX(), this.getY(), 30, 30);
        this.map.getCtx().closePath();
    }
}

export default Player;
