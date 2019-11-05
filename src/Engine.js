class Engine {
    constructor() {
        this.lastTime = Date.now();
    }

    getDt() {
        return this.dt;
    }

    run(cb) {
        this.now = Date.now();
        this.dt = (this.now - this.lastTime) / 1000.0;

        this.lastTime = this.now;
        cb(this.dt);

        window.requestAnimationFrame(() => this.run(cb));
    }
}

export default Engine;
