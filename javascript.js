let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

let getHumanChoice = () => {
  let userChoice = prompt("Choose between rock, papers or scissors");
  return userChoice;
};

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  //Higher order functions
  let playRound = (getHumanChoice, getComputerChoice) => {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice();

    for (let n = 1; n <= 5; n++) {
      if (humanChoice == "") {
        console.log("You need to enter something");
      } else if (
        humanChoice !== "rock" &&
        humanChoice !== "paper" &&
        humanChoice !== "scissors"
      ) {
        return console.log("Invalid choice");
      }
    }

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
    playSingleRound(humanChoice, computerChoice);
  };
}

playGame(getHumanChoice, getComputerChoice);
