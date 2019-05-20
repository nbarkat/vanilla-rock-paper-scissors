/**
 * Caching the DOM: Storing information for future use. Increases
 * performance.
 */
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win! 🔥`;
}

function loss(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(user)} loses against ${convertToWord(computer)}. You lose! 😢`;
}

function draw(user, computer) {
    result_p.innerHTML = `${convertToWord(user)} ties against ${convertToWord(computer)}. It's a draw! 🙄`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        // Win
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        // Lose
        case "rp":
        case "ps":
        case "sr":
            loss(userChoice, computerChoice);
            break;
        // Equal
        case "rr":
        case "pp":
        case "sr":
            draw(userChoice, computerChoice);
            break;
    }

}

function main() {

    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();

