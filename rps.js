// First we want to make a random selection for the 
// computer to take between rock, paper, or scissors
function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function standardize (string) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

function gameLogic (playerSelection, computerSelection) {
    
    playerSelection = standardize(playerSelection);
    computerSelection = standardize(computerSelection);

    let win = false;
    //tie case
    if(playerSelection == computerSelection) {
        return "It's a tie!"
    }

    //win cases
    if(playerSelection == "Rock" && computerSelection == "Scissors") {
        win = true;
    }
    if(playerSelection == "Paper" && computerSelection == "Rock") {
        win = true;
    }
    if(playerSelection == "Scissors" && computerSelection == "Paper") {
        win = true;
    }

    if (win) {
        return "You Win!!!"
    }

    return "You Lose :("
}

function game () {
    let game_count = 0;
    let p_wins = 0;
    let c_wins = 0;
    let winner = "Everybody :)"
    while(game_count < 5) {
        let round = gameLogic(playerSelection, computerSelection);
        console.log(round);

        if (round == "You Lose :(") {
            c_wins++;
        }
        if (round == "You Win!!!") {
            p_wins++;
        }
        game_count++;
    }

    if(p_wins > c_wins) {
        winner = "You!!!";
    }
    if(p_wins < c_wins) {
        winner = "Computer >:)";
    }
    return "The winner is: " + winner + " by " + (game_count - p_wins);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(game());
/*function gameRound (playerSelection) {

}*/