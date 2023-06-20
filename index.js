let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

while (roundCount < 5) {
  // player input
  let playerSelection = prompt(
    "Make your choice: rock, paper, or scissors"
  ).toLowerCase();

  // is player input valid
  while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    playerSelection = prompt("Make your choice: rock, paper, or scissors");
  }

  console.log("You chose:", playerSelection);

  // computer choice
  function getCompChoice() {
    let compSelection = Math.floor(Math.random() * 3);
    if (getCompChoice === 0) {
      return "rock";
    } else if (getCompChoice === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  console.log("Computer chose:", getCompChoice());

  // game round
  let playRound = (player, computer) => {
    if (player === computer) {
      playerScore++;
      computerScore++;
      return "Huh.. a tie.  Go again!";
    } else if (
      // player wins
      player === "rock" &&
      computer === "scissors"
    ) {
      playerScore++;
      return "You win!  Rock beats scissors.";
    } else if (player === "paper" && computer === "rock") {
      playerScore++;
      return "You win!  Paper beats rock.";
    } else if (player === "scissors" && computer === "paper") {
      playerScore++;
      return "You win!  Scissors beats paper.";
    } else if (
      // computer wins
      computer === "rock" &&
      player === "scissors"
    ) {
      computerScore++;
      return "You lose!  Rock beats scissors.";
    } else if (computer === "paper" && player === "rock") {
      computerScore++;
      return "You lose!  Paper beats rock.";
    } else if (computer === "scissors" && player === "paper") {
      computerScore++;
      return "You lose!  Scissors beats paper.";
    }
  };

  function endGame() {
    if (playerScore > computerScore) {
      return alert("GAME OVER!  You beat the computer.  Congrats!");
    } else if (playerScore < computerScore) {
      return alert("GAME OVER!  You lose.  Better luck next time!");
    } else {
      return alert("GAME OVER!  We have a tie.  Refresh to play again!");
    }
  }

  roundCount++;

  console.log(playRound(playerSelection, getCompChoice()));
  console.log("Your Score:", playerScore);
  console.log("Computer Score:", computerScore);
  console.log("Round:", roundCount);

  // game end
  if (roundCount === 5) {
    console.log(endGame());
  }
}
