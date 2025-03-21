let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
};

function playSingleRound(humanChoice, computerChoice) {
  //Winnerplacement
  let winnerPlacement = document.querySelector(".winner");
  winnerPlacement.classList.add("winnerplacement");
  winnerPlacement.textContent = "";

  let messageDiv = document.createElement("h1");
  messageDiv.classList.add("winnerdiv");

  let humanWinsDiv = document.createElement("div");
  humanWinsDiv.classList.add("humanwinsdiv");

  winnerPlacement.style.display = 'flex';
  winnerPlacement.style.flexDirection = 'column'; 


  if (humanScore == 5) {
    messageDiv.innerHTML = `Human wins with ${humanScore}! Congrats! <br>`;
    winnerPlacement.appendChild(messageDiv);

  } else if (computerScore == 5) {
    messageDiv.innerHTML = `Computer wins with ${humanScore}! Congrats! <br>`;
    winnerPlacement.appendChild(messageDiv);
  }
  if (humanChoice == computerChoice) {
    winnerPlacement.innerHTML = `It's a tie! <br> HumanScore: ${humanScore} <br> Computerscore: ${computerScore}`;
    winnerPlacement.appendChild(messageDiv);
    return;
  }
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    //console.log("Human wins!");
    humanWinsDiv.innerHTML = `Human wins! <br> HumanScore: ${humanScore} <br> Computerscore: ${computerScore}`;
    winnerPlacement.appendChild(humanWinsDiv);

    return;
  }
  computerScore++;
  //console.log("Computer wins!");
  humanWinsDiv.innerHTML = `Computer wins! <br> HumanScore: ${humanScore} <br> Computerscore: ${computerScore}`;
  winnerPlacement.appendChild(humanWinsDiv);
  return;
}

let button = document.getElementById("buttons");

button.addEventListener("click", function (e) {
  let humanClick = e.target.value;
  playSingleRound(humanClick, getComputerChoice()); //Skal ned under for loopet.
});
