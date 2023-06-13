let rockChoice = document.querySelector("#rock");
let paperChoice = document.querySelector("#paper");
let scissorsChoice = document.querySelector("#scissors");

let playerSelection = "";

console.log("Use the button to choose your selection");
rockChoice.addEventListener("click", function () {
  playerSelection = "rock";
  console.log(playerSelection);
  playRound(playerSelection);
});
paperChoice.addEventListener("click", function () {
  playerSelection = "paper";
  console.log(playerSelection);
  playRound(playerSelection);
});
scissorsChoice.addEventListener("click", function () {
  playerSelection = "scissors";
  console.log(playerSelection);
  playRound(playerSelection);
});

//Computer selection
let computerChoice = "";

const getComputerChoice = () => {
  randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    computerSelection = "rock";
  } else if (randNum === 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
};

let comp = 0;
let player = 0;

const playRound = (playerSelection, computerSelection) => {
  computerSelection = getComputerChoice();
  console.log(computerSelection, playerSelection);
  let result = "";

  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("It's a tie!");
    result = "It's  a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("paper beats rock");
    result = "paper beats rock";
    comp++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("rock beats scissors");
    result = "rock beats scissors";
    player++;
    //paper
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("paper beats rock");
    result = "paper beats rock";
    player++;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("It's a tie");
    result = "It's a tie";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("scissors beat papper");
    result = "scissors beat papper";
    comp++;
    //scissors
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("rock beats scissors");
    result = "rock beats scissors";
    comp++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("scissors beats paper");
    result = "scissors beats paper";
    player++;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("It's a tie!");
    result = "It's a tie!";
  }

  //who won round display
  let display = document.querySelector(".display");
  display.innerText = `You chose ${playerSelection}, computer chose ${computerSelection}`;
  let displayP = document.createElement("p");
  displayP.innerText = result;
  display.appendChild(displayP);

  //display score
  let score = document.querySelector(".score");
  let scoreBoard = `Player score: ${player}, Computer Score: ${comp}`;
  score.innerText = scoreBoard;

  if (player === 5) {
    display.innerText = `Congrats! Player Won!`;
  } else if (comp === 5) {
    display.innerText = `Uh oh, Computer took this round`;
  }
};

//reset logic?//play again
