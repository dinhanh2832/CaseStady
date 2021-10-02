class BulletBoss {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.status = 1;
    }
    move(){
        this.y += this.speed;
    }
    drawBulletBoss(){
        if(this.status === 1){
            let x = this.x;
            let y = this.y;
            let img = new Image();
            img.onload = function () {
                ctx.drawImage(img,x,y,30,60)
            }
            img.src = "anh/danboss.jpg";
            ctx.fill();
            ctx.closePath();
        }
    }
}