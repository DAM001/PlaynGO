class Enemy {
    enemy;

    speed = 4;

    active = false;
    currentLifeTime = 0;

    //0 - forward, 1 -up, 2 - down
    moveDirection = 0;

    constructor() {
        this.enemy = new PIXI.Sprite.from("Assets/Used/Enemy.png");
        scene.SetParent(this.enemy);

        this.enemy.anchor.set(.5);
        this.enemy.x = -1000;
        this.enemy.y = -1000;
        this.enemy.width = 50;
        this.enemy.height = 50;

        this.speed += Math.floor(Math.random() * 3);
    }

    edgeCollisionSize = 50;
    update() {
        if (!this.active) return;

        this.enemy.x -= this.speed;
        if (this.enemy.y > this.edgeCollisionSize && this.enemy.y < scene.GetHeight - this.edgeCollisionSize) this.enemy.y += this.moveDirection;
        this.currentLifeTime++;

        this.randomMovement();

        //collision
        var colliderSize = 40;
        if ((this.enemy.y + colliderSize) > player.player.y && (this.enemy.y - colliderSize) < player.player.y &&
            (this.enemy.x + colliderSize) > player.player.x && (this.enemy.x - colliderSize) < player.player.x) {
            console.log("collision with player");

            player.die();
            this.damage(100);
        }
    }

    create() {
        this.active = true;
        this.currentLifeTime = 0;
        this.health = 100;

        this.enemy.x = scene.GetWidth + 100;
        this.enemy.y = Math.floor(Math.random() * (scene.GetHeight - this.edgeCollisionSize * 2) + this.edgeCollisionSize);
    }

    newDirection = 30;
    newDirectionCounter = 0;
    randomMovement() {
        this.newDirectionCounter++;
        if (this.newDirectionCounter < this.newDirection) return;
        this.newDirection = Math.floor(Math.random() * 30) + 30;
        this.newDirectionCounter = 0;

        this.moveDirection = Math.floor(Math.random() * 5) - 2;
    }


    //health
    health = 100;
    get getHealth() { return this.health; }

    damage(amount) {
        this.health -= amount;
        if (this.health <= 0) this.die();
    }





    die() {
        this.active = false;
        this.enemy.x = -1000;
        this.enemy.y = -1000;

        document.getElementById("score").innerHTML = "Score: " + ui.getScore;
    }
}