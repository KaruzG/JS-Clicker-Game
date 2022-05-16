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
// -------------------------------------------------------------------------------

img.setAttribute('draggable', false);

// --------------------------------- cache ----------------------------------------
if (localStorage.getItem("score")){                                  // Loads cache
    score = parseInt(localStorage.getItem("score"));
    clickPower = parseInt(localStorage.getItem("clickPower"));
    clicksPasivos = parseInt(localStorage.getItem("clicksPasivos"));
    clickCounter.innerHTML = score;
} else {
    score = 0;
}

setInterval (function cache() {                             // Saves stats every 3s
    localStorage.setItem("score", score);
    localStorage.setItem("clickPower", clickPower);
    localStorage.setItem("clicksPasivos", clicksPasivos);
}, 3000);
// --------------------------------------------------------------------------------

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

// ---------------------------- header menu -------------------------------------
  
    // ---------------------------- pasive Clicks -------------------------------
var pasiveClicksPrice = 100;
document.getElementById("pricePasive").innerHTML = pasiveClicksPrice;
function pasiveClicks() {
    clicksPasivos = clicksPasivos + 1;
    var score = score - pasiveClicksPrice;
    var pasiveClicksPrice = pasiveClicksPrice*1.2;
}
  
    // ---------------------------- click Power ---------------------------------
function mejoraClick() {
    return clickPower++;
}

    // ---------------------------- reset ---------------------------------------
function reset() {
    score = 0;
    clickCounter.innerHTML = score;
    clickPower = 1;
    clicksPasivos = 0;
    localStorage.setItem("clicksCache", 0);

}  
// ------------------------------------------------------------------------------

setInterval (function() {
    score = score + clicksPasivos;
    clickCounter.innerHTML = score;
}, 1000);