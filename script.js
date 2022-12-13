//Player selection
let playerSelection = "";
const getPlayerSelection = () => {
  let playerSelection = prompt(
    'Please enter "Rock, Paper, or Scissors'
  ).toLowerCase();
  return playerSelection;
};

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

//save function returns
// computerSelection = getComputerChoice();
// playerSelection = getPlayerSelection();
// console.log(computerSelection, playerSelection);

//win logic---switch statement??
//counters
let comp = 0;
let player = 0;

const playRound = (playerSelection, computerSelection) => {
  computerSelection = getComputerChoice();
  playerSelection = getPlayerSelection();
  console.log(computerSelection, playerSelection);
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("It's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("paper beats rock");
    comp++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("rock beats scissors");
    player++;
    //paper
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("paper beats rock");
    player++;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("It's a tie");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("scissors beat papper");
    comp++;
    //scissors
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("rock beats scissors");
    comp++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("scissors beats paper");
    player++;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("It's a tie!");
  }
};

//while loop play again
//Insert counter up to 3, then ask if you want to play again and reset counter
// let gameOn = true;
// while (gameOn === true) {
//   playRound();
//   console.log(`Player wins ${player} times, Computer wins ${comp} times`);
//   let yahsNo = prompt("Play again? Y/N").toLowerCase();
//   if (yahsNo === "n") {
//     gameOn = false;
//   }
// }

for (let i = 0; i < 5; i++) {
  playRound();
  if (i === 4) {
    console.log(`Player wins ${player} times, Computer wins ${comp} times`);
  }
}
