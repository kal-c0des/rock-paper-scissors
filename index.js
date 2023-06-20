let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

// game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  // player wins

  // computer wins
}
// player selection prompt and input

// computer random selection
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

// update score

const computerSelection = getComputerChoice();
