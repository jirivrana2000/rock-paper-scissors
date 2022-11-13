//this part defined variables
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
let roundWinner = "";

//this function return computer choice 
function getComputerChoice() {
  let  myArray = [
    "rock",
    "paper",
    "scissors"
  ];
  let computerSelection = myArray[Math.floor(Math.random()*myArray.length)];
  computerChoiceShine(computerSelection)
  return computerSelection;
}

//this function made computerSelection shine and remove shine prom computerSelection from last round
function computerChoiceShine(computerSelection) {

  let paperShine = document.querySelector('#PCPaper');
  let scissorsShine = document.querySelector('#PCScissors');
  let rockShine = document.querySelector("#PCRock"); 

  paperShine.classList.remove("computerPick");
  scissorsShine.classList.remove("computerPick");
  rockShine.classList.remove("computerPick");

  if (computerSelection === "rock") {
    console.log("pc rock")
    rockShine.classList.remove("li");
    rockShine.classList.add("computerPick");
  } else if (computerSelection === "paper") {
    console.log("pc paper")
    paperShine.classList.remove("li");
    paperShine.classList.add("computerPick");
  } else if (computerSelection === "scissors") {
    console.log("pc scissors")
    scissorsShine.classList.remove("li");
    scissorsShine.classList.add("computerPick");
  }
}

//this function return winner of each round, count and print score in HTML, print winner on the end
function playRound(playerSelection, computerSelection) {
  switch (true) {
    case (playerSelection === "rock" && computerSelection === "rock") :
      console.log("Draw");
      roundWinner = document.querySelector("#roundWinner").innerHTML = "it's Draw!";
      break;
    case (playerSelection === "rock" && computerSelection === "paper") :
      console.log("Lose!");
      ++computerScore
      roundWinner = document.querySelector("#roundWinner").innerHTML = "You Lose.";
      break;
    case (playerSelection === "rock" && computerSelection === "scissors") :
      console.log("Win!");
      ++playerScore
      roundWinner = document.querySelector("#roundWinner").innerHTML = "You Win!";
      break;
    case (playerSelection === "paper" && computerSelection === "rock") :
      console.log("Win!");
      ++playerScore
      roundWinner = document.querySelector("#roundWinner").innerHTML = "You Win!";
      break;
    case (playerSelection === "paper" && computerSelection === "paper") :
      console.log("Draw!");
      roundWinner = document.querySelector("#roundWinner").innerHTML = "it's Draw!";
      break;
    case (playerSelection === "paper" && computerSelection === "scissors") :
      console.log("Lose!");
      ++computerScore
      roundWinner = document.querySelector("#roundWinner").innerHTML = "You Lose.";
      break;
    case (playerSelection === "scissors" && computerSelection === "rock") :
      console.log("Lose!");
      ++computerScore
      roundWinner = document.querySelector("#roundWinner").innerHTML = "You Lose.";
      break;
    case (playerSelection === "scissors" && computerSelection === "paper")  :
      console.log("Win!");
      ++playerScore
      roundWinner = document.querySelector("#roundWinner").innerHTML = "You Win!";
      break;
    case (playerSelection === "scissors" && computerSelection === "scissors")  :
      console.log("Draw!");
      roundWinner = document.querySelector("#roundWinner").innerHTML = "it's Draw!";
      break; 
  }
  //this part of function end game with winner 
  if (playerScore === 5) {
    roundWinner = document.querySelector("#roundWinner").innerHTML = "You Win the game! Reload page for new game!";
  } else if (computerScore === 5) {
    roundWinner = document.querySelector("#roundWinner").innerHTML = "You Lose! Reload page for next try!";
  }
  //this part of function print score in HTML
  let displayPlayerScore = document.querySelector("#displayPlayerScore").innerHTML = `Score: ${playerScore}`;
  let displayPCScore = document.querySelector("#displayPCScore").innerHTML = `Score: ${computerScore}`; 
}

//this function return player selection after click
function rockChoice() {
  playRound("rock", getComputerChoice());
}
function paperChoice() {
  playRound("paper", getComputerChoice());
}
function scissorsChoice() {
  playRound("scissors", getComputerChoice());
}