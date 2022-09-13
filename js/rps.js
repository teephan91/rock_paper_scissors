function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    let randomArrayElement = Math.floor(Math.random() * computerChoice.length);
    let randomComputerChoice = computerChoice[randomArrayElement];
    return randomComputerChoice;
}

function playRound(playerSelection, computerSelection) {  
    const win = `You won! ${playerSelection} beats ${computerSelection}.`;
    const lose = `You lost! ${computerSelection} beats ${playerSelection}.`;
    const tie = `It's a tie.`;

    if (playerSelection.toLowerCase() == "rock") {
        return (computerSelection == "Scissors") ? roundAlert.textContent = win
        : (computerSelection == "Paper") ? roundAlert.textContent = lose
        : roundAlert.textContent = tie;
    } else if (playerSelection.toLowerCase() == "paper") {
        return (computerSelection == "Rock") ? roundAlert.textContent = win
        : (computerSelection == "Scissors") ? roundAlert.textContent = lose
        : roundAlert.textContent = tie;
    } else if (playerSelection.toLowerCase() == "scissors") {
        return (computerSelection == "Paper") ? roundAlert.textContent = win
        : (computerSelection == "Rock") ? roundAlert.textContent = lose
        : roundAlert.textContent = tie;
    }
}

const container = document.querySelector('.container');

const playerAlert = document.createElement('div');
playerAlert.textContent = "You picked: ";
container.appendChild(playerAlert);

const computerAlert = document.createElement('div');
computerAlert.textContent = "Computer picked: ";
container.appendChild(computerAlert);

const roundAlert = document.createElement('div');
roundAlert.textContent = "Win, Lose or Tie?";
container.appendChild(roundAlert);

const playerResult = document.createElement('div');
playerResult.textContent = "Player: 0";
container.appendChild(playerResult);

const computerResult = document.createElement('div');
computerResult.textContent = "Computer: 0";
container.appendChild(computerResult);

const finalResult = document.createElement('div');
container.appendChild(finalResult);

function playGame() {  
    let playerCount = 0;
    let computerCount = 0;

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {            
            const playerSelection = button.textContent;
            playerAlert.textContent = `You picked: ${playerSelection}`;
    
            const computerSelection = getComputerChoice();
            computerAlert.textContent = `Computer picked: ${computerSelection}`;

            const roundResult = playRound(playerSelection,computerSelection);

            if (roundResult.includes("You won!")) {
                playerCount++;
                playerResult.textContent = `Player: ${playerCount}`;
            } else if (roundResult.includes("You lost!")) {
                computerCount++;
                computerResult.textContent = `Computer: ${computerCount}`;
            } else if (roundResult.includes("It's a tie!")) {
                playerCount += 0;
                computerCount += 0;
                i--;
            }         
        });
    });
}
            
playGame();