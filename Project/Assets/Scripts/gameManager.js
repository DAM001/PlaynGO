const app = new PIXI.Application();
let scene;
let ui;

let player;
let spawner;

window.onload = startFunction;

function startFunction() {
    app.ticker.add(updateFunction);

    scene = new Scene(800, 600);
    ui = new Ui();
    player = new Player(50, scene.GetHeight / 2);

    spawner = new Spawner();
}

let updateObjects = [];

function updateFunction() {
    player.update(keys);

    for (var i = 0; i < updateObjects.length; i++) {
        updateObjects[i].update();
    }
}