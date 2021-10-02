class Enemy {
    constructor(x, y, directionX, directionY, img) {
        this.x = x;
        this.y = y;
        this.status = 1;
        this.power = 1;
        this.speedX = directionX * this.power;
        this.speedY = directionY * this.power;
        this.img = img;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    drawEnemy(ctx) {
        if (this.status === 1) {
            let x = this.x;
            let y = this.y;
            let img = new Image();
            ctx.beginPath();
            img.onload = function () {
                ctx.drawImage(img, x, y, 100, 80);
            }
            img.src = this.img;
            ctx.fill();
            ctx.closePath();
        }
    }
}