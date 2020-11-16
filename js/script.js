function chooseWeapon() {
    document.getElementById("mainContentTwo").style = "display: block;"
}

function backToHome() {
    document.getElementById("mainContent").style = "display: block;"
    document.getElementById("mainContentTwo").style = "display: none;"
}

function chooseToPlay() {
    document.getElementById("mainContentThree").style = "display: block;"
}

function homeText() {
    document.getElementById("mainContentTwo").reset();
    document.getElementById("mainContent").reset();
    document.getElementById("mainContentThree").reset();
}

var click = document.querySelectorAll(".item");
console.log(click);
Array.from(click).forEach(function(click){
click.addEventListener("click", function(event){
 console.log(event.target.innerHTML  = "X");
   click.style = "text-align: center; font-size: 110px";

// var randomNumber = Math.floor(Math.random() * 8) +0;
//     if(randomNumber == 0) {
//      click.innerHTML = "0";
//     }
}); 
});
