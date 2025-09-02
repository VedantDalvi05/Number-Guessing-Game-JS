// HELPER FUNCTIONS
// Handles incorrect input
function genereateErrMsg(userGuess, state) {
  state.isCorrect = false;
  if (userGuess < state.min) {
    return `Please enter a number greater than ${state.min}`;
  }
  if (userGuess > state.max) {
    return `Please enter a number smaller than ${state.max}`;
  }
}

// Check if guess is correct or not
function isCorrectAnswer(userGuess, state) {
  if (state.correctAnswer < userGuess) {
    return `Too High, try again!`;
  }
  if (state.correctAnswer > userGuess) {
    return `Too Low, try again !`;
  }

  // if userGuess === correctAnswer
  state.isCorrect = true;
  return `Congratulations! The correct answer is ${state.correctAnswer} - It took you ${state.attempts} attempts to guess it correctly.`;
}

// Both functions get called, each one has 1 responsability
function generateOutput(userGuess, state) {
  // If userGuess is not valid
  if (userGuess < state.min || userGuess > state.max)
    return genereateErrMsg(userGuess, state);

  // if userGuess is valid
  state.attempts++;
  return isCorrectAnswer(userGuess, state);
}

export { generateOutput };
