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
  //game outcome checker: -1 for lose, 1 for win, 0 for tie
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      return -1;
    } else if (computerSelection == "Scissors") {
      return 1;
    } else {
      return 0;
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      return -1;
    } else if (computerSelection == "Rock") {
      return 1;
    } else {
      return 0;
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      return -1;
    } else if (computerSelection == "Paper") {
      return 1;
    } else {
      return 0;
    }
  }
}

//play a game of rounds
function game() {
  let computerWinCounter = 0,
    playerWinCounter = 0;
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt(
      `Please, input a "Rock", "Paper" or "Scissors" to play the game no.${
        i + 1
      }`
    );
    if (
      playerInput === undefined ||
      playerInput === null ||
      playerInput == ""
    ) {
      computerWinCounter = 99;
      break;
    }
    /* convert player's string to uppercase first letter
    to match with computer's string no matter what */
    playerInput = playerInput.toLowerCase();
    playerInput = playerInput[0].toUpperCase() + playerInput.slice(1);
    if (
      playerInput !== "Rock" &&
      playerInput !== "Paper" &&
      playerInput !== "Scissors"
    ) {
      computerWinCounter = 99;
      break;
    }

    let stringComputerChoice = getComputerChoice();

    console.log(
      `You chose ${playerInput} but... 
      PC went straight with the ${stringComputerChoice}! So...`
    );

    let outcomePlay = playRound(playerInput, stringComputerChoice);

    //message in case the player wins
    let winMessage = () =>
      `You win! ${playerInput} wins ${stringComputerChoice}`;
    //message in case the player loses
    let loseMessage = () =>
      `You lose! ${stringComputerChoice} wins ${playerInput}`;
    //message in case it's tie
    let tieMessage = () =>
      `It's a tie between ${stringComputerChoice} and ${playerInput}`;

    if (outcomePlay == 1) {
      console.log(winMessage());
      playerWinCounter++;
    } else if (outcomePlay == -1) {
      console.log(loseMessage());
      computerWinCounter++;
    } else console.log(tieMessage());
  }
  return playerWinCounter > computerWinCounter
    ? `You win the game! ${playerWinCounter} : ${computerWinCounter}`
    : playerWinCounter < computerWinCounter && computerWinCounter != 99
    ? `You lose the game! ${playerWinCounter} : ${computerWinCounter}`
    : playerWinCounter == computerWinCounter && computerWinCounter != 99
    ? `A solid tie! ${playerWinCounter} : ${computerWinCounter}`
    : `You broke the game`;
}

//main func
console.log(game());
