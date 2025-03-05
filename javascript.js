let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
};

let getHumanChoice = () => {
  let userChoice = prompt("Choose between rock, papers or scissors");
  let userChoiceTrimmed = userChoice.trim().toLowerCase();

  if (userChoiceTrimmed == "") {
    console.log("You need to enter something");
    return null;
  }
  for (let choice of choices) {
    if (userChoiceTrimmed == choice) {
      return userChoiceTrimmed;
    }
  }
  console.log("Invaild input");
  return null;
};

function playSingleRound(humanChoice, computerChoice) {
  let humanWinner = false;
  let computerWinner = false;

  if (humanChoice == computerChoice) {
    return "Its a tie!";
  }

  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanWinner = true;
    return "Human wins!";
  }
  computerWinner = true;
  return "Computer wins!";
}

for (let n = 1; n <= 5; n++) {
  let singleRound = playSingleRound(getHumanChoice(), getComputerChoice());


  if (humanWinner) {
    humanScore++;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
  } else if (computerWinner) {
    computerScore++;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
  }
  if (n == 5) {
    console.log(
      `Roundes are finished!\n Computer score: ${computerScore}\n Human score: ${humanScore}`
    );
  }
}
