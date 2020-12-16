// var for displaying game winner or loser and draw
var gameWinnerOrLoser = document.getElementById("displayWinOrLoser");

//var for keeping track of human score
var human_score_keeping = 0;
//var for keeping track of computer score
var computer_score_keeping = 0;

var  gettingTheIndexOnClick = 0;
var human;
var computer;

var human_score_count = document.getElementById("human_score");
var computer_score_count = document.getElementById("computer_score");

var select_checked_boxes = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var click = document.querySelectorAll(".item");

var number_of_player = 1;
// displaying game instruction to both player
function instructionDisplaying(){
    document.getElementsByClassName(".readingHowToPlayGame").style = "display: block"
    document.getElementById("informationOnHowToPlay").style = "display: none"
    document.getElementById("close_hint").style = "display: block"
    document.getElementById("playerTwoBtn").style = "display: none"
    document.getElementById("playerOneBtn").style = "display: none"
}

//closing game instructiion fnx
function backToGame() {
    document.getElementById("close_hint").style = "display: none";
    document.getElementById("informationOnHowToPlay").style = "display: block"
    document.getElementById("playerTwoBtn").style = "display: block"
    document.getElementById("playerOneBtn").style = "display: block"
}

//fnx responsible for selecting two player
function chooseSingleOrTwoPlayer(event) {
    if(event.target.id === "playerTwoBtn") {
        number_of_player = 2;
    }    
    document.getElementById("mainContentTwo").style = "display: block;"
}

function backToHome() {
    document.getElementById("mainContent").style = "display: block;"
    document.getElementById("mainContentTwo").style = "display: none;"
    document.getElementsByClassName(".mainContentTwo").style = "display: block";
    document.getElementById("mainContentThree").style = "display: none;"
}

function selectCharactorToPlay() {
    document.getElementById("mainContentThree").style = "display: block;"
}
//selecting charactor either x or 0
function selectedCharactor(event) {
    human = document.getElementById(event.target.id).innerHTML;
    if(human === "X") {
        computer = "O"
    }
    else{
        computer = "X";
    }
    selectCharactorToPlay();
}
//human playing
function player1(event) { 
    gettingTheIndexOnClick++;
    if(event.target.innerHTML === "" && winningStage() !== "win") {
        event.target.innerHTML = human;
        console.log(event.target)
        winningStage();
        select_checked_boxes.splice(event.target,1);
        if(winningStage() !== "win") {
            if(number_of_player === 1) {
                computerPlaying();
                if(winningStage() === "win"){
                    computer_score_keeping++;
                    computer_score_count.innerHTML = computer_score_keeping;
                }
            }else {
                if( gettingTheIndexOnClick % 2 === 0) {
                    event.target.innerHTML = computer;
                    if(winningStage() === "win") {
                        computer_score_keeping++;
                        computer_score_count.innerHTML = computer_score_keeping;
                    }
                }
            }
        }
        else{
            human_score_keeping++;
            human_score_count.innerHTML = human_score_keeping;
        }  
    }  
}
//computer generating number and playing
function computerPlaying() {
    var generating_computer_number = Math.floor(Math.random() * 9);
    var checking_select_boxs;
    if(click[generating_computer_number].innerHTML === "") {
         click[generating_computer_number].innerHTML = computer;
        checking_select_boxs = select_checked_boxes.indexOf(click);
        select_checked_boxes.splice(checking_select_boxs,1);
    }

    else {

        if(select_checked_boxes.length > 0) {
            computerPlaying();
           
        }
    }
    winningStage();
}
//clearing all boxes when it is occupy
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

//winning possibility
function winningStage() {
    //Human Wining Statement Block;
    if (click[0].innerHTML === human && click[1].innerHTML === human && click[2].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win";
    }

    else if(click[3].innerHTML === human && click[4].innerHTML === human && click[5].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

    else if(click[6].innerHTML === human && click[7].innerHTML === human && click[8].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN";
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

    else if(click[0].innerHTML === human && click[3].innerHTML === human && click[6].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

    else if(click[1].innerHTML === human && click[4].innerHTML === human && click[7].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

    else if(click[2].innerHTML === human && click[5].innerHTML === human && click[8].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }
    else if(click[2].innerHTML === human && click[4].innerHTML === human && click[6].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

     else if(click[0].innerHTML === human && click[4].innerHTML === human && click[8].innerHTML === human) {
        gameWinnerOrLoser.innerHTML = "PLAYER1 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

// Computer Wining Statement Block

    if(click[0].innerHTML === computer && click[1].innerHTML === computer && click[2].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

     else if(click[3].innerHTML === computer && click[4].innerHTML === computer && click[5].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

     else if(click[6].innerHTML === computer && click[7].innerHTML === computer && click[8].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

     else if(click[0].innerHTML === computer && click[3].innerHTML === computer && click[6].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

    else if(click[1].innerHTML === computer && click[4].innerHTML === computer && click[7].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

    else if(click[2].innerHTML === computer && click[5].innerHTML === computer && click[8].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

    else if(click[0].innerHTML === computer && click[4].innerHTML === computer && click[8].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
        return "win"
    }

    else if(click[2].innerHTML === computer && click[4].innerHTML === computer && click[6].innerHTML === computer) {
        gameWinnerOrLoser.innerHTML = "PLAYER2 WIN"; 
        gameWinnerOrLoser.style = "color: white; margin-left: 10%; text-align: center; padding-top: 25px; font-size: 130%"
        keepingTrackOfScore()
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