class Bullet {
    constructor(x, y, directionX,directionY) {
        this.x = x;
        this.y = y;
        this.power = 3;
        this.status = true;
        this.images = ["anh/dan1.jpg", "anh/dan2.ipg", "anh/dan3.jpg", "anh/dan4.jpg"]
        this.currentImage = 1;
        this.count = 1;
        this.speedX = directionX*this.power;
        this.speedY = directionY*this.power;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(ctx) {
        if (this.status) {
            let x = this.x;
            let y = this.y;
            ctx.beginPath();
            let img = new Image();
            img.onload = function () {
                ctx.drawImage(img, x, y, 30, 30)
            }
            img.src = "anh/dan" + this.currentImage + ".jpg";
        }
        ctx.fill();
        ctx.closePath();
    }
}