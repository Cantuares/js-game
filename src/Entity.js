class Entity {
    constructor(game, map, engine) {
        this.game = game;
        this.map = map;
        this.engine = engine;
        this.setX(1);
        this.setY(1);
        this.setVx(1);
        this.setVy(1);
        this.setGravity(0.8);
        this.setDebounce(-0.8);
    }

    setGravity(gravity) {
        this.gravity = gravity;
    }

    getGravity() {
        return this.gravity;
    }

    setVx(vx) {
        this.vx = vx;
    }

    getVx() {
        return this.vx;
    }

    setVy(vy) {
        this.vy = vy;
    }

    getVy() {
        return this.vy;
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

    setDebounce(debounce) {
        this.debounce = debounce;
    }

    getDebounce() {
        return this.debounce;
    }

    checkOverflowMapX() {
        if (this.getX() > this.map.getWidth() - this.getRadius()) {
            this.setX(this.map.getWidth() - this.getRadius());
            this.setVx(this.getVx() * this.getDebounce());
        }

        if (this.getX() < 0) {
            this.setX(0);
            this.setVx(this.getVx() * this.getDebounce());
        }
    }

    checkOverflowMapY() {
        if (this.getY() > this.map.getHeight() - this.getRadius()) {
            this.setY(this.map.getHeight() - this.getRadius());
            this.setVy(this.getVy() * this.getDebounce());
        }

        if (this.getY() < 0) {
            this.setY(0);
            this.setVy(this.getVy() * this.getDebounce());
        }
    }

}

export default Entity;
