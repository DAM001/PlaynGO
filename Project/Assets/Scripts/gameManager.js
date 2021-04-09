const app = new PIXI.Application();
let scene;
let ui;
let background;

let player;
let spawner;

window.onload = startFunction;

function startFunction() {
    info();

    //game start
    app.ticker.add(updateFunction);

    scene = new Scene(800, 600);
    ui = new Ui();
    background = new Background();

    spawner = new Spawner();
    player = new Player();
}

let updateObjects = [];

function updateFunction() {
    player.update(keys);

    for (var i = 0; i < updateObjects.length; i++) {
        updateObjects[i].update();
    }
}



function info() {
    //  ████████    ██████████  ██████████  
    //  ██    ██    ██      ██  ██      ██  
    //  ██    ████  ██  ██  ██  ██  ██  ██  
    //  ██      ██  ██      ██  ██  ██  ██  
    //  ██████████  ██      ██  ██  ██  ██  
    //  Name: Dávid Attila Marcell          
    //  Email: david.marci55@gmail.com      

    console.log("%c\n                                      \n  ████████    ██████████  ██████████  \n  ██    ██    ██      ██  ██      ██  \n  ██    ████  ██  ██  ██  ██  ██  ██  \n  ██      ██  ██      ██  ██  ██  ██  \n  ██████████  ██      ██  ██  ██  ██  \n                                      \n  Name: Dávid Attila Marcell          \n  Email: david.marci55@gmail.com      \n                                      ", 'background: #000; color: #fff;');
    console.log("Made with love for Play'n Go frontend team! :D");
}