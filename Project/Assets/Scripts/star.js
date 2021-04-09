class Star {
    star;

    speed = 5;

    constructor() {
        this.star = new PIXI.Sprite.from("Assets/Used/Map/Star0.png");
        this.star.anchor.set(.5);
        scene.SetParent(this.star);

        this.speed += Math.floor(Math.random() * 2);
        this.star.x = -1000;
    }

    update() {
        this.star.x -= this.speed;
    }

    setPosition() {
        this.speed = Math.floor(Math.random() * 7) + 2;

        this.star.x = scene.GetWidth + 50;
        this.star.y = Math.floor(Math.random() * scene.GetHeight);

        //visuals (stars)
        var starType = Math.floor(Math.random() * 3);
        if (starType == 0) this.star.texture = PIXI.Texture.from("Assets/Used/Map/Star0.png");
        else if (starType == 1) this.star.texture = PIXI.Texture.from("Assets/Used/Map/Star1.png");
        else if (starType == 2) this.star.texture = PIXI.Texture.from("Assets/Used/Map/Star2.png");

        this.star.width = this.speed * 2;
        this.star.height = this.speed * 2;

        this.star.rotation = (Math.floor(Math.random() * 10) - 5) / 5;
    }
}