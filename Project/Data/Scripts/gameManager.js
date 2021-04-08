const app = new PIXI.Application();
let scene;
let player;

window.onload = startFunction;

function startFunction() {
    app.ticker.add(updateFunction);

    scene = new Scene(800, 600);
    player = new Player(updateObjects, scene, 50, scene.GetHeight / 2);
}

let updateObjects = [];

function updateFunction() {
    player.update(keys);

    for (var i = 0; i < updateObjects.length; i++) {
        /*if (!updateObjects[i].GetAlive) {
            updateObjects.splice(i);
            console.log("over");
        } else */
        updateObjects[i].update();
    }
}