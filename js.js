let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);

    if (x === 0) {
        return "rock";
    }
    else if (x === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    let x = prompt("What's your choice?   ");
    return x;
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Try again!")
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat paper");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors")
        humanScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
