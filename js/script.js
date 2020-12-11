var gameWinnerOrLoser = document.getElementById("displayWinOrLoser");

var human_score_keeping = 0;

var computer_score_keeping = 0;

var tracker = 0;

// function displaying_instruction(){
//     // document.getElementById("displaying_game-instruction")
//     document.getElementsByClassName(".reading_how_to_play_game").style = "display: block";
// }
var number_of_player = 1;
function chooseWeapon(event) {
    if(event.target.id === "playerTwoBnt") {
        number_of_player = 2;
    }    
    document.getElementById("mainContentTwo").style = "display: block;"
}

function player2Playing() {

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
    }
    else{
        computer = "X";
    }
    chooseToPlay();
}

var select_checked_boxes = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var click = document.querySelectorAll(".item");

function player1(event) { 
    tracker++;
    if(winningStage() !== "win") {
        if(event.target.innerHTML === "") {
            event.target.innerHTML = human;
            select_checked_boxes.splice(event.target,1);
            if(winningStage() != "win" && number_of_player === 1) {
                computerRanNum();
            }
            else {
                    if(tracker % 2 === 0) {
                        event.target.innerHTML = computer;
                        winningStage();
                    }
                }
            }
        }

    else{
        gameWinnerOrLoser.innerHTML = "Game already won";
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
    }
    
}

function computerRanNum() {
    var randomNumber = Math.floor(Math.random() * 9);
    var checking_select_boxs;
    if(click[randomNumber].innerHTML === "") {
         click[randomNumber].innerHTML = computer;
         checking_select_boxs = select_checked_boxes.indexOf(click);
        select_checked_boxes.splice(checking_select_boxs,1);
    }

    else {

        if(select_checked_boxes.length > 0) {
            computerRanNum();
           
        }
    }
    winningStage();
}

function play_again_text_btn() {
    for(var i = 0; i < click.length; i++) {
       click[i].innerHTML = "";
        gameWinnerOrLoser.innerHTML = "";
        select_checked_boxes = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    }
}

function keepingTrackOfScore() {
    document.getElementById("playerOneScore").style = " margin-left: 5%; color: white;"
    document.getElementById("computerScore").style = " margin-left: 5%; color: white;"
}

var human_score_count = document.getElementById("human_score");
var computer_score_count = document.getElementById("computer_score");

function winningStage() {
    // Human Wining Statement Block;
    if (click[0].innerHTML === human && click[1].innerHTML === human && click[2].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        human_score_keeping++;
        human_score_count.innerHTML = human_score_keeping;
        return "win";
    }

    else if(click[3].innerHTML === human && click[4].innerHTML === human && click[5].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        human_score_keeping++;
        human_score_count.innerHTML = human_score_keeping;
        return "win"
    }

    else if(click[6].innerHTML === human && click[7].innerHTML === human && click[8].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN";
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        human_score_keeping++;
        human_score_count.innerHTML = human_score_keeping;
        return "win"
    }

    else if(click[0].innerHTML === human && click[3].innerHTML === human && click[6].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        human_score_keeping++;
        human_score_count.innerHTML = human_score_keeping;
        return "win"
    }

    else if(click[1].innerHTML === human && click[4].innerHTML === human && click[7].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        human_score_keeping++;
        human_score_count.innerHTML = human_score_keeping;
        return "win"
    }

    else if(click[2].innerHTML === human && click[5].innerHTML === human && click[8].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        human_score_keeping++;
        human_score_count.innerHTML = human_score_keeping;
        return "win"
    }
    else if(click[2].innerHTML === human && click[4].innerHTML === human && click[6].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        human_score_keeping++;
        human_score_count.innerHTML = human_score_keeping;
        return "win"
    }

     else if(click[0].innerHTML === human && click[4].innerHTML === human && click[8].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        human_score_keeping++;
        human_score_count.innerHTML = human_score_keeping;
        return "win"
    }

// Computer Wining Statement Block

    if(click[0].innerHTML === computer && click[1].innerHTML === computer && click[2].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        computer_score_keeping++;
        computer_score_count.innerHTML = computer_score_keeping;
        return "win"
    }

     else if(click[3].innerHTML === computer && click[4].innerHTML === computer && click[5].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        computer_score_keeping++;
        computer_score_count.innerHTML = computer_score_keeping;
        return "win"
    }

     else if(click[6].innerHTML === computer && click[7].innerHTML === computer && click[8].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        computer_score_keeping++;
        computer_score_count.innerHTML = computer_score_keeping;
        return "win"
    }

     else if(click[0].innerHTML === computer && click[3].innerHTML === computer && click[6].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        computer_score_keeping++;
        computer_score_count.innerHTML = computer_score_keeping;
        return "win"
    }

    else if(click[1].innerHTML === computer && click[4].innerHTML === computer && click[7].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        computer_score_keeping++;
        computer_score_count.innerHTML = computer_score_keeping;
        return "win"
    }

    else if(click[2].innerHTML === computer && click[5].innerHTML === computer && click[8].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        computer_score_keeping++;
        computer_score_count.innerHTML = computer_score_keeping;
        return "win"
    }

    else if(click[0].innerHTML === computer && click[4].innerHTML === computer && click[8].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        computer_score_keeping++;
        computer_score_count.innerHTML = computer_score_keeping;
        return "win"
    }

    else if(click[2].innerHTML === computer && click[4].innerHTML === computer && click[6].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        computer_score_keeping++;
        computer_score_count.innerHTML = computer_score_keeping;
        return "win"
    }else {
        var gameTie = 0;
        for(var i = 0; i < click.length; i++) {
            if(click[i].innerHTML != "") {
                gameTie += 1;
            }
        }
        if(gameTie === 9) {
            gameWinnerOrLoser.innerHTML ="Game Tie";
            gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 140%"
            keepingTrackOfScore()
            return;
        }
    }
  
}