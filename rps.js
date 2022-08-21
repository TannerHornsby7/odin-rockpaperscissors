// First we want to make a random selection for the 
// computer to take between rock, paper, or scissors
function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

const display = document.querySelector('div.display');
const resultimg = document.createElement('img');
const resultmsg = document.createElement('h2');
const body = document.querySelector('body')
const buttons = document.querySelectorAll('button');
const buttondiv = document.querySelector('.buttons');



const score = document.querySelector('div.score');
const tallye = document.createElement('h2');
const gameovermsg = document.createElement('h2');

gameovermsg.textContent = "Game Over!";


let ptally = +score.textContent[0];
let ctally = +score.textContent[score.textContent.length - 1];
console.log(ptally);
console.log(ctally)

function gameOver(pwins, cwins) {
    if(pwins >= 5 || cwins >= 5) {
        while (buttondiv.firstChild) {
            buttondiv.removeChild(buttondiv.firstChild);
        }
        buttondiv.appendChild(gameovermsg);  
    }
}

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
        ptally++;
    }else if(playerSelection == computerSelection) {
        resultimg.src = "assets/tie.jpg";
        resultmsg.textContent = "It's A Tie";
    } else {
        resultimg.src = "assets/computer.png";
        resultmsg.textContent = "You Lose :(";
        ctally++;
    }
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
    while (score.firstChild) {
        score.removeChild(score.firstChild);
    }

    gameOver(ptally, ctally);

    tallye.textContent = ptally + " to " + ctally;
    score.appendChild(tallye);
    display.appendChild(resultimg);
    display.appendChild(resultmsg);
}

buttons.forEach(button => {
    button.addEventListener('click', e => console.log(gameLogic(e.target.classList.value, getComputerChoice())));
});

/*function gameRound (playerSelection) {
}*/