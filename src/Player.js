import Entity from './Entity';

class Player extends Entity {
    constructor(game, map, engine) {
        super(game, map, engine);
        this.setRadius(30);
        this.setDebounce(-0.1);
    }

    onKeyPress() {}

    onKeyUp(keyCode) {
        if (this.game.getKeyCode() !== keyCode) {
            this.setVx(1);
            this.setVy(1);
        }
    }

    update() {
        switch (this.game.getKeyCode()) {
            case 'right':
                this.setVx(this.getVx() + this.getGravity());
                this.setX(this.getX() + this.getVx());
                break;
            case 'left':
                this.setVx(this.getVx() + this.getGravity());
                this.setX(this.getX() - this.getVx());
                break;
            case 'top':
                this.setVy(this.getVy() + this.getGravity());
                this.setY(this.getY() - this.getVy());
                break;
            case 'bottom':
                this.setVy(this.getVy() + this.getGravity());
                this.setY(this.getY() + this.getVy());
                break;

            default:
                break;
        }

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
