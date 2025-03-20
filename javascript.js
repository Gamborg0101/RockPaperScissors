let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
};

function playSingleRound(humanChoice, computerChoice) {
  humanChoiceFormatted = humanChoice.toLowerCase();
  let winnerPlacement = document.querySelector(".winner");

  winnerPlacement.textContent = "";

  console.log(humanChoiceFormatted);

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
    let humanWinsDiv = document.createElement("div");
    humanWinsDiv.textContent = "Humans win!";
    winnerPlacement.appendChild(humanWinsDiv);

    return;
  }
  computerScore++;
  console.log("Computer wins!");
  return;
}

let button = document.getElementById("buttons");

button.addEventListener("click", function (e) {
  let humanClick = e.target.value;
  playSingleRound(humanClick, getComputerChoice()); //Skal ned under for loopet.
});

// for (let n = 1; n <= 5; n++) {

//   if (n == 5) {
//     console.log(
//       `Roundes are finished!\n Computer score: ${computerScore}\n Human score: ${humanScore}`
//     );
//   }
// }
