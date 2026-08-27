window.addEventListener('DOMContentLoaded', () => {
    document.body.style.zoom = "90%"; 
});

var mainMusic = document.getElementById("mainMusic");

function mute() {
    if (!mainMusic.paused) {
        mainMusic.pause();
        document.getElementById("mute").innerHTML = '<img src="../mute.png">'
    } else {
        mainMusic.play();
        document.getElementById("mute").innerHTML = '<img src="../playing.png">'
    }
}