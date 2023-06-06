const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
  }

const computerChoice = getComputerChoice();
console.log(computerChoice);