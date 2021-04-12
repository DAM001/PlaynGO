const app = new PIXI.Application();
let scene;
let ui;
let background;

let player;
let spawner0;
let spawner1;

window.onload = startFunction;

function startFunction() {
    app.ticker.add(updateFunction);
    scene = new Scene(800, 600);
    ui = new Ui();
    background = new Background();
    spawner0 = new Spawner(0, 120);
    spawner1 = new Spawner(1, 200);
    player = new Player();

    start();
}

let updateObjects = [];

function updateFunction() {
    player.update(keys);

    for (var i = 0; i < updateObjects.length; i++) {
        updateObjects[i].update();
    }
}