class Bullet {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = 4;
        this.status = true;
        this.images = ["anh/dan1.jpg", "anh/dan2.ipg", "anh/dan3.jpg", "anh/dan4.jpg"]
        this.currentImage = 1;
        this.count = 1;
        this.angle = 0;
    }
    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed
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


    move() {
        switch (this.direction) {
            case 38:
                if(this.count%10 === 0 ){
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
                this.moveUp();
                this.count ++;
                break;
            case 37:
                if(this.count%10 === 0 ){
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
                this.moveLeft();
                this.count ++;
                break;
            case 39:
                if(this.count%10 === 0 ){
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
                this.moveRight();
                this.count ++;
                break;
            case 40:
                if(this.count%10 === 0 ){
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
                this.moveDown();
                this.count ++;
                break;
        }
    }
}