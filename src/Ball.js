import Entity from "./Entity";

class Ball extends Entity {
    constructor(game, map, engine) {
        super(game, map, engine)
        this.setRadius(20);
    }

    onKeyPress() {}

    onKeyUp() {}

    update() {
        this.setVy(this.getVy() + this.getGravity());
        this.setY(this.getY() + this.getVy());
        this.setX(0);

        this.checkOverflowMapY();
    }

    render() {
        this.map.getCtx().beginPath();
        this.map.getCtx().fillStyle = 'white';
        this.map.getCtx().arc(this.map.getWidth() / 2, this.getY(), this.getRadius(), 0, Math.PI * 2);
        this.map.getCtx().fill();
        this.map.getCtx().closePath();
    }
}

export default Ball;
