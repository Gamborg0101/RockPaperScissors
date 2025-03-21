let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

let button = document.getElementById("buttons");

button.addEventListener("click", function (e) {
  let humanClick = e.target.value;
  playSingleRound(humanClick, getComputerChoice());
});

let getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
};

function playSingleRound(humanChoice, computerChoice) {
  let winnerPlacement = document.querySelector(".winner");
  winnerPlacement.classList.add("winnerplacement");
  winnerPlacement.textContent = "";

  let humanWinsDiv = document.createElement("div");
  humanWinsDiv.classList.add("humanwinsdiv");

  if (humanScore == 5) {
    winnerAnnouncement(
      `Human wins! <br> Humanscore: ${humanScore} <br> Computerscore: ${computerScore} <br> Congrats! <br>`
    );
    return;
  } else if (computerScore == 5) {
    winnerAnnouncement(
      `Computer wins! <br> Humanscore: ${humanScore} <br> Computerscore: ${computerScore} <br> Congrats! <br>`
    );
    return;
  }

  if (humanChoice == computerChoice) {
    humanWinsDiv.innerHTML = `It's a tie! <br> HumanScore: ${humanScore} <br> Computerscore: ${computerScore}`;
    winnerPlacement.appendChild(humanWinsDiv);
    return;
  }

  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    humanWinsDiv.innerHTML = `Human wins! <br> HumanScore: ${humanScore} <br> Computerscore: ${computerScore}`;
    winnerPlacement.appendChild(humanWinsDiv);
    return;
  }

  computerScore++;
  humanWinsDiv.innerHTML = `Computer wins! <br> HumanScore: ${humanScore} <br> Computerscore: ${computerScore}`;
  winnerPlacement.appendChild(humanWinsDiv);
  return;

  function winnerAnnouncement(message) {
    let messageDiv = document.createElement("h1");
    messageDiv.classList.add("winnerdiv");
    messageDiv.innerHTML = message;

    winnerPlacement.appendChild(messageDiv);
    winnerPlacement.style.display = "flex";
    winnerPlacement.style.flexDirection = "column";
  }
}
