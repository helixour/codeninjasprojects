window.addEventListener('DOMContentLoaded', () => {
    document.body.style.zoom = "90%"; 
});

var squishSound = document.getElementById("squishSfx");
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