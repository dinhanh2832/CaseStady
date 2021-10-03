function movePlayer(evt) {
    switch (evt.keyCode) {
        case 37:
            cuDa.direction = 37;
            if (cuDa.x > 0) {
                cuDa.image = "anh/cudaLeft.jpg";
                cuDa.moveLeft();
                hp.moveLeft();
            }
            break;
        case 39:
            cuDa.direction = 39;
            if (cuDa.x < 1200 - cuDa.width) {
                cuDa.image = "anh/cudaRight.jpg";
                cuDa.moveRight();
                hp.moveRight()
            }
            break;
        case 38:
            cuDa.direction = 38;
            if (cuDa.y > 0) {
                cuDa.image = "anh/cudaUp.jpg";
                cuDa.moveUp();
                hp.moveUp();
            }
            break;
        case 40:
            cuDa.direction = 40;
            if (cuDa.y < 700 - cuDa.height) {
                cuDa.image = "anh/cudaDown.jpg";
                cuDa.moveDown();
                hp.moveDown();
            }
            break;
    }
}

function docReady() {
    window.addEventListener('keydown', movePlayer);
}

function play() {
    cuDa.draw(ctx);
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].move();
        bullets[i].draw(ctx);
    }
    if (cuDa.point < 100) {
        for (let i = 0; i < enemys1.length; i++) {
            enemys1[i].update();
            checkCollision1();
            enemys1[i].drawEnemy(ctx);
        }
        for (let i = 0; i < enemys2.length; i++) {
            enemys2[i].update();
            checkCollision2();
            enemys2[i].drawEnemy(ctx);
        }
        for (let i = 0; i < enemys3.length; i++) {
            enemys3[i].update();

            checkCollision3();
            enemys3[i].drawEnemy(ctx);
        }
        for (let i = 0; i < enemys4.length; i++) {
            enemys4[i].update();
            checkCollision4();
            enemys4[i].drawEnemy(ctx);
        }
        drawHp();
    } else {
        boss.move();
        boss.check();
        boss.drawBoss(ctx);
        for (let i = 0; i < bullesBosss.length; i++) {
            bullesBosss[i].move();
            bullesBosss[i].drawBulletBoss();
        }
        drawHpBoss();
        drawHp();
        playerCollisionBulletBoss();
        bossCollisionBullet();
    }
    hp.reduceHp();
    hp.draw(ctx);
    drawPoint();
    endGame()
    playerCollisionEnemy1();
    playerCollisionEnemy2();
    playerCollisionEnemy3();
    playerCollisionEnemy4();
    requestAnimationFrame(play)
}

function createEnemy1() {
    let ene1X = Math.floor(Math.random() * 1080);
    let ene1Y = 0;
    rotate(cuDa.x, cuDa.y, ene1X, ene1Y);
    let dirX = Math.cos(angle);
    let dirY = Math.sin(angle);
    let enemy1 = new Enemy(ene1X, ene1Y, dirX, dirY, "anh/anhbanhDown.jpg");
    enemys1.push(enemy1);
}
function createEnemy2() {
    let ene2X = 0;
    let ene2Y = Math.floor(Math.random() * 590);
    rotate(cuDa.x, cuDa.y, ene2X, ene2Y);
    let dirX = Math.cos(angle);
    let dirY = Math.sin(angle);
    let enemy2 = new Enemy(ene2X, ene2Y, dirX, dirY, "anh/anhbanhRight.jpg");
    enemys2.push(enemy2);
}
function createEnemy3() {
    let ene3X = 1080;
    let ene3Y = Math.floor(Math.random() * 630);
    rotate(cuDa.x, cuDa.y, ene3X, ene3Y);
    let dirX = Math.cos(angle);
    let dirY = Math.sin(angle);
    let enemy3 = new Enemy(ene3X, ene3Y, dirX, dirY, "anh/anhbanhLeft.jpg");
    enemys3.push(enemy3);
}
function createEnemy4() {
    let ene4X = Math.floor(Math.random() * 1080);
    let ene4Y = 630;
    rotate(cuDa.x, cuDa.y, ene4X, ene4Y);
    let dirX = Math.cos(angle);
    let dirY = Math.sin(angle);
    let enemy4 = new Enemy(ene4X, ene4Y, dirX, dirY, "anh/anhbanhUp.jpg");
    enemys4.push(enemy4);
}

function rotate(playerX, playerY, enemyX, enemyY) {
    let dx = playerX - enemyX;
    let dy = playerY - enemyY;
    return angle = Math.atan2(dy, dx);
}

function canvasMouseMove(pos) {
    let x = pos.pageX - canvas.offsetLeft;
    let y = pos.pageY - canvas.offsetTop;
    cuDa.rotate(x, y);
}
function canvasMouseDown() {
    cuDa.fire();
    soundFire.play();
}

function createBulletBoss() {
    let bulletBoss = new BulletBoss(boss.x, boss.y);
    bullesBosss.push(bulletBoss)
}

function drawPoint() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText('Poin: ' + cuDa.point + '/100', 8, 40)
}

function drawHp() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Hp: ' + cuDa.Hp, 500, 40)
}

function drawHpBoss() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Hp: ' + boss.HpBoss, 8, 60)
}

function checkCollision1() {
    for (let i = 0; i < bullets.length; i++) {
        for (let j = 0; j < enemys1.length; j++) {
            if (bullets[i].status === 1 && enemys1[j].status === 1) {
                if (bullets[i].x + 30 > enemys1[j].x && bullets[i].x + 30 < enemys1[j].x + 100 ||
                    enemys1[j].x < bullets[i].x && bullets[i].x < enemys1[j].x + 100) {
                    if (bullets[i].y + 30 > enemys1[j].y && bullets[i].y + 30 < enemys1[j].y + 80 ||
                        enemys1[j].y < bullets[i].y && bullets[i].y < enemys1[j].y + 80) {
                        bullets[i].status = 2;
                        enemys1[j].status = 2;
                        explode.play();
                        cuDa.point++;
                    }
                }
            }
        }
    }
}
function checkCollision2() {
    for (let i = 0; i < bullets.length; i++) {
        for (let j = 0; j < enemys2.length; j++) {
            if (bullets[i].status === 1 && enemys2[j].status === 1) {
                if (bullets[i].x + 30 > enemys2[j].x && bullets[i].x + 30 < enemys2[j].x + 100 ||
                    enemys2[j].x < bullets[i].x && bullets[i].x < enemys2[j].x + 100) {
                    if (bullets[i].y + 30 > enemys2[j].y && bullets[i].y + 30 < enemys2[j].y + 80 ||
                        enemys2[j].y < bullets[i].y && bullets[i].y < enemys2[j].y + 80) {
                        bullets[i].status = 2;
                        enemys2[j].status = 2;
                        explode.play();
                        cuDa.point++;
                    }
                }
            }
        }
    }
}
function checkCollision3() {
    for (let i = 0; i < bullets.length; i++) {
        for (let j = 0; j < enemys3.length; j++) {
            if (bullets[i].status === 1 && enemys3[j].status === 1) {
                if (bullets[i].x + 30 > enemys3[j].x && bullets[i].x + 30 < enemys3[j].x + 100 ||
                    enemys3[j].x < bullets[i].x && bullets[i].x < enemys3[j].x + 100) {
                    if (bullets[i].y + 30 > enemys3[j].y && bullets[i].y + 30 < enemys3[j].y + 80 ||
                        enemys3[j].y < bullets[i].y && bullets[i].y < enemys3[j].y + 80) {
                        bullets[i].status = 2;
                        enemys3[j].status = 2;
                        explode.play();
                        cuDa.point++;
                    }
                }
            }
        }
    }
}
function checkCollision4() {
    for (let i = 0; i < bullets.length; i++) {
        for (let j = 0; j < enemys4.length; j++) {
            if (bullets[i].status === 1 && enemys4[j].status === 1) {
                if (bullets[i].x + 30 > enemys4[j].x && bullets[i].x + 30 < enemys4[j].x + 100 ||
                    enemys4[j].x < bullets[i].x && bullets[i].x < enemys4[j].x + 100) {
                    if (bullets[i].y + 30 > enemys4[j].y && bullets[i].y + 30 < enemys4[j].y + 80 ||
                        enemys4[j].y < bullets[i].y && bullets[i].y < enemys4[j].y + 80) {
                        bullets[i].status = 2;
                        enemys4[j].status = 2;
                        explode.play();
                        cuDa.point++;
                    }
                }
            }
        }
    }
}

function playerCollisionEnemy1() {
    for (let j = 0; j < enemys1.length; j++) {
        if (enemys1[j].status === 1) {
            if (cuDa.x + 180 > enemys1[j].x && cuDa.x + 180 < enemys1[j].x + 100 ||
                enemys1[j].x < cuDa.x && cuDa.x < enemys1[j].x + 100) {
                if (cuDa.y + 160 > enemys1[j].y && cuDa.y + 160 < enemys1[j].y + 80 ||
                    enemys1[j].y < cuDa.y && cuDa.y < enemys1[j].y + 80) {
                    enemys1[j].status = 2;
                    cuDa.Hp--;
                }
            }
        }
    }
}
function playerCollisionEnemy2() {
    for (let j = 0; j < enemys2.length; j++) {
        if (enemys2[j].status === 1) {
            if (cuDa.x + 180 > enemys2[j].x && cuDa.x + 180 < enemys2[j].x + 100 ||
                enemys2[j].x < cuDa.x && cuDa.x < enemys2[j].x + 100) {
                if (cuDa.y + 160 > enemys2[j].y && cuDa.y + 160 < enemys2[j].y + 80 ||
                    enemys2[j].y < cuDa.y && cuDa.y < enemys2[j].y + 80) {
                    enemys2[j].status = 2;
                    cuDa.Hp--;
                }
            }
        }
    }
}
function playerCollisionEnemy3() {
    for (let j = 0; j < enemys3.length; j++) {
        if (enemys3[j].status === 1) {
            if (cuDa.x + 180 > enemys3[j].x && cuDa.x + 180 < enemys3[j].x + 100 ||
                enemys3[j].x < cuDa.x && cuDa.x < enemys3[j].x + 100) {
                if (cuDa.y + 160 > enemys3[j].y && cuDa.y + 160 < enemys3[j].y + 80 ||
                    enemys3[j].y < cuDa.y && cuDa.y < enemys3[j].y + 80) {
                    enemys3[j].status = 2;
                    cuDa.Hp--;
                }
            }
        }
    }
}
function playerCollisionEnemy4() {
    for (let j = 0; j < enemys4.length; j++) {
        if (enemys4[j].status === 1) {
            if (cuDa.x + 180 > enemys4[j].x && cuDa.x + 180 < enemys4[j].x + 100 ||
                enemys4[j].x < cuDa.x && cuDa.x < enemys4[j].x + 100) {
                if (cuDa.y + 160 > enemys4[j].y && cuDa.y + 160 < enemys4[j].y + 80 ||
                    enemys4[j].y < cuDa.y && cuDa.y < enemys4[j].y + 80) {
                    enemys4[j].status = 2;
                    cuDa.Hp--;
                }
            }
        }
    }
}

function playerCollisionBulletBoss() {
    for (let j = 0; j < bullesBosss.length; j++) {
        if (bullesBosss[j].status === 1) {
            if (bullesBosss[j].x + 30 > cuDa.x && bullesBosss[j].x + 30 < cuDa.x + 180 ||
                bullesBosss[j].x > cuDa.x && bullesBosss[j].x < cuDa.x + 180) {
                if (bullesBosss[j].y + 60 > cuDa.y && bullesBosss[j].y + 60 < cuDa.y + 160 ||
                    cuDa.y < bullesBosss[j].y && bullesBosss[j].y < cuDa.y + 160) {
                    bullesBosss[j].status = 2;
                    cuDa.Hp--;
                }
            }
        }
    }
}

function bossCollisionBullet() {
    for (let j = 0; j < bullets.length; j++) {
        if (bullets[j].status === 1) {
            if (bullets[j].x + 30 > boss.x && bullets[j].x + 30 < boss.x + 200 ||
                bullets[j].x > boss.x && bullets[j].x < boss.x + 200) {
                if (bullets[j].y + 60 > boss.y && bullets[j].y + 60 < boss.y + 200 ||
                    boss.y < bullets[j].y && bullets[j].y < boss.y + 200) {
                    bullets[j].status = 2;
                    boss.HpBoss--;
                    cuDa.point++;
                }
            }
        }
    }
}

function endGame() {
    if (cuDa.Hp === 0) {
        alert('Điểm số của bạn là: ' + cuDa.point);
        cuDa.Hp = 15
        location.replace("index.html");
    }
    if (boss.HpBoss === 0) {
        alert('Điểm số của bạn là: ' + cuDa.point);
        cuDa.Hp = 15
        location.replace("index.html");
    }
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let boss = new Boss(250, 20);
let cuDa = new Player(600, 400, 180, 160, 6, 'anh/cudaUp.jpg');
cuDa.draw(ctx)
let angle = 0;
let bullets = [];
let enemys1 = [];
let enemys2 = [];
let enemys3 = [];
let enemys4 = [];
let bullesBosss = [];
let soundFire = new Audio("sound/ban.Mp3")
let explode = new Audio("sound/no.Mp3")
let hp = new HP(cuDa.x,cuDa.y,180,10)
play();
setInterval(createEnemy1, 1000);
setInterval(createEnemy2, 1500);
setInterval(createEnemy3, 2500);
setInterval(createEnemy4, 2000);
setInterval(createBulletBoss, 1800);
canvas.onmousemove = canvasMouseMove;
canvas.onmousedown = canvasMouseDown;






