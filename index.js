let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let roundCount = 0;

while (roundCount < 5) {
  // player input
  let playerSelection = prompt(
    "Make your choice: rock, paper, or scissors"
  ).toLocaleLowerCase();

  // is player input valid
  while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    playerSelection = prompt("Make your choice: rock, paper, or scissors");
  }

  console.log(playerSelection);

  // computer choice
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

  console.log(computerSelection);

  // game round
  let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
      roundWinner = "tie";
    }
    // player wins
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
      playerScore++;
      return "You win!  Rock beats scissors.";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
      playerScore++;
      return "You win!  Paper beats rock.";
    } else if (
      playerSelection === "SCISSORS" &&
      computerSelection === "PAPER"
    ) {
      playerScore++;
      return "You win!  Scissors beats paper.";
    }
    // computer wins
    else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
      computerScore++;
      return "You lose!  Rock beats scissors.";
    } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
      computerScore++;
      return "You lose!  Paper beats rock.";
    } else if (
      computerSelection === "SCISSORS" &&
      playerSelection === "PAPER"
    ) {
      computerScore++;
      return "You lose!  Scissors beats paper.";
    }
  };

  let endGame = () => {
    if (playerScore > computerScore) {
      return "GAME OVER!  You beat the computer.  Congrats!";
    } else if (playerScore < computerScore) {
      return "GAME OVER!  You lose.  Better luck next time!";
    } else if (playerScore === computerScore) {
      return "GAME OVER!  We have a tie.  Refresh to play again!";
    }
  };

  roundCount++;

  // game end
  if (roundCount === 5) {
    console.log(endGame());
  }
}
