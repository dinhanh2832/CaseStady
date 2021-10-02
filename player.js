class Player {
    constructor(x,y,width,height,speed,img) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.image = img;
        this.point = 0;
        this.Hp = 2;
        this.angle = 0;
    }
    rotateCannon(mouseX, mouseY) {
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        this.angle = Math.atan2(dy, dx);
    }
    moveLeft(){
        this.x -= this.speed
    }
    moveRight(){
        this.x += this.speed;
    }
    moveUp(){
        this.y -= this.speed;
    }
    moveDown(){
        this.y += this.speed;
    }
    draw(ctx){
        let a = this.x;
        let b = this.y;
        let c = this.width;
        let d = this.height;
        let img = new Image();
        ctx.beginPath();
        img.onload = function (){
            ctx.clearRect(0,0,600,500)
            ctx.drawImage(img,a,b,c,d);
        }
        img.src = this.image;
        ctx.fill();
        ctx.closePath();
    }
    fire(){
        let dirX = Math.cos(this.angle);
        let dirY = Math.sin(this.angle);
        let bullet1 = new Bullet(this.x,this.y,dirX,dirY);
        bullets.push(bullet1)
    }
}
