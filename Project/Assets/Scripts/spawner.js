class Spawner {
    spawnRate = 120;
    cooldown = 120;

    active = false;

    constructor() {
        updateObjects.push(this);

        for (var i = 0; i < this.maxEnemyNum; i++) {
            this.enemies[i] = new Enemy();
            updateObjects.push(this.enemies[i]);
        }
    }

    update() {
        if (!this.active) return;
        this.cooldown--;

        if (this.cooldown > 0) return;
        this.spawn();
    }

    maxEnemyNum = 10;
    currentEnemyIndex = 0;
    enemies = {};
    spawn() {
        this.cooldown = this.spawnRate;
        if (this.spawnRate > 30) this.spawnRate -= 1;


        this.enemies[this.currentEnemyIndex].create();
        if (this.currentEnemyIndex < this.maxEnemyNum - 1) this.currentEnemyIndex++;
        else this.currentEnemyIndex = 0;
    }

    setActive(isActive) {
        this.active = isActive;

        if (isActive) return; //remove all enemy from the map
        for (var i = 0; i < this.maxEnemyNum; i++) {
            this.enemies[i].enemy.x = -1000;
        }
        this.spawnRate = 120;
        this.cooldown = 120;
    }
}