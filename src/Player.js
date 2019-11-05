class Player {
    constructor(game, map, engine) {
        this.game = game;
        this.map = map;
        this.engine = engine;
        this.x = 1;
        this.y = 0;
        this.radius = 30;
        this.velocity = 0.3;
    }

    getVelocity() {
        return this.velocity;
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
        this.setX(this.getX() + this.engine.getDt() * (this.getVelocity() * 1000));
        this.setY(0);

        if (this.getX() > (this.map.getWidth() - this.getRadius())) {
            this.setX(this.map.getWidth() - this.getRadius());
        }
    }

    render() {
        this.map.getCtx().beginPath();
        this.map.getCtx().fillStyle = 'red';
        this.map.getCtx().fillRect(this.getX(), 150, 30, 30);
        this.map.getCtx().closePath();
    }
}

export default Player;
