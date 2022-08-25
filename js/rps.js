function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    let randomArrayElement = Math.floor(Math.random() * computerChoice.length);
    let randomComputerChoice = computerChoice[randomArrayElement];
    return randomComputerChoice;
}
