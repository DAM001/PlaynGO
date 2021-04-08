class Weapon {
    fireRate = 8;
    cooldown = 0;

    constructor() {
        updateObjects.push(this);

        for (var i = 0; i < this.maxBulletsNum; i++) {
            this.bullets[i] = new Bullet();
            updateObjects.push(this.bullets[i]);
        }
    }

    update() {
        this.cooldown--;
    }

    maxBulletsNum = 10;
    currentBulletIndex = 0;
    bullets = {};
    fire(startPosX, startPosY) {
        if (this.cooldown > 0) return;
        this.cooldown = this.fireRate;

        this.bullets[this.currentBulletIndex].setActive(startPosX + 50, startPosY);
        if (this.currentBulletIndex < this.maxBulletsNum - 1) this.currentBulletIndex++;
        else this.currentBulletIndex = 0;
    }
}