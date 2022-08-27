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
        return (computerSelection == "Scissors") ? win
        : (computerSelection == "Paper") ? lose
        : tie;
    } else if (playerSelection.toLowerCase() == "paper") {
        return (computerSelection == "Rock") ? win
        : (computerSelection == "Scissors") ? lose
        : tie;
    } else if (playerSelection.toLowerCase() == "scissors") {
        return (computerSelection == "Paper") ? win
        : (computerSelection == "Rock") ? lose
        : tie;
    }
}

const playerSelection = prompt("Choose between Rock, Paper, or Scissors!");
const computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));