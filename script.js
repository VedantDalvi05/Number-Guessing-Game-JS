import { generateOutput } from "./gameLogic.js";

// DOM SELETING
const heading = document.querySelector(".heading");
const attemptsHistory = document.querySelector(".attempts-history");
const attemptsParagraph = document.querySelector(".attempts");
const outputParagraph = document.querySelector(".output");
const userInputForm = document.querySelector(".user-input");
const userInputField = document.querySelector(".user-input input");
const restartBtn = document.querySelector(".restart");

////////////////////////////////////
// STATE VARIABLES
let state = {
  min: 1,
  max: 100,
  attempts: 0,
  isCorrect: null,
};

state.correctAnswer =
  Math.floor(Math.random() * (state.max - state.min + 1)) + state.min;
/////////////////////////////////////

// EVENT LISTENERS
userInputForm.addEventListener("submit", (e) => {
  // Prevent default reload of the page
  e.preventDefault();

  // Get user's number
  const formdata = new FormData(userInputForm);
  const userGuess = formdata.get("userNumber");

  // Generates output
  const output = generateOutput(userGuess, state);

  // Manipulates the DOM to show the output
  outputParagraph.textContent = output;
  attemptsParagraph.textContent = `Number of attempts: ${state.attempts}`;

  // This attempt is hadded to attempts history's list
  attemptsHistory.innerHTML += `<li>${userGuess}</li>`;

  if (state.isCorrect) {
    outputParagraph.classList.add("correct");
    outputParagraph.classList.remove("error");
  } else {
    outputParagraph.classList.remove("correct");
    outputParagraph.classList.add("error");
  }
  // Clear form
  userInputForm.reset();
  userInputField.focus();
});

// Resets state and restarts game
restartBtn.addEventListener("click", () => {
  state = {
    min: 1,
    max: 100,
    attempts: 0,
    isCorrect: null,
  };

  state.correctAnswer =
    Math.floor(Math.random() * (state.max - state.min + 1)) + state.min;

  // Clears view
  attemptsHistory.innerHTML = "";
  outputParagraph.textContent = "";
  attemptsParagraph.textContent = `Number of attempts: ${state.attempts}`;
});

// On initial render of the page
attemptsParagraph.textContent = `Number of attempts: ${state.attempts}`;
heading.textContent = `Guess any number between ${state.min} and ${state.max}`;

/* '------------------------------------._
'------------------------------------._
   .-------------------------------------'
    `-. _          _.-'
 _   /     `'----------------'      _
( )  |     C O D E   B Y   V 3 D N T T     | ( )
 `--./         _.-'        `--'
  .-'-------------------------------------`--'
`------------------------------------._
`------------------------------------._
*/
