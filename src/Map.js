class Map {
    constructor() {
        this.setCanvas();
        this.setCtx();
        document.body.appendChild(this.getCanvas());
    }

    setCtx() {
        this.ctx = this.canvas.getContext('2d');
    }

    getCtx() {
        return this.ctx;
    }

    setCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 500;
        this.canvas.height = 500;
    }

    getCanvas() {
        return this.canvas;
    }

    getWidth() {
        return this.canvas.width;
    }

    getHeight() {
        return this.canvas.height;
    }

    render() {
        this.getCtx().fillStyle = 'blue';
        this.getCtx().fillRect(0, 0, this.getWidth(), this.getHeight());
    }
}

export default Map;
