// First we want to make a random selection for the 
// computer to take between rock, paper, or scissors
function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

const display = document.querySelector('div.display');
const resultimg = document.createElement('img');
const resultmsg = document.createElement('h2');


function standardize (string) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

function gameLogic (playerSelection, computerSelection) {
    
    playerSelection = standardize(playerSelection);
    computerSelection = standardize(computerSelection);

    let win = false;

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
        resultimg.src = "assets/player.jpg";
        resultmsg.textContent = "You Win!!!";
    }else if(playerSelection == computerSelection) {
        resultimg.src = "assets/tie.jpg";
        resultmsg.textContent = "It's A Tie";
    } else {
        resultimg.src = "assets/computer.png";
        resultmsg.textContent = "You Lose :(";
    }
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
    display.appendChild(resultimg);
    display.appendChild(resultmsg);
}

function game () {
    let game_count = 0;
    let p_wins = 0;
    let c_wins = 0;
    let winner = "Everybody :)"
    while(game_count < 5) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter Rock, Paper, or Scissors!");
        let round = gameLogic(playerSelection, computerSelection);
        console.log(round);
        alert(round);

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
    return alert("The winner is: " + winner);
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', e => console.log(gameLogic(e.target.classList.value, getComputerChoice())));
});

/*function gameRound (playerSelection) {
}*/