class Spaceship {
    spaceship;
    constructor(spaceship, edgeCollision) {
        this.spaceship = spaceship;
        this.edgeCollision = edgeCollision;
    }

    currentVelocity = [.0, 0];
    velocity = 1;
    drag = .4;

    edgeCollision = false;
    edgeCollisionSize = 50;

    movement() {
        //reset speed
        if (this.currentVelocity[0] < this.drag && this.currentVelocity[0] > -this.drag) this.currentVelocity[0] = 0;
        else if (this.currentVelocity[0] > 0) this.currentVelocity[0] -= this.drag;
        else if (this.currentVelocity[0] < 0) this.currentVelocity[0] += this.drag;
        this.spaceship.y += this.currentVelocity[0];

        if (this.currentVelocity[1] < this.drag && this.currentVelocity[1] > -this.drag) this.currentVelocity[1] = 0;
        else if (this.currentVelocity[1] > 0) this.currentVelocity[1] -= this.drag;
        else if (this.currentVelocity[1] < 0) this.currentVelocity[1] += this.drag;
        this.spaceship.x += this.currentVelocity[1];


        //correct position
        if (this.spaceship.y < this.edgeCollisionSize) {
            this.spaceship.y = this.edgeCollisionSize;
            this.currentVelocity[0] = 0;
        }
        if (this.spaceship.y > (scene.GetHeight - this.edgeCollisionSize)) {
            this.spaceship.y = scene.GetHeight - this.edgeCollisionSize;
            this.currentVelocity[0] = 0;
        }
        if (!this.edgeCollision) return;
        if (this.spaceship.x < this.edgeCollisionSize) {
            this.spaceship.x = this.edgeCollisionSize;
            this.currentVelocity[1] = 0;
        }
        if (this.spaceship.x > (scene.GetWidth - this.edgeCollisionSize)) {
            this.spaceship.x = scene.GetWidth - this.edgeCollisionSize;
            this.currentVelocity[1] = 0;
        }
    }

    moveUp(speed) { if (this.currentVelocity[0] > -speed) this.currentVelocity[0] -= this.velocity; }
    moveDown(speed) { if (this.currentVelocity[0] < speed) this.currentVelocity[0] += this.velocity; }
    moveLeft(speed) { if (this.currentVelocity[1] > -speed) this.currentVelocity[1] -= this.velocity; }
    moveRight(speed) { if (this.currentVelocity[1] < speed) this.currentVelocity[1] += this.velocity; }

    movementBackgroundAnimation() {
        for (var i = 0; i < updateObjects.length; i++) {
            if (updateObjects[i].isStar) updateObjects[i].starMovementAnim(this.currentVelocity);
        }
    }
}