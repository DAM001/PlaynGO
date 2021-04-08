let app;
let player;

window.onload = function() {
    createScene();

    playerCreate();
    playerMovement();
}


function createScene() {
    app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0xAAAAAA
    });
    document.body.appendChild(app.view);
}

function playerCreate() {
    player = new PIXI.Sprite.from("Assets/Used/Player.png");
    player.anchor.set(.5, .5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;
    app.stage.addChild(player);
}



let playerSpeed = 10;
let keys = {};

function playerMovement() {
    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);

    app.ticker.add(gameLoop);
}

function keysDown(e) {
    keys[e.keyCode] = true;
}

function keysUp(e) {
    keys[e.keyCode] = false;
}


function gameLoop() { //W A S D
    if (keys["87"] && player.y > 0) player.y -= playerSpeed;
    if (keys["65"] && player.x > 0) player.x -= playerSpeed;
    if (keys["83"] && player.y < app.view.height) player.y += playerSpeed;
    if (keys["68"] && player.x < app.view.width) player.x += playerSpeed;

    if (keys["32"] && player.x > 0) {
        playerFire();
    }


    //weapon
    cooldown--;
    for (var i = 0; i < bulletIndex; i++) {
        bullets[i].x += 30;
    }

    //engine
    engine();
}

let bullets = {};
let bulletIndex = 0;
let cooldown = 0;

function playerFire() {
    if (cooldown > 0) return;
    cooldown = 10;

    player.x -= 5;

    bullets[bulletIndex] = new PIXI.Sprite.from("Assets/Used/Bullet.png");
    bullets[bulletIndex].anchor.set(.5, .5);
    bullets[bulletIndex].x = player.x;
    bullets[bulletIndex].y = player.y;
    app.stage.addChild(bullets[bulletIndex]);
    bulletIndex++;
}

let engineAnimation;

function engine() {
    engineAnimation = new PIXI.Sprite.from("Assets/Used/Engine/Engine0.png");
    engineAnimation.anchor.set(.5, .5);
    engineAnimation.x = player.x - 50;
    engineAnimation.y = player.y;

    engineAnimation.width = 20;
    engineAnimation.height = 10;

    app.stage.addChild(engineAnimation);
}












/*const scene = new Scene(800, 600);
    const player = new Player(scene.GetWidth / 2, scene.GetHeight / 2);*/