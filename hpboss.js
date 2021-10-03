class HPBOSS {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
    draw(ctx){
        let x = this.width;
        let y = this.height;
        let img = new Image();
        img.onload = function () {
            ctx.drawImage(img,100,20,x,y)
        }
        img.src = "anh/mau1.jpg";
        ctx.fill();
        ctx.closePath();
    }
    reducerHp(){
        switch (boss.HpBoss){
            case 90:
                this.width = 900;
                break;
            case 80:
                this.width = 800;
                break;
            case 70:
                this.width = 700;
                break;
            case 60:
                this.width = 600;
                break;
            case 50:
                this.width = 500;
                break;
            case 40:
                this.width = 400;
                break;
            case 30:
                this.width = 300;
                break;
            case 20:
                this.width = 200;
                break;
            case 10:
                this.width = 100;
                break;
        }
    }
}