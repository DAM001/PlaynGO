class Spawner {
    spawnRate = 50;
    cooldown = 120;

    constructor() {
        updateObjects.push(this);

        for (var i = 0; i < this.maxEnemyNum; i++) {
            this.enemies[i] = new Enemy();
            updateObjects.push(this.enemies[i]);
        }
    }

    update() {
        this.cooldown--;

        if (this.cooldown > 0) return;
        this.spawn();
    }

    maxEnemyNum = 10;
    currentEnemyIndex = 0;
    enemies = {};
    spawn() {
        this.cooldown = this.spawnRate;

        this.enemies[this.currentEnemyIndex].create();
        if (this.currentEnemyIndex < this.maxEnemyNum - 1) this.currentEnemyIndex++;
        else this.currentEnemyIndex = 0;
    }
}