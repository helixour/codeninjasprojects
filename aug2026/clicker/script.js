var score = 0;
var squishSound = document.getElementById("squishSfx");

function point() {
    score = score + 1;
    document.getElementById("raccoon").outerHTML = '<img onclick="point()" id="raccoon" src="smol_raccoon.png">';
    document.getElementById("score").innerHTML = score;
    squishSound.cloneNode(true).play();
    document.getElementById("raccoon").outerHTML = '<img onclick="point()" id="raccoon" src="raccoon.png">';
}

window.addEventListener('DOMContentLoaded', () => {
    document.body.style.zoom = "110%";
});