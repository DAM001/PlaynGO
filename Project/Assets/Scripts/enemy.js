class Enemy {
    enemy;
    spaceship;

    speed = 3;

    active = false;
    currentLifeTime = 0;
    explotionSound;

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


        this.prepareExplotion();

        //audio
        this.explotionSound = new Audio("Assets/Sounds/Explotion.ogg");
    }

    edgeCollisionSize = 50;
    update() {
        this.explotionUpdate();
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
        this.spaceship.moveDown(this.speed * this.moveDirection);

        this.newDirectionCounter++;
        if (this.newDirectionCounter < this.newDirection) return;
        this.newDirection = Math.floor(Math.random() * 30) + 10;
        this.newDirectionCounter = 0;

        this.moveDirection = Math.random() * 2 - 1;
    }


    //health
    health = 100;
    get getHealth() { return this.health; }

    damage(amount) {
        this.health -= amount;
        if (this.health <= 0) this.die();
    }





    die() {
        this.explotion();
        this.active = false;
        this.enemy.x = -1000;
        this.enemy.y = -1000;

        document.getElementById("score").innerHTML = "Score: " + ui.getScore;
    }

    //explotionEffect
    explotionEffect;
    explotionEffectSize;

    prepareExplotion() {
        this.explotionEffect = new PIXI.Sprite.from("Assets/Used/Explotion.png");
        this.explotionEffect.anchor.set(.5);
        scene.SetParent(this.explotionEffect);
        this.explotionEffect.x = -1000;
        this.explotionEffect.y = -1000;
    }
    explotion() {
        this.explotionEffect.x = this.enemy.x;
        this.explotionEffect.y = this.enemy.y;
        this.explotionEffectSize = 0;
        this.explotionEffect.width = this.explotionEffectSize;
        this.explotionEffect.height = this.explotionEffectSize;

        if (ui.getPlaySounds) this.explotionSound.play();
    }
    explotionUpdate() {
        if (this.active) return;

        var maxSize = 500;
        var effectSpeed = 20;
        if (this.explotionEffectSize < maxSize) this.explotionEffectSize += effectSpeed;
        this.explotionEffect.width = this.explotionEffectSize;
        this.explotionEffect.height = this.explotionEffectSize;
        this.explotionEffect.alpha = (maxSize - this.explotionEffectSize) / maxSize;
    }
}