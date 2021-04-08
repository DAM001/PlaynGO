keys = {};
class Player {
    player;
    weapon;

    playerSpeed = 10;



    constructor(updateObjects, scene, startPosX, startPosY) {
        this.player = new PIXI.Sprite.from("Assets/Used/Player.png");
        this.player.anchor.set(.5);
        this.player.x = startPosX;
        this.player.y = startPosY;
        scene.SetParent(this.player);

        this.weapon = new Weapon(updateObjects, scene);
    }
    setPosition(x, y) {
        this.player.x = x;
        this.player.y = y;
    }
    get GetPositionX() { return this.player.x; }
    get GetPositionY() { return this.player.y; }


    edgeCollisionSize = 50;
    movement(keys) {
        if (keys["87"] && this.player.y > this.edgeCollisionSize) this.player.y -= this.playerSpeed;
        if (keys["83"] && this.player.y < (scene.GetHeight - this.edgeCollisionSize)) this.player.y += this.playerSpeed;
        if (keys["65"] && this.player.x > this.edgeCollisionSize) this.player.x -= this.playerSpeed;
        if (keys["68"] && this.player.x < (scene.GetWidth - this.edgeCollisionSize)) this.player.x += this.playerSpeed;

        if (keys["32"]) this.weaponFire();
    }

    weaponFire() {
        this.weapon.fire(this.GetPositionX, this.GetPositionY);
    }


    update(keys) {
        window.addEventListener("keydown", this.keysDown);
        window.addEventListener("keyup", this.keysUp);
        this.movement(keys);
    }
    keysDown(e) { this.keys[e.keyCode] = true; }
    keysUp(e) { this.keys[e.keyCode] = false; }
}

//87, 65, 83, 68, 32 W A S D Space