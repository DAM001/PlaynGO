class Ui {
    constructor() {
        this.musicPlayer = new Audio();
        this.musicPlayer.volume = .3;
    }

    score = 0;
    get getScore() {
        if (player.active) this.score++;
        return this.score;
    }


    gameOver() {
        document.getElementById("gameOver").style.display = "block";
        spawner.setActive(false);

        this.musicPlayer.src = "Assets/Sounds/Music/GameOver.mp3";
        this.playGameOverMusic();
    }

    restart() {
        document.getElementById("gameOver").style.display = "none";
        player.restart();
        spawner.setActive(true);

        this.score = 0;
        document.getElementById("score").innerHTML = "Score: 0";

        this.musicPlayer.src = "Assets/Sounds/Music/GameMusic.mp3";
        this.playGameMusic();
    }

    //gameMusic
    musicPlayer;
    playMusic = true;
    playMenuMusic() {
        this.musicPlayer.src = "Assets/Sounds/Music/MenuMusic.mp3";
        this.musicPlayer.play();
    }
    playGameMusic() {
        this.musicPlayer.src = "Assets/Sounds/Music/GameMusic.mp3";
        this.musicPlayer.play();
    }
    playGameOverMusic() {
        this.musicPlayer.src = "Assets/Sounds/Music/GameOver.mp3";
        this.musicPlayer.play();
    }
    muteMusic() {
        this.playMusic = !this.playMusic;
        if (this.playMusic) this.musicPlayer.volume = .4;
        else this.musicPlayer.volume = 0;

        if (this.playMusic) document.getElementById("muteMusic").style.backgroundColor = "#b4eba9";
        else document.getElementById("muteMusic").style.backgroundColor = "#f2a7a7";
    }

    playSounds = true;
    muteSounds() {
        this.playSounds = !this.playSounds;

        if (this.playSounds) document.getElementById("muteSounds").style.backgroundColor = "#b4eba9";
        else document.getElementById("muteSounds").style.backgroundColor = "#f2a7a7";
    }
    get getPlaySounds() { return this.playSounds; }
}