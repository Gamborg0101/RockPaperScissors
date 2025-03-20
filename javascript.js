let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
};

function playSingleRound(humanChoice, computerChoice) {
  humanChoiceFormatted = humanChoice.toLowerCase();
  let winnerPlacement = document.querySelector(".winner");
  let winnerDiv = document.createElement("h1");
  winnerPlacement.classList.add = "winnerDiv";
  winnerPlacement.textContent = "";

  //console.log(humanChoiceFormatted);

  if (humanScore == 5) {
    winnerDiv.innerHTML = `Human wins with ${humanScore}! Congrats!`;
    winnerPlacement.appendChild(winnerDiv);
  } else if (computerScore == 5) {
    winnerDiv.innerHTML = `Computer wins with ${humanScore}! Congrats!`;
    winnerPlacement.appendChild(winnerDiv);
  }
  if (humanChoice == computerChoice) {
    winnerPlacement.innerHTML = `It's a tie! <br> HumanScore: ${humanScore} <br> Computerscore: ${computerScore}`;
    winnerPlacement.appendChild(winnerDiv);
    return;
  }
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    //console.log("Human wins!");
    let humanWinsDiv = document.createElement("div");
    humanWinsDiv.innerHTML = `Human wins! <br> HumanScore: ${humanScore} <br> Computerscore: ${computerScore}`;
    winnerPlacement.appendChild(humanWinsDiv);

    return;
  }
  computerScore++;
  //console.log("Computer wins!");
  let humanWinsDiv = document.createElement("div");
  humanWinsDiv.innerHTML = `Computer wins! <br> HumanScore: ${humanScore} <br> Computerscore: ${computerScore}`;
  winnerPlacement.appendChild(humanWinsDiv);
  return;
}

let button = document.getElementById("buttons");

button.addEventListener("click", function (e) {
  let humanClick = e.target.value;
  playSingleRound(humanClick, getComputerChoice()); //Skal ned under for loopet.
});
