class HP {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 6;
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
        ctx.beginPath();
        let img = new Image();
        img.onload = function () {
            ctx.drawImage(img,a,b,c,d)
        }
        img.src = "anh/mau1.jpg";
        ctx.fill();
        ctx.closePath();
    }
    reduceHp(){
        switch (cuDa.Hp){
            case 14:
                this.width = 168;
                break;
            case 13:
                this.width = 156;
                break;
            case 12:
                this.width = 144;
                break;
            case 11:
                this.width = 132;
                break;
            case 10:
                this.width = 120;
                break;
            case 9:
                this.width = 108;
                break;
            case 8:
                this.width = 96;
                break;
            case 7:
                this.width = 84;
                break;
            case 6:
                this.width = 72;
                break;
            case 5:
                this.width = 60;
                break;
            case 4:
                this.width = 48;
                break;
            case 3:
                this.width = 36;
                break;
            case 2:
                this.width = 24;
                break;
            case 1:
                this.width = 12;
                break;
            case 0:
                this.width = 0;
                break;
        }
    }
}