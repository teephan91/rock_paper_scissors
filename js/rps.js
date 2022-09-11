function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    let randomArrayElement = Math.floor(Math.random() * computerChoice.length);
    let randomComputerChoice = computerChoice[randomArrayElement];
    return randomComputerChoice;
}

function playRound(playerSelection, computerSelection) {
    const win = `You won! ${playerSelection} beats ${computerSelection}.`;
    const lose = `You lost! ${computerSelection} beats ${playerSelection}.`;
    const tie = `It's a tie! ${playerSelection} ties ${computerSelection}.`;

    if (playerSelection.toLowerCase() == "rock") {
        return (computerSelection == "Scissors") ? alert(win)
        : (computerSelection == "Paper") ? alert(lose)
        : alert(tie);
    } else if (playerSelection.toLowerCase() == "paper") {
        return (computerSelection == "Rock") ? alert(win)
        : (computerSelection == "Scissors") ? alert(lose)
        : alert(tie);
    } else if (playerSelection.toLowerCase() == "scissors") {
        return (computerSelection == "Paper") ? alert(win)
        : (computerSelection == "Rock") ? alert(lose)
        : alert(tie);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => {
    const playerSelection = button.textContent;
        alert(`You pick ${playerSelection}`);
    const computerSelection = getComputerChoice();
        alert(`The computer picks ${computerSelection}`);
    
    playRound(playerSelection, computerSelection);
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