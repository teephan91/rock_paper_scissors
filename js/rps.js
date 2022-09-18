const allButtons = document.querySelectorAll('button');

const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');
const container3 = document.querySelector('.container-3');
const container4 = document.querySelector('.container-4');
const container5 = document.querySelector('.container-5');

const body = document.querySelector('body');

const playerAlert = document.createElement('div');
container1.appendChild(playerAlert);

const computerAlert = document.createElement('div');
container2.appendChild(computerAlert);

const roundAlert = document.createElement('div');
container3.appendChild(roundAlert);

const playerResult = document.createElement('div');
container4.appendChild(playerResult);

const computerResult = document.createElement('div');
container5.appendChild(computerResult);

const finalResult = document.createElement('div');
body.appendChild(finalResult);

const reloadButton = document.createElement('button');

function playGame() { 
    allButtons.forEach((button) => {
        button.addEventListener('click', () => {            
            const playerSelection = button.textContent;
            playerAlert.textContent = `You picked: ${playerSelection}`;
    
            const computerSelection = getComputerChoice();
            computerAlert.textContent = `Computer picked: ${computerSelection}`;

            const roundResult = playRound(playerSelection,computerSelection);

            keepScore(roundResult);

            displayGameResult();
        });
    });
}

function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    let randomArrayElement = Math.floor(Math.random() * computerChoice.length);
    let randomComputerChoice = computerChoice[randomArrayElement];
    return randomComputerChoice;
}

function playRound(playerSelection, computerSelection) {  
    const win = "You won!";
    const lose = "You lost!";
    const tie = "It's a tie!";

    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                roundAlert.textContent = win;
                roundAlert.style.cssText = 'color: green; font-weight: 700;';
            } else if (computerSelection == "Paper") {
                roundAlert.textContent = lose;
                roundAlert.style.cssText = 'color: red; font-weight: 700;';
            } else {
                roundAlert.textContent = tie;
                roundAlert.style.cssText = 'color: blue; font-weight: 700;';
            }
        break;

        case "Paper":
            if (computerSelection == "Rock") {
                roundAlert.textContent = win;
                roundAlert.style.cssText = 'color: green; font-weight: 700;';
            } else if (computerSelection == "Scissors") {
                roundAlert.textContent = lose;
                roundAlert.style.cssText = 'color: red; font-weight: 700;';
            } else {
                roundAlert.textContent = tie;
                roundAlert.style.cssText = 'color: blue; font-weight: 700;';
            }
        break;

        case "Scissors":
            if (computerSelection == "Paper") {
                roundAlert.textContent = win;
                roundAlert.style.cssText = 'color: green; font-weight: 700;';
            } else if (computerSelection == "Rock") {
                roundAlert.textContent = lose;
                roundAlert.style.cssText = 'color: red; font-weight: 700;';
            } else {
                roundAlert.textContent = tie;
                roundAlert.style.cssText = 'color: blue; font-weight: 700;';
            } 
        break;      
    }

    return roundAlert.textContent;
}

let playerScore = 0;
let computerScore = 0;

function keepScore(roundResult) {
    if (roundResult.includes("You won!")) {
        playerScore++;
        playerResult.textContent = `Player: ${playerScore}`;
    } else if (roundResult.includes("You lost!")) {
        computerScore++;
        computerResult.textContent = `Computer: ${computerScore}`;
    } else if (roundResult.includes("It's a tie!")) {
        playerScore += 0;
        computerScore += 0;
    }     
}

function displayGameResult() {
    if (playerScore == 5) { 
        disableButtons();
        reloadPage();
        return finalResult.textContent = "You won the game!";
    } else if (computerScore== 5) {
        disableButtons();
        reloadPage();
        return finalResult.textContent = "You lost the game!";
    }
}

function disableButtons() {
    allButtons.forEach((button) => {
        button.disabled = true;
    });
}

function reloadPage() {
    body.appendChild(reloadButton);
    reloadButton.textContent = "Play again?"
    reloadButton.addEventListener('click', () => {
        window.location.reload();
    });
}
            
playGame();