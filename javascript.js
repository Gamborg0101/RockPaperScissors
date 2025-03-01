let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

let getUserChoice = () => {
  let userChoice = prompt("Choose between rock, papers or scissors", null);
  return userChoice;
};

let playRound = (getUserChoice, getComputerChoice) => {
  let humanChoice = getUserChoice();
  let computerChoice = getComputerChoice();
};

console.log("ComputerChoice = " + playRound(getComputerChoice, getUserChoice));

//Placeholder for logic?
