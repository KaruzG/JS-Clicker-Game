/* 
  * Mainly for style oriented code
  * Coded by: @KaruzG on github
*/


// ---------------------------- undraggable button -------------------------------------
let img = document.getElementById("unclickedImg"); // The "button"
img.setAttribute('draggable', false);
// -------------------------------------------------------------------------------------


// --------------------- Button 2 frames animation -------------------------------------
function clicked() {
    clickMeClicked();
    changeImg();
}

function changeImg() {
    img.src="JS/../img/cursor2.png";
    setTimeout(changeImg2,100);
}

function changeImg2() {
    img.src="JS/../img/cursor1.png";
}
// -------------------------------------------------------------------------------------