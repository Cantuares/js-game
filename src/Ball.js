class Ball {
    constructor(game, map) {
        this.game = game;
        this.map = map;
        this.x = 0;
        this.y = 1;
        this.radius = 20;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    setX(x) {
        this.x = x;
    }

    getX() {
        return this.x;
    }

    setY(y) {
        this.y = y;
    }

    getY() {
        return this.y;
    }

    onKeyPress() {}

    onKeyUp() {}

    update() {
        this.setY(this.getY() + this.game.getVy());
        this.setX(0);

        if (this.getY() > (this.map.getHeight() - this.getRadius())) {
            this.setY(this.map.getHeight() - this.getRadius());
            this.game.setVy(this.game.getVy() * -0.8);
        }
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
