class Weapon {
    fireRate = 15;
    cooldown = 0;

    constructor(updateObjects, scene) {
        this.updateObjects = updateObjects;
        this.scene = scene;

        updateObjects.push(this);

        for (var i = 0; i < this.maxBulletsNum; i++) {
            this.bullets[i] = new Bullet(scene);
            updateObjects.push(this.bullets[i]);
        }
    }

    update() {
        this.cooldown--;
    }

    maxBulletsNum = 5;
    currentBulletIndex = 0;
    bullets = {};
    fire(startPosX, startPosY) {
        if (this.cooldown > 0) return;
        this.cooldown = this.fireRate;

        this.bullets[this.currentBulletIndex].setActive(startPosX, startPosY);
        if (this.currentBulletIndex < this.maxBulletsNum - 1) this.currentBulletIndex++;
        else this.currentBulletIndex = 0;
    }
}