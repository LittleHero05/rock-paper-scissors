const options = ["rock", "paper", "scissors"];
const rock = document.querySelector('input[name="rock"]');
const paper = document.querySelector('input[name="paper"]');
const scissors = document.querySelector('input[name="scissors"]');
const outText = document.getElementById("outputText");
const pCounter = document.getElementById("pCounter");
const cCounter = document.getElementById("cCounter");
let playerSel = '';
let playerCount = 0;
let computerCount = 0;

function getId() {
    rock.addEventListener('click', function() {
        getPlayerChoice('rock');
        playGame();
    });

    paper.addEventListener('click', function() {
        getPlayerChoice('paper');
        playGame();
    });

    scissors.addEventListener('click', function() {
        getPlayerChoice('scissors');
        playGame();
    });
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
}

function getPlayerChoice(id) {
    if (id === 'rock') {
        playerSel = 'rock';
    } else if (id === 'paper') {
        playerSel = 'paper';
    } else {
        playerSel = 'scissors';
    }
}

function playRound(computerChoice, playerSelection) {
    if (computerChoice === playerSelection) {
        return "tie";
    } else if (
        (computerChoice === "rock" && playerSelection === "scissors") ||
        (computerChoice === "paper" && playerSelection === "rock") ||
        (computerChoice === "scissors" && playerSelection === "paper")
    ) {
        return "computer wins";
    } else {
        return "player wins";
    }
}

function playGame() {
    const playerSelection = playerSel;
    const computerChoice = getComputerChoice();

    const result = playRound(computerChoice, playerSelection);
    console.log(result);

    if (result === "player wins") {
        playerCount++;
        outText.textContent = "player wins";
    } else if (result === "computer wins") {
        computerCount++;
        outText.textContent = "computer wins";
    }

    pCounter.textContent = playerCount;
    cCounter.textContent = computerCount;

    console.log(`player score: ${playerCount}`);
    console.log(`computer score: ${computerCount}`);
}

getId();
