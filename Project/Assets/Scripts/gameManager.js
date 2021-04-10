const app = new PIXI.Application();
let scene;
let ui;
let background;

let player;
let spawner;

window.onload = startFunction;

function startFunction() {
    app.ticker.add(updateFunction);
    scene = new Scene(800, 600);
    ui = new Ui();
    background = new Background();
    spawner = new Spawner();
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