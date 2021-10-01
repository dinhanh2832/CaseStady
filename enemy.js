class Enemy {
    constructor(x,y,directionX,directionY) {
        this.x = x;
        this.y = y;
        this.status = true;
        this.power = 1;
        this.speedX = directionX*this.power;
        this.speedY = directionY*this.power;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    drawEnemy(ctx){
        if(this.status){
            let x = this.x;
            let y = this.y;
            let img = new Image();
            ctx.beginPath();
            img.onload = function () {
                ctx.drawImage(img,x,y,50,40);
            }
            img.src = "anh/anhbanh.jpg"
            ctx.fill();
            ctx.closePath();
        }
    }
}