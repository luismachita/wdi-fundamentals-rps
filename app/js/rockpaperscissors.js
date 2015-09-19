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
    } else  {
        getInput();
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
        return randomPlay();
    }
}

// This function should either give us back 'player', 'computer', or 'tie'.
// The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
// Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.

function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        console.log("This round is a tie!");
        return 'tie';  
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        console.log("Player wins this round!");
        return 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
            console.log("Player wins this round!");
            return 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {       
            console.log("Player wins this round!");
            return 'player';
    } else {
        console.log("Computer wins this round!");
        return 'computer';
    }
}
// This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0, computerWins = 0, winner = getWinner(); 
    if (winner === 'player') {
        while (playerWins < 5) {
            playerWins++;
            console.log("Player wins this round.");
            break;
        }
    } else if (winner === 'computer') {
        while (computerWins < 5) {
            computerWins++;
            console.log("Computer wins this round.")
            break;
        }
    } if (playerWins === 5) {
        console.log("Player wins this game!");
        console.log("New Game starts");
        getInput();
    } else if (computerWins === 5) {
        console.log("Computer wins this game!");
        console.log("New Game starts");
        getInput();
    }

    
       console.log("Score: " + playerWins + " player wins, " + computerWins + " computer wins");
    return [playerWins, computerWins];
    }

    
// After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
// For example,console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
//  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
 
