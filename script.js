// ROCK_PAPER_SCISSORS GAME

// declare constant
const game_choices = {1: "Rock", 2: "Paper", 3: "Scissors"};

// computer makes a random hidden choice between rock, paper and scissors
function computerPlay() {
  choice = (Math.floor(Math.random() * 10) % 3) + 1;
  let computer_choice = game_choices[choice];
  return computer_choice;
}

// player makes their own choice
function playerPlay(){
  choice = parseInt(prompt("Enter 1 for Rock or 2 for Paper or 3 for Scissors"));
  let player_choice = game_choices[choice];
  return player_choice;
}

// compare user's and computer's choice to determine winner
function checkWinner(computer_choice, player_choice) {
  let winner;

  // if player and computer make the same choice
  if (computer_choice === player_choice) {
    return "Draw";
  }
  // take computer_choice
  switch (computer_choice) {
    case "Rock":
      if (player_choice == "Paper") {
        winner = "Player wins. Paper beats Rock";
      } else {
        winner = "Computer wins. Rock beats Scissors";
      }
      break;
  case "Paper":
    if (player_choice == "Scissors") {
      winner = "Player wins. Scissors beats Paper";
    } else {
      winner = "Computer wins. Paper beats Rock";
    }
      break;
  case "Scissors":
    if (player_choice == "Rock") {
      winner = "Player wins. Rock beats Scissors";
    } else {
      winner = "Computer wins. Scissors beats Paper";
    }
      break;
  }

  return winner;
}

let computer = computerPlay();
let player = playerPlay();
winn = checkWinner(computer, player);
console.log(winn);
// display both computer and user choice show winner
// ask to replay