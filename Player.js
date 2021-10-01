class PLAYER {
    constructor(x,y,width,height,speed,img,direction) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.image = img;
        this.direction = direction;
        this.point = 0;
        this.Hp = 2;
    }
    moveUp(){
        this.y -= this.speed
    }
    moveDown(){
        this.y += this.speed
    }
    moveLeft(){
        this.x -= this.speed
    }
    moveRight(){
        this.x += this.speed
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
        let bullet1 = new Bullet(this.x,this.y,this.direction);
        bullets.push(bullet1)
    }
}
