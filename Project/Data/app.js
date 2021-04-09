function showMenu(show) {
    if (show) {
        document.getElementById("gameMenu").style.display = "block";
        document.getElementById("gameFolder").style.display = "none";
    } else {
        document.getElementById("gameMenu").style.display = "none";
        document.getElementById("gameFolder").style.display = "block";
    }
}