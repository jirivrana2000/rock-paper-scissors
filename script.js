//this function return computer choice
function getComputerChoice() {
  let  myArray = [
    "rock",
    "paper",
    "scissors"
  ];
  let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  return randomItem;
}

//this function return winner of each round
function playRound(playerSelection, computerSelection) {
  switch (playerSelection, computerSelection) {
    case ("rock", "rock") :
      return ("Draw!");
      break;
    case ("rock", "paper") :
      return ("Lose!"), ++computerScore;
      break;
    case ("rock", "scissors") :
      return ("Win!"), ++playerScore;
      break;
    case ("paper", "rock") :
      return ("Win!"), ++playerScore;
      break;
    case ("paper", "paper") :
      return ("Draw!");
      break;
    case ("paper", "scissors") :
      return ("Lose!"), ++computerScore;
      break;
    case ("scissors", "rock") :
      return ("Lose!"), ++computerScore;
      break;
    case ("scissors", "paper") :
      return ("Win!"), ++playerScore;
      break;
    case ("scissors", "scissors") :
      return ("Draw!");
      break; 
  }
}

//this part defined variables
let playerScore = 0;
let computerScore = 0;

//this function play 5 round of game and print result in console
function game() {
  playRound()
  for (let i = 0; i < 5; i++) {
    const playerSelection = window.prompt("write your choice!","");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (i = 5 && playerScore > computerScore) {
    console.log("Congratulation You win!");
  } else if (i = 5 && playerScore < computerScore) {
    console.log("You lose, try it again!");
  } else if (i = 5 && playerScore === computerScore) {
    console.log("I's draw, try it again!");
  } else (i = 5) 
    console.log("Game ower!")
}

