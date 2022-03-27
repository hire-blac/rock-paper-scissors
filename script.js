// ROCK_PAPER_SCISSORS GAME

// declare constant
const game_choices = {1: "Rock", 2: "Paper", 3: "Scissors"};
let playerWins = 0;
let compWins = 0;

// computer makes a random hidden choice between rock, paper and scissors
function computerPlay() {
  choice = (Math.floor(Math.random() * 10) % 3) + 1;
  let computer_choice = game_choices[choice];
  return computer_choice;
}

// player makes their own choice
function playerPlay(){
  choice = parseInt(prompt("Enter an integer between 1 and 3: 1 for Rock or 2 for Paper or 3 for Scissors"));
  // check if choice is an integer
  if (Number.isInteger(choice)) {
    // check if number is between 1 and 3
    if (choice >= 1 && choice <= 3) {
      let player_choice = game_choices[choice];
      return player_choice;
    } else {
      playerPlay()
    }
  } else {
    playerPlay()
  }
}

// compare user's and computer's choice to determine winner
function checkWinner(computer_choice, player_choice) {
  let winner;

  // if player and computer make the same choice
  if (computer_choice === player_choice) {
    winner = "Draw";
  }
  // take computer_choice
  switch (computer_choice) {
    case "Rock":
      if (player_choice == "Paper") {
        playerWins += 1;
        winner = "Player wins. Paper beats Rock";
      } else {
        compWins += 1;
        winner = "Computer wins. Rock beats Scissors";
      }
      break;
  case "Paper":
    if (player_choice == "Scissors") {
      playerWins += 1;
      winner = "Player wins. Scissors beats Paper";
    } else {
      compWins += 1;
      winner = "Computer wins. Paper beats Rock";
    }
      break;
  case "Scissors":
    if (player_choice == "Rock") {
      playerWins += 1;
      winner = "Player wins. Rock beats Scissors";
    } else {
      compWins += 1;
      winner = "Computer wins. Scissors beats Paper";
    }
      break;
  }

  return winner;
}

// play a single game round
function playOneRound(){
  for (let count = 0; count < 5; count++) {
    let computer = computerPlay();
    let player = playerPlay();
    winn = checkWinner(computer, player);
    console.log(winn);
    console.log(`Player ${playerWins} wins`);
    console.log(`Computer ${compWins} wins`);
    }

  // Display winner for the round
  if (playerWins === compWins) { // check for draw
    console.log("Draw!! No winner for this round");
  } else if (playerWins > compWins) { //check if player won
    console.log("Player Wins this round");
  } else { // else computer won
    console.log("Computer Wins this round");
  }
  // ask user to play another round
  let playAgain = prompt("Press Y to play another round, or any other key to quit:");
  playAgain.toUpperCase()
  if(playAgain === 'Y'){
    playOneRound()
  } else {
    console.log("Game ended");
  }
}

// play one round
playOneRound();