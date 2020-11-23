function chooseWeapon() {
    document.getElementById("mainContentTwo").style = "display: block;"
}

function backToHome() {
    document.getElementById("mainContent").style = "display: block;"
    document.getElementById("mainContentTwo").style = "display: none;"
    document.getElementsByClassName(".mainContentTwo").style = "display: block";
    document.getElementById("mainContentThree").style = "display: none;"
}

function chooseToPlay() {
    document.getElementById("mainContentThree").style = "display: block;"
}

var click = document.querySelectorAll(".item");
console.log(click);
Array.from(click).forEach(function(click){
click.addEventListener("click", function(event){
 console.log(event.target.innerHTML  = "X");

   computerRanNum();


}); 
});

function computerRanNum() {
    var randomNumber = Math.floor(Math.random() * 9) +1;

    if(click[randomNumber].innerHTML === "") {
         click[randomNumber].innerHTML = "O";
    }

    else {
        computerRanNum();

    }

}

function homeText() {
    for(var i = 0; i <= click.length; click++) {
        click[i].innerHTML = "";
    }
}