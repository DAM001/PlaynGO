class Engine {
    engine;

    constructor() {
        this.engine = new PIXI.Sprite.from("Assets/Used/Engine/Engine0.png");
        this.star.anchor.set(.5);
        scene.SetParent(this.star);
    }

    update() {

    }
}