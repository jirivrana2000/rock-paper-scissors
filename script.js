//this part defined variables
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

//this function return computer choice 
//A FUNGUJE DOBŘE
function getComputerChoice() {
  let  myArray = [
    "rock",
    "paper",
    "scissors"
  ];
  let computerSelection = myArray[Math.floor(Math.random()*myArray.length)];
  if (computerSelection === "rock") {
    console.log("pc rock")
  } else if (computerSelection === "paper") {
    console.log("pc paper")
  } else if (computerSelection === "scissors") {
    console.log("pc scissors")
  }
  return computerSelection;
}

//this function return winner of each round 
//A VRACÍ VŽDY JAKOBY BYL VSTUP ROCK A NEVÍM PROČ
function playRound(playerSelection, computerSelection) {
  switch (true) {
    case (playerSelection === "rock" && computerSelection === "rock") :
      console.log("Draw");
      break;
    case (playerSelection === "rock" && computerSelection === "paper") :
      console.log("Lose!");
      ++computerScore
      break;
    case (playerSelection === "rock" && computerSelection === "scissors") :
      console.log("Win!");
      ++playerScore
      break;
    case (playerSelection === "paper" && computerSelection === "rock") :
      console.log("Win!");
      ++playerScore
      break;
    case (playerSelection === "paper" && computerSelection === "paper") :
      console.log("Draw!");
      break;
    case (playerSelection === "paper" && computerSelection === "scissors") :
      console.log("Lose!");
      ++computerScore
      break;
    case (playerSelection === "scissors" && computerSelection === "rock") :
      console.log("Lose!");
      ++computerScore
      break;
    case (playerSelection === "scissors" && computerSelection === "paper")  :
      console.log("Win!");
      ++playerScore
      break;
    case (playerSelection === "scissors" && computerSelection === "scissors")  :
      console.log("Draw!");
      break; 
  }

  if (playerScore === 5) {
    alert("Congats, you win!!")
  } else if (computerScore === 5) {
    alert("You lose.")
  }

  let displayPlayerScore = document.querySelector("#displayPlayerScore").innerHTML = `Score: ${playerScore}`;
  let displayPCScore = document.querySelector("#displayPCScore").innerHTML = `Score: ${computerScore}`; 
   /*let realPlayerScore = document.createElement("div")
  realPlayerScore.classList.add("realPlayerScore");
  realPlayerScore.innerHTML = `<p>${playerScore}</p>`;


  
  let realPlayerScore = document.createElement("div")
  realPlayerScore.classList.add("realPlayerScore");
  realPlayerScore.textContent = `${playerScore}`

  displayPlayerScore.appendChild(realPlayerScore);
  */
}



//this part return player selection after click
//TLAČÍTKA FUNGUJÍ SPRÁVNĚ, TĚŽKO ŘÍCT JESTLI VRACÍ TO CO MÁ
function rockChoice() {
  playRound("rock", getComputerChoice());
}
function paperChoice() {
  playRound("paper", getComputerChoice());
}
function scissorsChoice() {
  playRound("scissors", getComputerChoice());
}


