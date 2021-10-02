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
        this.width = 20;
        this.height = 40;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(ctx) {
        if (this.status) {
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
        if(this.count%10 === 0 ){
            if (this.currentImage === 1) {
                this.currentImage = 2;
                this.width = 40;
                this.height = 20;
            } else {
                if (this.currentImage === 2) {
                    this.currentImage = 3;
                    this.width = 20;
                    this.height = 40;
                } else {
                    if (this.currentImage === 3) {
                        this.currentImage = 4;
                        this.width = 40;
                        this.height = 20;
                    } else {
                        this.currentImage = 1;
                        this.width = 20;
                        this.height = 40;
                    }
                }
            }
        }
        this.update();
        this.count ++;
    }
}