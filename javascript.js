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
  if (humanChoice == computerChoice) {
    console.log("Its a tie!");
    return;
  }
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    console.log("Human wins!");
    return;
  }
  computerScore++;
  console.log("Computer wins!");
  return;
}

for (let n = 1; n <= 5; n++) {
  playSingleRound(getHumanChoice(), getComputerChoice());

  if (n == 5) {
    console.log(
      `Roundes are finished!\n Computer score: ${computerScore}\n Human score: ${humanScore}`
    );
  }
}
