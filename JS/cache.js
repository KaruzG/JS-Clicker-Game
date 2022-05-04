// --------------------------------- cache ----------------------------------------
if (localStorage.getItem("score")){                                  // Loads cache
    score = parseInt(localStorage.getItem("score"));
    clickPower = parseInt(localStorage.getItem("clickPower"));
    clicksPasivos = parseInt(localStorage.getItem("clicksPasivos"));
    clickCounter.innerHTML = score;
} else{
    score = 0;
}

setInterval (function cache() {                             // Saves stats every 3s
    localStorage.setItem("score", score);
    localStorage.setItem("clickPower", clickPower);
    localStorage.setItem("clicksPasivos", clicksPasivos);
}, 3000);
// --------------------------------------------------------------------------------