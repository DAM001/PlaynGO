class Bullet {
    bullet;

    lifeTime = 100;
    speed = 15;

    active = false;
    currentLifeTime = 0;

    constructor() {
        this.bullet = new PIXI.Sprite;
        this.bullet.anchor.set(.5);
        scene.SetParent(this.bullet);

        this.speed += Math.floor(Math.random() * 2);
        this.reset();
    }

    update() {
        if (!this.active) return;

        if (this.currentLifeTime >= this.lifeTime) {
            this.active = false;
            this.reset();
            return;
        }

        this.currentLifeTime++;
        if (!this.effect) {
            this.bullet.x += this.speed;
            this.bullet.y += this.rotation;
        }

        //collision
        for (var i = 0; i < updateObjects.length; i++) {
            if (updateObjects[i].getHealth > 0) {
                if ((this.bullet.y + 25) > updateObjects[i].enemy.y && (this.bullet.y - 25) < updateObjects[i].enemy.y &&
                    (this.bullet.x + 25) > updateObjects[i].enemy.x && (this.bullet.x - 25) < updateObjects[i].enemy.x &&
                    !this.effect) {
                    updateObjects[i].damage(34);

                    this.impact();
                }
            }
        }
    }

    setActive(startPosX, startPosY) {
        this.bullet.texture = PIXI.Texture.from("Assets/Used/Bullet.png");
        this.active = true;
        this.effect = false;
        this.currentLifeTime = 0;

        this.bullet.x = startPosX;
        this.bullet.y = startPosY;

        this.bullet.width = 50;
        this.bullet.height = 10;
    }

    effect = false;
    impact() {
        this.bullet.texture = PIXI.Texture.from("Assets/Used/Bullet/Impact.png");

        this.effect = true;
        this.currentLifeTime = this.lifeTime - 10;
        this.bullet.rotation = (Math.floor(Math.random() * 10) - 5) / 2;
        this.bullet.width = 30;
        this.bullet.height = 30;
    }





    rotation = 0;
    reset() {
        this.bullet.x = -1000;
        this.bullet.y = -1000;

        this.rotation = (Math.floor(Math.random() * 10) - 5) / 5;
        this.bullet.rotation = this.rotation / 20;
    }
}