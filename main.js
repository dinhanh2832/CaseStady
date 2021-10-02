function movePlayer(evt) {
    switch (evt.keyCode) {
        case 37:
            cuDa.direction = 37;
            if (cuDa.x > 0) {
                cuDa.image = "anh/cudaLeft.jpg";
                cuDa.moveLeft();
            }
            break;
        case 39:
            cuDa.direction = 39;
            if (cuDa.x < 600 - cuDa.width) {
                cuDa.image = "anh/cudaRight.jpg";
                cuDa.moveRight();
            }
            break;
        case 38:
            cuDa.direction = 38;
            if (cuDa.y > 0) {
                cuDa.image = "anh/cudapro.jpg";
                cuDa.moveUp();
            }
            break;
        case 40:
            cuDa.direction = 40;
            if (cuDa.y <= 500 - cuDa.height) {
                cuDa.image = "anh/cudaDow.jpg";
                cuDa.moveDown();
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
        bullets[i].update();
        bullets[i].draw(ctx);
    }
    if (cuDa.point < 3) {
        for (let i = 0; i < enemys1.length; i++) {
            enemys1[i].update();
            if (enemys1[i].y > 460) {
                enemys1.splice(enemys1.indexOf(enemys1[i]), 1)
            }
            checkCollision1();
            enemys1[i].drawEnemy(ctx);
        }
        for (let i = 0; i < enemys2.length; i++) {
            enemys2[i].update();
            if (enemys2[i].x > 550) {
                enemys2.splice(enemys2.indexOf(enemys2[i]), 1)
            }
            checkCollision2();
            enemys2[i].drawEnemy(ctx);
        }
        for (let i = 0; i < enemys3.length; i++) {
            enemys3[i].update();
            if (enemys3[i].x < 0) {
                enemys3.splice(enemys3.indexOf(enemys3[i]), 1)
            }
            checkCollision3();
            enemys3[i].drawEnemy(ctx);
        }
        for (let i = 0; i < enemys4.length; i++) {
            enemys4[i].update();
            if (enemys4[i].y < 0) {
                enemys4.splice(enemys4.indexOf(enemys4[i]), 1)
            }
            checkCollision4();
            enemys4[i].drawEnemy(ctx);
        }
    } else {
        boss.move();
        boss.check();
        boss.drawBoss(ctx);
        for (let i = 0; i < bullesBosss.length; i++) {
            bullesBosss[i].move();
            bullesBosss[i].drawBulletBoss();
        }
        playerCollisionBulletBoss();
        bossCollisionBullet();
    }
    drawPoint();
    //endGame()
    playerCollisionEnemy1();
    playerCollisionEnemy2();
    playerCollisionEnemy3();
    playerCollisionEnemy4();
    drawHp();
    drawHpBoss();
    requestAnimationFrame(play)
}

function createEnemy1() {
    let ene1X = Math.floor(Math.random() * 550);
    let ene1Y = 0;
    rotate(cuDa.x, cuDa.y, ene1X, ene1Y);
    let dirX = Math.cos(angle);
    let dirY = Math.sin(angle);
    let enemy1 = new Enemy(ene1X, ene1Y, dirX, dirY);
    enemys1.push(enemy1);
}
function createEnemy2() {
    let ene2X = 0;
    let ene2Y = Math.floor(Math.random() * 460);
    rotate(cuDa.x, cuDa.y, ene2X, ene2Y);
    let dirX = Math.cos(angle);
    let dirY = Math.sin(angle);
    let enemy2 = new Enemy(ene2X, ene2Y, dirX, dirY);
    enemys2.push(enemy2);
}
function createEnemy3() {
    let ene3X = 550;
    let ene3Y = Math.floor(Math.random() * 460);
    rotate(cuDa.x, cuDa.y, ene3X, ene3Y);
    let dirX = Math.cos(angle);
    let dirY = Math.sin(angle);
    let enemy3 = new Enemy(ene3X, ene3Y, dirX, dirY);
    enemys3.push(enemy3);
}
function createEnemy4() {
    let ene4X = Math.floor(Math.random() * 550);
    let ene4Y = 460
    rotate(cuDa.x, cuDa.y, ene4X, ene4Y);
    let dirX = Math.cos(angle);
    let dirY = Math.sin(angle);
    let enemy4 = new Enemy(ene4X, ene4Y, dirX, dirY);
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
    cuDa.rotateCannon(x,y);
}
function canvasMouseDown() {
    cuDa.fire();
}

function createBulletBoss() {
    let bulletBoss = new BulletBoss(boss.x, boss.y);
    bullesBosss.push(bulletBoss)
}

function drawPoint() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText('Poin: ' + cuDa.point, 8, 40)
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
            if (bullets[i].status === true && enemys1[j].status === true) {
                if (bullets[i].x + 30 > enemys1[j].x && bullets[i].x + 30 < enemys1[j].x + 50 ||
                    enemys1[j].x < bullets[i].x && bullets[i].x < enemys1[j].x + 50) {
                    if (bullets[i].y + 30 > enemys1[j].y && bullets[i].y + 30 < enemys1[j].y + 50 ||
                        enemys1[j].y < bullets[i].y && bullets[i].y < enemys1[j].y + 40) {
                        bullets[i].status = false;
                        enemys1[j].status = false;
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
            if (bullets[i].status === true && enemys2[j].status === true) {
                if (bullets[i].x + 30 > enemys2[j].x && bullets[i].x + 30 < enemys2[j].x + 50 ||
                    enemys2[j].x < bullets[i].x && bullets[i].x < enemys2[j].x + 50) {
                    if (bullets[i].y + 30 > enemys2[j].y && bullets[i].y + 30 < enemys2[j].y + 50 ||
                        enemys2[j].y < bullets[i].y && bullets[i].y < enemys2[j].y + 40) {
                        bullets[i].status = false;
                        enemys2[j].status = false;
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
            if (bullets[i].status === true && enemys3[j].status === true) {
                if (bullets[i].x + 30 > enemys3[j].x && bullets[i].x + 30 < enemys3[j].x + 50 ||
                    enemys3[j].x < bullets[i].x && bullets[i].x < enemys3[j].x + 50) {
                    if (bullets[i].y + 30 > enemys3[j].y && bullets[i].y + 30 < enemys3[j].y + 50 ||
                        enemys3[j].y < bullets[i].y && bullets[i].y < enemys3[j].y + 40) {
                        bullets[i].status = false;
                        enemys3[j].status = false;
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
            if (bullets[i].status === true && enemys4[j].status === true) {
                if (bullets[i].x + 30 > enemys4[j].x && bullets[i].x + 30 < enemys4[j].x + 50 ||
                    enemys4[j].x < bullets[i].x && bullets[i].x < enemys4[j].x + 50) {
                    if (bullets[i].y + 30 > enemys4[j].y && bullets[i].y + 30 < enemys4[j].y + 50 ||
                        enemys4[j].y < bullets[i].y && bullets[i].y < enemys4[j].y + 40) {
                        bullets[i].status = false;
                        enemys4[j].status = false;
                        cuDa.point++;
                    }
                }
            }
        }
    }
}

function playerCollisionEnemy1() {
    for (let j = 0; j < enemys1.length; j++) {
        if (enemys1[j].status === true) {
            if (cuDa.x + 50 > enemys1[j].x && cuDa.x + 50 < enemys1[j].x + 50 ||
                enemys1[j].x < cuDa.x && cuDa.x < enemys1[j].x + 50) {
                if (cuDa.y + 60 > enemys1[j].y && cuDa.y + 60 < enemys1[j].y + 50 ||
                    enemys1[j].y < cuDa.y && cuDa.y < enemys1[j].y + 40) {
                    enemys1[j].status = false;
                    cuDa.Hp--;
                }
            }
        }
    }
}
function playerCollisionEnemy2() {
    for (let j = 0; j < enemys2.length; j++) {
        if (enemys2[j].status === true) {
            if (cuDa.x + 50 > enemys2[j].x && cuDa.x + 50 < enemys2[j].x + 50 ||
                enemys2[j].x < cuDa.x && cuDa.x < enemys2[j].x + 50) {
                if (cuDa.y + 60 > enemys2[j].y && cuDa.y + 60 < enemys2[j].y + 50 ||
                    enemys2[j].y < cuDa.y && cuDa.y < enemys2[j].y + 40) {
                    enemys2[j].status = false;
                    cuDa.Hp--;
                }
            }
        }
    }
}
function playerCollisionEnemy3() {
    for (let j = 0; j < enemys3.length; j++) {
        if (enemys3[j].status === true) {
            if (cuDa.x + 50 > enemys3[j].x && cuDa.x + 50 < enemys3[j].x + 50 ||
                enemys3[j].x < cuDa.x && cuDa.x < enemys3[j].x + 50) {
                if (cuDa.y + 60 > enemys3[j].y && cuDa.y + 60 < enemys3[j].y + 50 ||
                    enemys3[j].y < cuDa.y && cuDa.y < enemys3[j].y + 40) {
                    enemys3[j].status = false;
                    cuDa.Hp--;
                }
            }
        }
    }
}
function playerCollisionEnemy4() {
    for (let j = 0; j < enemys4.length; j++) {
        if (enemys4[j].status === true) {
            if (cuDa.x + 50 > enemys4[j].x && cuDa.x + 50 < enemys4[j].x + 50 ||
                enemys4[j].x < cuDa.x && cuDa.x < enemys4[j].x + 50) {
                if (cuDa.y + 60 > enemys4[j].y && cuDa.y + 60 < enemys4[j].y + 50 ||
                    enemys4[j].y < cuDa.y && cuDa.y < enemys4[j].y + 40) {
                    enemys4[j].status = false;
                    cuDa.Hp--;
                }
            }
        }
    }
}

function playerCollisionBulletBoss() {
    for (let j = 0; j < bullesBosss.length; j++) {
        if (bullesBosss[j].status === true) {
            if (bullesBosss[j].x + 20 > cuDa.x && bullesBosss[j].x + 20 < cuDa.x + 50 ||
                bullesBosss[j].x > cuDa.x && bullesBosss[j].x < cuDa.x + 50) {
                if (bullesBosss[j].y + 40 > cuDa.y && bullesBosss[j].y + 40 < cuDa.y + 60 ||
                    cuDa.y < bullesBosss[j].y && bullesBosss[j].y < cuDa.y + 60) {
                    bullesBosss[j].status = false;
                    cuDa.Hp--;
                }
            }
        }
    }
}
function bossCollisionBullet (){
    for (let j = 0; j < bullets.length; j++) {
        if (bullets[j].status === true) {
            if (bullets[j].x + 20 > boss.x && bullets[j].x + 20 < boss.x + 50 ||
                bullets[j].x > boss.x && bullets[j].x < boss.x + 50) {
                if (bullets[j].y + 40 > boss.y && bullets[j].y + 40 < boss.y + 60 ||
                    boss.y < bullets[j].y && bullets[j].y < boss.y + 60) {
                    bullets[j].status = false;
                    boss.HpBoss--;
                }
            }
        }
    }
}

// function endGame() {
//     if(cuDa.Hp === 0){
//         alert('Điểm số của bạn là: ' + cuDa.point);
//         cuDa.Hp = 2;
//         location.reload();
//     }
// }
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let boss = new Boss(250, 20);
let cuDa = new Player(400, 300, 50, 60, 4, 'anh/cudapro.jpg');
cuDa.draw(ctx)
let angle = 0;
let bullets = [];
let enemys1 = [];
let enemys2 = [];
let enemys3 = [];
let enemys4 = [];
let bullesBosss = [];
play();
setInterval(createEnemy1, 5000);
setInterval(createEnemy2, 4000);
setInterval(createEnemy3, 6000);
setInterval(createEnemy4, 7000);
setInterval(createBulletBoss, 800);
canvas.onmousemove = canvasMouseMove;
canvas.onmousedown = canvasMouseDown;






