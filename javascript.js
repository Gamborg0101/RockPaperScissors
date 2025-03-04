let choices = ["rock", "paper", "scissors"];

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
  let humanScore = 0;
  let computerScore = 0;
  if (humanChoice == computerChoice) {
    console.log("Its a tie!");
  }

  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    return "Human wins!";
  }
  return "Computer wins!";
}

console.log(playSingleRound(getHumanChoice(), getComputerChoice()));

/* 
Iterer over funktionen
Resultatet fra funktionen skal være hvem der vinder. 
Derefter plus score - playGame () skal holde styr på scoren. 
Skal playGame tage et argument med antal runder, som også skal være en del af prompten. 
Ud fra score kan vi definer vinder. 
*/
