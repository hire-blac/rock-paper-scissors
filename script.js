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


// compare user's and computer's choice to determine winner
function checkWinner(computer_choice, player_choice) {
  let winner;

  // if player and computer make the same choice
  if (computer_choice === player_choice) {
    winner = "Draw";
  } else {
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
  }

  return winner;
}


function roundWinner(playerWins, compWins) {
  let winner;
  // Display winner for the round
  if (playerWins === compWins) { // check for draw
    winner = "Draw!! No winner for this round";
  } else if (playerWins > compWins) { //check if player won
    winner = "Player Wins this round";
  } else { // else computer won
    winner = "Computer Wins this round";
  }

  return winner;
}

// list of button nodes
const Buttons = document.querySelectorAll('.choices');
// node to display player score
const playerScore = document.getElementById('player-score');
// node to display computer score
const computerScore = document.getElementById('computer-score');

// player and computer choice nodes
const playerChoiceNode = document.querySelector('#player-choice');
const computerChoiceNode = document.querySelector('#computer-choice');

// game count for a round
let gameCount = 0;


// game winner display node
const gameWinner = document.querySelector('.win-game');

// event listener to play another game
function playAgain() {
  //reload the web page
  location.reload();
}

// event listener to end game
function endGame(){
  Buttons.forEach(button => {
    button.style.display = "none"
  })
  document.querySelector('.end').style.display = "block"
  playerChoiceNode.textContent = '';
  computerChoiceNode.textContent = '';

  gameWinner.textContent = '';
  document.querySelector('.round-winner').style.display = "none";
}

// event listener fuction for when a button is clicked
Buttons.forEach(button => {
  button.addEventListener('click', (e) => {

    // assign button data value to player
    let playeChoice = button.dataset.value;

    // let player_choice = e.target.dataset['value'];
    let computeChoice = computerPlay();
    playerChoiceNode.textContent = playeChoice;
    computerChoiceNode.textContent = computeChoice;

    gameWinner.textContent = checkWinner(computeChoice, playeChoice);

    playerScore.textContent = playerWins;
    computerScore.textContent = compWins;

    // increment game count
    gameCount += 1;

    if (gameCount >= 5) {
      displayRoundWinner();
    }
  })
});

function displayRoundWinner(){
  Buttons.forEach(button => {
    button.style.display = "none"
  });
  const winnerMessage = document.getElementById('winner');
  winnerMessage.textContent = roundWinner(playerWins, compWins);
  document.querySelector('.round-winner').style.display = "block";
}