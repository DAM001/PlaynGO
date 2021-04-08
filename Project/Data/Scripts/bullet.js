class Bullet {
    bullet;

    lifeTime = 20;
    speed = 20;

    currentLifeTime = 0;
    active = false;

    constructor(scene) {
        this.bullet = new PIXI.Sprite.from("Assets/Used/Bullet.png");
        this.bullet.anchor.set(.5);
        this.bullet.x = 0;
        this.bullet.y = -100;
        scene.SetParent(this.bullet);
    }

    update() {
        if (!this.active) return;

        if (this.currentLifeTime >= this.lifeTime) {
            this.active = false;
            return;
        }

        this.bullet.x += this.speed;
        this.currentLifeTime++;
    }

    setActive(startPosX, startPosY) {
        this.active = true;
        this.currentLifeTime = 0;

        this.bullet.x = startPosX;
        this.bullet.y = startPosY;
    }

    get GetAlive() { return this.currentLifeTime <= this.lifeTime; }
}