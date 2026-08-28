alert("WARNING: This game may be glitchy");

var squishSound = document.getElementById("squishSfx");
var buzzer = document.getElementById("buzzer");
var tada = document.getElementById("tada");

var score = 0;

var upgradeAmount = 50;
var multi = 2;
var clickNum = 1;

var autoUpgradeAmount = 20;
var autoClicks = 0.1;
var clickStart = false;

function point() {
    upgradeScore(clickNum);
    document.getElementById("raccoon").outerHTML = '<img onclick="point()" id="raccoon" src="raccoon.png">';
    squishSound.cloneNode(true).play();
    document.getElementById("raccoon").outerHTML = '<img onclick="point()" id="raccoon" src="raccoon.png">';
}

function debug() {
    alert("clicked")
}

function upgrade() {
    if (score >= upgradeAmount *2) {
        upgradeScore(-upgradeAmount)
        tada.play();
        upgradeAmount *= 2;
        clickNum *= 2
        multi *= 2
        document.getElementById("upgrade").innerHTML = 'x' + multi + ' Upgrade:<br>' + upgradeAmount + ' Clicks';
    } else {
        buzzer.play();
    }
}

function autoUpgrade() {
    if (score >= autoUpgradeAmount) {
        if (!clickStart) {
            autoClick()
            clickStart = true;
        } else {
            autoClicks *= 2
        }
        
        tada.play();
        
        upgradeScore(-autoUpgradeAmount)
        autoUpgradeAmount *= 2
        document.getElementById("auto").innerHTML = autoClicks * 2  + ' clicks per 1 sec:<br>' + autoUpgradeAmount + ' Clicks';
    } else {
        buzzer.play();
    }  
}

function autoClick() {
    var interval = setInterval(function() {
        upgradeScore(autoClicks)
    }, 1000)
}

function upgradeScore(num) {
    score += num
    score = Math.round(score * 10) / 10
    document.getElementById("score").innerHTML = score;
}

// cps calculating
var cps = 0;

function updateCPS() {
    document.getElementById("cps").innerHTML = cps + " CPS";
}

function removeClick() {
    cps--;
    updateCPS();
}

window.onclick = function() {
    cps++;
    updateCPS()

    if (cps > 19) {
        location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0")
        alert("YOU CHEATER")
    }

    setTimeout(removeClick, 1000);
    return;
}