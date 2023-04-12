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

function choiceToEmoji(text) {
  if (text == "Rock") {
    return "✊";
  } else if (text == "Scissors") {
    return "✂️";
  } //else if it's paper then
  else return "🤚";
}

//play a game of rounds
function game() {
  let computerWinCounter = 0,
    playerWinCounter = 0;
  const mainMessage = document.querySelector(".main");

  const results = document.querySelector(".results");
  const gamePreview = document.createElement("div");
  const gameRoundMessage = document.createElement("div");
  gamePreview.setAttribute("style", "white-space: pre;");
  gameRoundMessage.setAttribute("style", "white-space: pre;");
  gameRoundMessage.classList.toggle('game-round')
  gamePreview.textContent = `Please, input a "Rock", "Paper" or "Scissors"\n`;
  const buttons = document.querySelectorAll("button");

  for (let element = 0; element < buttons.length; element++) {
    buttons[element].addEventListener("click", () => {
      var playerInput = buttons[element].className;

      var stringComputerChoice = getComputerChoice();

      var outcomePlay = playRound(playerInput, stringComputerChoice);

      playerInput = choiceToEmoji(playerInput);
      stringComputerChoice = choiceToEmoji(stringComputerChoice);

      gameRoundMessage.textContent = `You chose ${playerInput} but...\nPC went straight with the ${stringComputerChoice}! So...\n`;

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
        gameRoundMessage.textContent += winMessage();
        playerWinCounter++;
      } else if (outcomePlay == -1) {
        gameRoundMessage.textContent += loseMessage();
        computerWinCounter++;
      } else {
        gameRoundMessage.textContent += tieMessage();
      }
      gamePreview.textContent = `Player vs AI: ${playerWinCounter}:${computerWinCounter}`;
      if (playerWinCounter == 5) {
        gamePreview.textContent = `You won! ${playerWinCounter}:${computerWinCounter}`;
        (computerWinCounter = 0), (playerWinCounter = 0);
      } else if (computerWinCounter == 5) {
        gamePreview.textContent = `You lost! ${playerWinCounter}:${computerWinCounter}`;
        (computerWinCounter = 0), (playerWinCounter = 0);
      }
    });
  }
  mainMessage.append(gamePreview);
  results.append(gameRoundMessage);
}

//launch the main func
game();
