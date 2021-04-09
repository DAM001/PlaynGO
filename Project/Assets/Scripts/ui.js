class Ui {
    constructor() {}

    score = 0;
    get getScore() {
        if (player.active) this.score++;
        return this.score;
    }


    gameOver() {
        document.getElementById("gameOver").style.display = "block";
        spawner.setActive(false);
    }

    restart() {
        document.getElementById("gameOver").style.display = "none";
        player.restart();
        spawner.setActive(true);
    }
}