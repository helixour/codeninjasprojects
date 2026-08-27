window.addEventListener('DOMContentLoaded', () => {
    document.body.style.zoom = "90%"; 
});

var squishSound = document.getElementById("squishSfx");
var mainMusic = document.getElementById("mainMusic");
var soundPlayed = false;

function squish() {
    if (!soundPlayed) {
        squishSound.play();
        document.getElementById("raccoon").className = "animateRaccoon";
        soundPlayed = true;
    }
    
}

function sayMsg() {
    document.getElementById("btn").innerHTML = "HEY THERE";
}

function mute() {
    if (!mainMusic.paused) {
        mainMusic.pause();
        document.getElementById("mute").innerHTML = '<img src="mute.png">'
        document.getElementById("disc").className = ""
    } else {
        mainMusic.play();
        document.getElementById("mute").innerHTML = '<img src="playing.png">'
        document.getElementById("disc").className = "discRotate"
    }
}