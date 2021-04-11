class Enemy {
    enemy;
    spaceship;
    health;

    speed = 3;

    active = false;
    currentLifeTime = 0;

    //0 - forward, 1 -up, 2 - down
    moveDirection = 0;

    constructor() {
        this.enemy = new PIXI.Sprite.from("Assets/Used/Enemy.png");
        scene.SetParent(this.enemy, false);

        this.enemy.anchor.set(.5);
        this.enemy.x = -1000;
        this.enemy.y = -1000;
        this.enemy.width = 50;
        this.enemy.height = 50;

        this.speed = Math.random() * 2 + 2;
        this.spaceship = new Spaceship(this.enemy, false);
        this.health = new Health(this.spaceship);
        updateObjects.push(this.spaceship);
    }
    get isEnemy() { return true; }

    edgeCollisionSize = 50;
    update() {
        if (!this.active) return;

        this.enemy.x -= this.speed;
        if (this.enemy.y > this.edgeCollisionSize && this.enemy.y < scene.GetHeight - this.edgeCollisionSize) this.enemy.y += this.moveDirection;
        this.currentLifeTime++;

        this.spaceship.movement();
        this.spaceship.moveLeft(this.speed);
        this.randomMovement();

        //collision
        var colliderSize = 40;
        if ((this.enemy.y + colliderSize) > player.player.y && (this.enemy.y - colliderSize) < player.player.y &&
            (this.enemy.x + colliderSize) > player.player.x && (this.enemy.x - colliderSize) < player.player.x) {
            player.die();
            this.health.damage(100);
        }
    }

    create() {
        this.active = true;
        this.currentLifeTime = 0;
        this.health.setHealth(100);

        this.enemy.x = scene.GetWidth + 100;
        this.enemy.y = Math.floor(Math.random() * (scene.GetHeight - this.edgeCollisionSize * 2) + this.edgeCollisionSize);
    }

    newDirection = 30;
    newDirectionCounter = 0;
    randomMovement() {
        this.spaceship.moveDown(this.speed * this.moveDirection);

        this.newDirectionCounter++;
        if (this.newDirectionCounter < this.newDirection) return;
        this.newDirection = Math.floor(Math.random() * 30) + 10;
        this.newDirectionCounter = 0;

        this.moveDirection = Math.random() * 2 - 1;
    }
    get isEnemy() { return true; }
}