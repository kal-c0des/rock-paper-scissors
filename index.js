let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

let mainGame = document.querySelector("main");

let messageText = document.querySelector("div.message p");
let resetText = document.querySelector("div.reset p");
let playerText = document.querySelector("div.player p");
let computerText = document.querySelector("div.computer p");
let roundText = document.querySelector("div.round-count p");

playerText.textContent = `Your Score: ${playerScore}`;
computerText.textContent = `Computer Score: ${computerScore}`;
roundText.textContent = `Round Count: ${roundCount}`;

let resetGame = () => {
  resetText.textContent = "Refresh to play again!";
};

const disableButton = () => {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
};

// player input
let playerSelection = "";
let rock = document.querySelector("button.btnRock");
let paper = document.querySelector("button.btnPaper");
let scissors = document.querySelector("button.btnScissors");

btnRock.addEventListener("click", () => {
  console.log("You chose: ", (playerSelection = "rock"));
  startGame();
});

btnPaper.addEventListener("click", () => {
  console.log("You chose: ", (playerSelection = "paper"));
  startGame();
});

btnScissors.addEventListener("click", () => {
  console.log("You chose: ", (playerSelection = "scissors"));
  startGame();
});

const startGame = () => {
  // computer choice
  let compSelection = Math.floor(Math.random() * 3);

  let getCompChoice = () => {
    if (compSelection === 0) {
      return "rock";
    } else if (compSelection === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  };

  console.log("Computer chose:", getCompChoice());

  // game round
  let playRound = (player, computer) => {
    if (player === computer) {
      playerScore++;
      computerScore++;
      messageText.textContent = "Huh.. a tie.  Go again!";
    } else if (
      // player wins
      player === "rock" &&
      computer === "scissors"
    ) {
      playerScore++;
      messageText.textContent = "You win!  Rock beats scissors.";
    } else if (player === "paper" && computer === "rock") {
      playerScore++;
      messageText.textContent = "You win!  Paper beats rock.";
    } else if (player === "scissors" && computer === "paper") {
      playerScore++;
      messageText.textContent = "You win!  Scissors beats paper.";
    } else if (
      // computer wins
      computer === "rock" &&
      player === "scissors"
    ) {
      computerScore++;
      messageText.textContent = "You lose!  Rock beats scissors.";
    } else if (computer === "paper" && player === "rock") {
      computerScore++;
      messageText.textContent = "You lose!  Paper beats rock.";
    } else if (computer === "scissors" && player === "paper") {
      computerScore++;
      messageText.textContent = "You lose!  Scissors beats paper.";
    }
  };

  let endGame = () => {
    if (playerScore > computerScore) {
      messageText.textContent = "GAME OVER!  You beat the computer.  Congrats!";
    } else if (playerScore < computerScore) {
      messageText.textContent = "GAME OVER!  You lose.  Better luck next time!";
    } else {
      messageText.textContent = "GAME OVER!  Nice try, but we have a tie.";
    }
    disableButton();
    resetGame();
  };

  playRound(playerSelection, getCompChoice());

  roundCount++;

  playerText.textContent = `Your Score: ${playerScore}`;
  computerText.textContent = `Computer Score: ${computerScore}`;
  roundText.textContent = `Round Count: ${roundCount}`;

  // game end
  if (playerScore === 5 || computerScore === 5) {
    return endGame();
  }
};
