class Bullet {
    constructor(x, y, directionX,directionY) {
        this.x = x;
        this.y = y;
        this.power = 4;
        this.status = 1;
        this.images = ["anh/dan1.jpg", "anh/dan2.ipg", "anh/dan3.jpg", "anh/dan4.jpg"]
        this.currentImage = 1;
        this.count = 1;
        this.speedX = directionX*this.power;
        this.speedY = directionY*this.power;
        this.width = 40;
        this.height = 40;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(ctx) {
        if (this.status === 1) {
            let c = this.width;
            let d = this.height;
            let x = this.x;
            let y = this.y;
            ctx.beginPath();
            let img = new Image();
            img.onload = function () {
                ctx.drawImage(img, x, y, c, d)
            }
            img.src = "anh/dan" + this.currentImage + ".jpg";
        }
        ctx.fill();
        ctx.closePath();
    }
    move(){
        if(this.count%8 === 0 ){
            if (this.currentImage === 1) {
                this.currentImage = 2;
            } else {
                if (this.currentImage === 2) {
                    this.currentImage = 3;
                } else {
                    if (this.currentImage === 3) {
                        this.currentImage = 4;
                    } else {
                        this.currentImage = 1;
                    }
                }
            }
        }
        this.update();
        this.count ++;
    }
}