//randomly return rock, paper or scissors
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return "Rock";
  } else if (randomNum == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//play a round of the game
function playRound(playerSelection, computerSelection) {
  /* convert player's string to uppercase first letter
  to match with computer's string no matter what */
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

  //message in case the player wins
  let winMessage = () =>
    `You win! ${playerSelection} wins ${computerSelection}`;

  //message in case the player loses
  let loseMessage = () =>
    `You lose! ${computerSelection} wins ${playerSelection}`;

  //message in case it's tie
  let tieMessage = () => `It's tie!`;

  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      return loseMessage();
    } else if (computerSelection == "Scissors") {
      return winMessage();
    } else {
      return tieMessage();
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      return loseMessage();
    } else if (computerSelection == "Rock") {
      return winMessage();
    } else {
      return tieMessage();
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      return loseMessage();
    } else if (computerSelection == "Paper") {
      return winMessage();
    } else {
      return tieMessage();
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
