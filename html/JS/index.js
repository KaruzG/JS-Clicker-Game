document.getElementById('unclickedImg').setAttribute('draggable', false);
let clickCounter = document.getElementById("clickCounter");
let clickPower = 1;
let score = 0;
let clicksPasivos = 0;


if (localStorage.getItem("score")){
    score = parseInt(localStorage.getItem("score"));
    clickPower = parseInt(localStorage.getItem("clickPower"));
    clicksPasivos = parseInt(localStorage.getItem("clicksPasivos"));
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
    localStorage.setItem("score", score);
    localStorage.setItem("clickPower", clickPower);
    localStorage.setItem("clicksPasivos", clicksPasivos);
    console.log("Cache!")
}, 3000);