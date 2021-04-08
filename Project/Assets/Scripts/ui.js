class Ui {
    constructor() {}

    score = 0;
    get getScore() {
        this.score++;
        return this.score;
    }


    gameOver() {
        document.getElementById("gameOver").style.display = "block";
        setTimeout(this.die, 2000);
    }

    die() {
        location.reload();
    }
}