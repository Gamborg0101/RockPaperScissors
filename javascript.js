let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

let button = document.getElementById("buttons");
let winnerPlacement = document.querySelector(".winner");

button.addEventListener("click", function (e) {
  let humanClick = e.target.value;
  playSingleRound(humanClick, getComputerChoice());
});

let getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
};

function winnerAnnouncement(message) {
  let messageDiv = document.createElement("div");
  messageDiv.classList.add("winnerdiv");
  messageDiv.innerHTML = message;
  messageDiv.style.fontSize = "32px";
  messageDiv.style.fontWeight = "bold";

  winnerPlacement.appendChild(messageDiv);
  winnerPlacement.classList.add("winnerplacement");
  winnerPlacement.style.display = "flex";
  winnerPlacement.style.flexDirection = "column";
  return;
}

function playSingleRound(humanChoice, computerChoice) {
  winnerPlacement.textContent = "";

  let humanWinsDiv = document.createElement("div");
  humanWinsDiv.classList.add("humanwinsdiv");

  // if (humanScore == 5) {
  //   winnerAnnouncement(
  //     `Human wins! <br> Humanscore: ${humanScore} <br> Computerscore: ${computerScore} <br> Congrats! <br>`
  //   );
  //   return;
  // } else if (computerScore == 5) {
  //   winnerAnnouncement(
  //     `Computer wins! <br> Humanscore: ${humanScore} <br> Computerscore: ${computerScore} <br> Congrats! <br>`
  //   );
  //   return;
  // }

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
  } else {
    computerScore++;
  }

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
  humanWinsDiv.innerHTML = `HumanScore: ${humanScore} <br> Computerscore: ${computerScore}`;
  winnerPlacement.appendChild(humanWinsDiv);
}

/*
Optimeringsforslag: 
* Jeg kan lave en global pointcounter samt en maxScore == 5;
* Så ville jeg også kunne lave et pointcheck efter hver runde i starten af RunGame-funktionen der kører alle funktionerne. 
* Jeg kunne lave en runRound function, som kører spillogikken - bestemmer vinder og taber. Hvis computer vinder -> winner(arg1) && loser(arg1)
* Winner / loser funktion. Kunne gøre det mere læsbart.
* Jeg kunne lave winnerstyle og loserstyle til individuelle funktioner selv. Seperation of responsibility. 
* Generelt er der en masse variabelnavne som kunne optimeres for løsbarheden. 

*/
