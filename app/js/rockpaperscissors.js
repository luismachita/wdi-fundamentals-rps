////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////



// If a move is given, your expression should evaluate to that move.
// If move is not specified / is null, your expression should run getInput()

function getPlayerMove(move) {
    if (move === 'scissors') {
        console.log("Player picks scissors.");
        return 'scissors';
    } else if (move === 'paper') {
        console.log("Player picks paper.");
        return 'paper';
    } else if (move === 'rock') {
        console.log("Player picks rock.");
        return 'rock';
    } else {
        move = getInput();
        return move;
    }
}
    // If a move is given, your expression should evaluate to that move.
    // If move is not specified / is null, your expression should run randomPlay()
function getComputerMove(move) {
    if (move === 'scissors') {
        console.log("Computer picks scissors.");
        return 'scissors';
    } else if (move === 'paper') {
        console.log("Computer picks paper.");
        return 'paper';
    } else if (move === 'rock') {
        console.log("Computer picks rock.");
        return 'rock';
    } else {
       move = randomPlay();
       return move;
    }
}

// This function should either give us back 'player', 'computer', or 'tie'.
// The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
// Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.

function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';  
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
            winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {       
            winner = 'player';
    } else {
        winner= 'computer';
    } 
        return winner;
}


// This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.



 function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
       var playerMove = getPlayerMove();
       var computerMove = getComputerMove();
       var winner = getWinner(playerMove, computerMove);

       console.log("Player played " + playerMove + " and Computer played " + computerMove + "!");

       if (winner === 'player') {
           console.log("Player won that round!");
           playerWins++;
       } else if (winner === 'computer') {
           console.log("Computer won that round!");
           computerWins++;
       } else {
           console.log("That round was a tie!");
       }

       console.log("The score is Player: " + playerWins + " to Computer: " + computerWins + "!");
    }
        if (playerWins > computerWins){
          console.log("Player won this game!");
        } else {
          console.log("Computer won this game!");
        }

        return [playerWins, computerWins];


}
    

// After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
// For example,console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
//  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
 
