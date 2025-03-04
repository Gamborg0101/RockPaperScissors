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

/*function playGame(humanChoice, computerChoice) {

  //Higher order functions

  function playSingleRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("Its a tie!");
      console.log("Round: " + n); //Could this not just be || statements inside on else if - and then if these are not true, then give the computer the point?
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("This is round:" + n + " \nThe human won this round");
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("This is round:" + n + " \nThe human won this round");
      humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("This is round:" + n + " \nThe human won this round");
      humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("This is round:" + n + " \nThe computer won this round");
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("This is round:" + n + " \nThe computer won this round");
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("This is round:" + n + " \nThe computer won this round");
      computerScore++;
    } else {
      console.log("Something went wrong!");
    }
    console.log("ComputerScore: " + computerScore);
    console.log("Human: " + humanScore);
  }
  console.log("Total score for the computer: " + computerScore);
  console.log("Total score for the human: " + humanScore);

  if (computerScore > humanScore) {
    console.log("The computer wins!");
  } else if (computerScore < humanScore) {
    console.log("The human wins!");
  }

  for (let n = 1; n <= 5; n++) {
    playSingleRound(humanChoice, computerChoice);
  }
}

playGame(getHumanChoice(), getComputerChoice());*/
