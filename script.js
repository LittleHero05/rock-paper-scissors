const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
  }

function playRound(computerChoice, playerSelection){

    if (computerChoice == "rock") {
        if (playerSelection == "paper") {
            return "player wins";
        } else if (playerSelection == "scissors") {
            return "computer wins";
        } else {
            return "tie";
        }
    } else if (computerChoice == "paper") {
        if (playerSelection == "rock") {
            return "computer wins";
        } else if (playerSelection == "scissors") {
            return "player wins";
        } else {
            return "tie";
        }
    } else if (computerChoice == "scissors") {
        if (playerSelection == "paper") {
            return "computer wins";
        } else if (playerSelection == "rock") {
            return "player wins";
        } else {
            return "tie";
        }
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`round ${round}:`);

        const playerSelection = (prompt("")).toLowerCase();
        const computerChoice = getComputerChoice();

        const result = playRound(computerChoice, playerSelection);
        console.log(result);
        
        if (result === "player wins") {
            playerCount++;
        } else if (result === "computer wins") {
            computerCount++;
        }

        console.log(`player score: ${playerCount}`);
        console.log(`computer score: ${computerCount}`);
    }
}

game();

/** 
console.log(playerCount);
console.log(computerCount);
console.log(computerChoice);
console.log(playRound(computerChoice, playerSelection));*/