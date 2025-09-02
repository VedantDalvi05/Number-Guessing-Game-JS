// Number Guessing Game - DOM-based implementation
// Replaces window prompts with clean UI interaction

const min = 1;
const max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;
let gameActive = true;

// DOM Elements
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const resetButton = document.getElementById('reset-game');
const feedbackMessage = document.getElementById('feedback-message');
const attemptsCount = document.getElementById('attempts-count');

// Initialize game
function initializeGame() {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 0;
    gameActive = true;
    
    // Reset UI
    guessInput.value = '';
    guessInput.disabled = false;
    submitButton.disabled = false;
    feedbackMessage.textContent = 'Make your first guess!';
    feedbackMessage.className = '';
    attemptsCount.textContent = 'Attempts: 0';
    
    // Focus on input for better UX
    guessInput.focus();
}

// Display feedback message with appropriate styling
function displayFeedback(message, type = '') {
    feedbackMessage.textContent = message;
    feedbackMessage.className = type;
}

// Update attempts counter
function updateAttempts() {
    attemptsCount.textContent = `Attempts: ${attempts}`;
}

// Validate user input
function validateInput(guess) {
    if (isNaN(guess) || guess === '') {
        displayFeedback('Please enter a valid number!', 'error');
        return false;
    }
    
    if (guess < min) {
        displayFeedback(`Please enter a number greater than or equal to ${min}!`, 'warning');
        return false;
    }
    
    if (guess > max) {
        displayFeedback(`Please enter a number less than or equal to ${max}!`, 'warning');
        return false;
    }
    
    return true;
}

// Handle guess submission
function handleGuess() {
    if (!gameActive) return;
    
    const guess = parseInt(guessInput.value);
    
    // Validate input
    if (!validateInput(guess)) {
        guessInput.value = '';
        guessInput.focus();
        return;
    }
    
    // Increment attempts
    attempts++;
    updateAttempts();
    
    // Check guess
    if (guess === randomNumber) {
        // Correct guess!
        displayFeedback(`🎉 Congratulations! The answer is ${randomNumber}. You got it in ${attempts} attempt${attempts === 1 ? '' : 's'}!`, 'success');
        gameActive = false;
        guessInput.disabled = true;
        submitButton.disabled = true;
    } else if (guess < randomNumber) {
        displayFeedback('📈 Too low! Try a higher number.', 'warning');
    } else {
        displayFeedback('📉 Too high! Try a lower number.', 'warning');
    }
    
    // Clear input and refocus
    guessInput.value = '';
    if (gameActive) {
        guessInput.focus();
    }
}

// Event Listeners
submitButton.addEventListener('click', handleGuess);
resetButton.addEventListener('click', initializeGame);

// Allow Enter key to submit guess
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleGuess();
    }
});

// Prevent non-numeric input (except backspace, delete, arrow keys, etc.)
guessInput.addEventListener('input', function(event) {
    // Remove any non-numeric characters
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

// Original developer credit preserved
/* 
'------------------------------------._
'------------------------------------._
   .-------------------------------------'
    `-. _          _.-'
 _   /     `'----------------'      _
( )  |     C O D E   B Y   V 3 D N T T     | ( )
 `--./         _.-'        `--'
  .-'-------------------------------------`--'
`------------------------------------._
`------------------------------------._

Modified to use DOM elements instead of window prompts
*/
