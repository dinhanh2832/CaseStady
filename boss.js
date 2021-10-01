class Boss {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.status = true;
        this.HpBoss = 100;
    }
    move(){
        this.x += this.speed;
    }
    check(){
        if(this.x < 0 || this.x > 500){
            this.speed = - this.speed;
        }
    }
    drawBoss(ctx){
        let x = this.x;
        let y = this.y;
        let img = new Image();
        ctx.beginPath();
        img.onload = function () {
            ctx.drawImage(img,x,y,100,150);
        }
        img.src = "anh/boss.jpg";
        ctx.fill();
        ctx.closePath();
    }

}