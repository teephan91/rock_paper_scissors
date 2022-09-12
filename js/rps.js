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
        return (computerSelection == "Scissors") ? roundResult.textContent = win
        : (computerSelection == "Paper") ? roundResult.textContent = lose
        : roundResult.textContent = tie;
    } else if (playerSelection.toLowerCase() == "paper") {
        return (computerSelection == "Rock") ? roundResult.textContent = win
        : (computerSelection == "Scissors") ? roundResult.textContent = lose
        : roundResult.textContent = tie;
    } else if (playerSelection.toLowerCase() == "scissors") {
        return (computerSelection == "Paper") ? roundResult.textContent = win
        : (computerSelection == "Rock") ? roundResult.textContent = lose
        : roundResult.textContent = tie;
    }
}

const container = document.querySelector('.container');

const playerAlert = document.createElement('div');
container.appendChild(playerAlert);

const computerAlert = document.createElement('div');
container.appendChild(computerAlert);

const roundResult = document.createElement('div');
container.appendChild(roundResult);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => {
    const playerSelection = button.textContent;
    playerAlert.textContent = `You picked ${playerSelection}`;
    
    const computerSelection = getComputerChoice();
    computerAlert.textContent = `Computer picked ${computerSelection}`;

    playRound(playerSelection,computerSelection);
});
});

// function playGame() {  
//     let playerResult = 0;
//     let computerResult = 0;

//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Choose between Rock, Paper, or Scissors!");
//         const computerSelection = getComputerChoice();
//         const roundResult = playRound(playerSelection, computerSelection);

//         alert(roundResult);
        
//         if (roundResult.includes("You won!")) {
//             playerResult++;
//         } else if (roundResult.includes("You lost!")) {
//             computerResult++;
//         } else if (roundResult.includes("It's a tie!")) {
//             playerResult += 0;
//             computerResult += 0;
//             i--;
//         }

//         if (playerResult == 3) {  
//             return alert("You won the game!");
//             break;
//         }

//         if (computerResult == 3) { 
//             return alert("You lost the game!");
//             break;
//         }
//     }
// }

// playGame();