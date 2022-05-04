/* 
  * Main JS script
  * Coded by: @KaruzG on github
*/

// ---------------------------- declarations -------------------------------------
let clickCounter = document.getElementById("clickCounter"); // Click container
let clickPower = 1; // When button clicked, how many clicks added to score
let score = 0;
let clicksPasivos = 0; // Clicks per second added
let img = document.getElementById("unclickedImg"); // The "button"
// ---------------------------- ------------ -------------------------------------

document.getElementById('unclickedImg').setAttribute('draggable', false);

function clicked() {
    clickMeClicked();
    changeImg();
}

function clickMeClicked() {
    score = score + clickPower;

    return clickCounter.innerHTML = score;

}

function changeImg() {
    img.src="JS/../img/cursor2.png";
    setTimeout(changeImg2,100);
}

function changeImg2() {
    img.src="JS/../img/cursor1.png";
}

function pasiveClicks() {
    clicksPasivos = clicksPasivos + 1;
}

function mejoraClick() {
    return clickPower++;
}

function reset() {
    score = 0;
    clickCounter.innerHTML = score;
    clickPower = 1;
    clicksPasivos = 0;
    localStorage.setItem("clicksCache", 0);

}  

setInterval (function() {
    score = score + clicksPasivos;
    clickCounter.innerHTML = score;
}, 1000);