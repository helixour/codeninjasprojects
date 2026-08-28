alert("WARNING: This game may be glitchy");

var squishSound = document.getElementById("squishSfx");
var buzzer = document.getElementById("buzzer");
var tada = document.getElementById("tada");

// persistence

var score;

if (!localStorage.score) {
    score = 0;
} else {
    score = Number(localStorage.score);
    document.getElementById("score").innerHTML = score;
}

var upgradeAmount;

if (!localStorage.upgradeAmount) {
    upgradeAmount = 50;
} else {
    upgradeAmount = Number(localStorage.upgradeAmount);
}

var multi;

if (!localStorage.multi) {
    multi = 1;
} else {
    multi = Number(localStorage.multi);
    document.getElementById("upgrade").innerHTML = 'x' + multi + ' Upgrade:<br>' + upgradeAmount + ' Clicks';
}

var clickNum;

if (!localStorage.clickNum) {
    clickNum = 1;
} else {
    clickNum = Number(localStorage.clickNum);
}

var autoUpgradeAmount;

if (!localStorage.autoUpgradeAmount) {
    autoUpgradeAmount = 20;
} else {
    autoUpgradeAmount = Number(localStorage.autoUpgradeAmount);
}

var autoClicks;

if (!localStorage.autoClicks) {
    autoClicks = 0.1;
} else {
    autoClicks = Number(localStorage.autoClicks);
    document.getElementById("auto").innerHTML = autoClicks * 2  + ' clicks per 1 sec:<br>' + autoUpgradeAmount + ' Clicks';
}

var clickStart = localStorage.clickStart === 'true';
if (clickStart) { 
    autoClick()
}

// functions

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
    if (score >= upgradeAmount) {
        upgradeScore(-upgradeAmount)
        tada.play();

        upgradeAmount *= 2;
        localStorage.upgradeAmount = upgradeAmount

        clickNum *= 2
        localStorage.clickNum = clickNum

        multi *= 2
        localStorage.multi = multi

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
            localStorage.clickStart = clickStart
        } else {
            autoClicks *= 2
            localStorage.autoClicks = autoClicks
        }
        
        tada.play();
        
        upgradeScore(-autoUpgradeAmount)
        autoUpgradeAmount *= 2
        localStorage.autoUpgradeAmount = autoUpgradeAmount
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
    localStorage.score = score
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