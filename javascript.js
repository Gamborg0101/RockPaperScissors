let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

let getHumanChoice = () => {
  let userChoice = prompt("Choose between rock, papers or scissors");
  return userChoice;
};

let playRound = (getHumanChoice, getComputerChoice) => {
  let humanScore = 0;
  let computerScore = 0;
  let humanWins = "Human wins this round!";
  let computerWins = "Computer wins this round";
  //Higher order functions
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  
  if (humanChoice == "") {
    console.log("You need to enter something");
  } else if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    console.log("Invalid choice");
  }

  for (let n = 5; n <= 5; n++) {
    if (humanChoice == computerChoice) {
      return console.log("Its a tie!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log(humanWins);
      humanScore++;
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
      console.log(humanWins);
      humanScore++;
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("humanWins");
      humanScore++;
    } else {
      console.log(computerWins);
      computerScore++;
    }
    console.log("ComputerScore: " + computerScore);
    console.log("Human: " + humanScore);
  }
    
};

//console.log("ComputerChoice = " + playRound(getComputerChoice, getHumanChoice));

playRound(getHumanChoice, getComputerChoice);
