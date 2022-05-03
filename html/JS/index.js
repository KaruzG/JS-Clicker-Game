let clickMe = document.getElementById("clickMe");
let clickCounter = document.getElementById("clickCounter");
let clickPower = 1;
let score = 0;
let clicksPasivos = 0;


if (localStorage.getItem("clicksCache")){
    score = parseInt(localStorage.getItem("clicksCache"))
    clickCounter.innerHTML = score;
} else{
    score = 0
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function clickMeClicked() {
    score = score + clickPower;

    return clickCounter.innerHTML = score;

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

setInterval (function cache() {
    localStorage
        .setItem("score", score)
        .setItem

}, 3000);