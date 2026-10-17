
const results = document.querySelector("#results");
const score = document.querySelector("#score");


function displayScore() {
    score.textContent = "Player: " + humanScore + " Computer: " + computerScore;
}

function displayResults(message) {
    const line = document.createElement("p");
    line.textContent = message;
    results.appendChild(line);
}

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

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {

    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        displayResults("Try again!")
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        displayResults("You lose! Paper beats rock!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        displayResults("You lose! Scissors beats paper");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        displayResults("You lose! Rock beats scissors!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        displayResults("+1! Paper beats rock!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        displayResults("+1! Scissors beat paper");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        displayResults("+1! Rock beats scissors")
        humanScore++;
    }
    displayScore();

    if (humanScore >= 5) {
        displayResults("YOU WIN THE GAME!");
        showRestartButton();

    }

    else if (computerScore >= 5) {
        displayResults("YOU LOST THE GAME!");
        showRestartButton();

    }

}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const humanChoice = e.target.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
})

function showRestartButton() {
    const restartButton = document.createElement("button");
    restartButton.textContent = "RESTART THE GAME";
    restartButton.addEventListener("click", () => { location.reload(); });
    results.appendChild(restartButton);
}
