var gameWinnerOrLoser = document.getElementById("displayWinOrLoser");

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

var human;
var computer;

function selectWeapon(event) {
    human = document.getElementById(event.target.id).innerHTML;
    if(human === "X") {
        computer = "O"
    }else{
        computer = "X";
    }
    chooseToPlay();
}


var click = document.querySelectorAll(".item");
Array.from(click).forEach(function(click){
click.addEventListener("click", function(event){
    if(event.target.innerHTML === "") {
        event.target.innerHTML = human;
        computerRanNum();
   winningStage();
    }
   
}); 
});



function computerRanNum() {
    var randomNumber = Math.floor(Math.random() * 8);

    if(click[randomNumber].innerHTML === "") {
         click[randomNumber].innerHTML = computer;
    }

    else {

        computerRanNum();

    }

}

function homeText() {
    for(var i = 0; i <= click.length; i++) {
       click[i].innerHTML = "";
        gameWinnerOrLoser.innerHTML = "";
    }

}

function goodLook() {
    document.getElementById("playerOneScore").style = " margin-left: 5%; color: white;"
    document.getElementById("computerScore").style = " margin-left: 5%; color: white;"
}


function winningStage() {
    if (click[0].innerHTML === human && click[1].innerHTML === human && click[2].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "Player1 Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[3].innerHTML === human && click[4].innerHTML === human && click[5].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "Player1 Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[6].innerHTML === human && click[7].innerHTML === human && click[8].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "Player1 Win";
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[0].innerHTML === human && click[4].innerHTML === human && click[8].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "Player1 Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

     else if(click[0].innerHTML === human && click[4].innerHTML === human && click[8].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "Player1 Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[0].innerHTML === human && click[3].innerHTML === human && click[6].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "Player1 Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[1].innerHTML === human && click[4].innerHTML === human && click[7].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "Player1 Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[2].innerHTML === human && click[4].innerHTML === human && click[6].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "Player1 Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[2].innerHTML === human && click[5].innerHTML === human && click[8].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "Player1 Win"; 
         gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
         goodLook();
    }

    if(click[0].innerHTML === computer && click[1].innerHTML === computer && click[2].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "Player1 Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

     else if(click[3].innerHTML === computer && click[4].innerHTML === computer && click[5].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "Computer Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

     else if(click[6].innerHTML === computer && click[7].innerHTML === computer && click[8].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "Computer Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

     else if(click[0].innerHTML === computer && click[3].innerHTML === computer && click[6].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "Computer Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[1].innerHTML === computer && click[4].innerHTML === computer && click[7].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "Computer Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[2].innerHTML === computer && click[5].innerHTML === computer && click[8].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "Computer Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[0].innerHTML === computer && click[4].innerHTML === computer && click[8].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "Computer Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else if(click[2].innerHTML === computer && click[4].innerHTML === computer && click[6].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "Computer Win"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        goodLook();
    }

    else {
        var gameTie = 0;
        for(var i = 0; i < click.length; i++) {
            if(click[i].innerHTML != "") {
                gameTie += 1;
            }
          
        }

        if(gameTie === 9) {
            gameWinnerOrLoser.innerHTML ="game Tie";
            gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"

        }
    }
     
}