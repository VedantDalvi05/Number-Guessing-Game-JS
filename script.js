// --- Game State ---
const gameVars = {
  min: 1,
  max: 100,
  ans: null,
  attempts: 0,
  running: false,
}

// --- DOM Elements ---
const playBtn = document.querySelector("#playBtn")
const submitBtn = document.querySelector("#submitBtn")
const attemptsEl = document.querySelector("#attempts")
const messageEl = document.querySelector("#message")
const guessEl = document.querySelector("#guess")
const gameEl = document.querySelector("#game")

// --- Utility Functions ---
function generateAnswer() {
  const answer =
    Math.floor(Math.random() * (gameVars.max - gameVars.min + 1)) + gameVars.min
  console.log("Answer:", answer)
  return answer
}

function resetGame() {
  gameVars.ans = generateAnswer()
  gameVars.attempts = 0
  gameVars.running = false
  guessEl.value = ""
  attemptsEl.textContent = ""
  messageEl.textContent = ""
  guessEl.disabled = true
  gameEl.style.display = "none"
  playBtn.disabled = false
  playBtn.style.class = "inline-block"
}

// --- Game Logic ---
function startGame() {
  gameVars.ans = generateAnswer()
  gameVars.attempts = 0
  gameVars.running = true
  gameEl.style.display = "block"
  guessEl.disabled = false
  playBtn.disabled = true
  playBtn.style.display = "none"
  guessEl.style.display = "inline-block"
  guessEl.value = ""
  submitBtn.style.display = "flex"
  submitBtn.disabled = false
  attemptsEl.style.display = "block"
  attemptsEl.textContent = `Attempts: ${gameVars.attempts}`
  messageEl.textContent = `Guess any number between ${gameVars.min} and ${gameVars.max}`
}

function sendGuess() {
  if (!gameVars.running) return
  const guess = Number(guessEl.value)
  if (isNaN(guess)) {
    messageEl.textContent = "Please enter a valid number"
    return
  }
  if (guess < gameVars.min) {
    messageEl.textContent = `Please enter a number greater than ${gameVars.min}`
    return
  }
  if (guess > gameVars.max) {
    messageEl.textContent = `Please enter a number smaller than ${gameVars.max}`
    return
  }
  gameVars.attempts++
  attemptsEl.textContent = `Attempts: ${gameVars.attempts}`
  if (gameVars.ans < guess) {
    messageEl.textContent = "Too High, try again!"
    guessEl.value = ""
  } else if (gameVars.ans > guess) {
    messageEl.textContent = "Too Low, try again!"
    guessEl.value = ""
  } else {
    messageEl.textContent = `Congratulations! The correct answer is ${gameVars.ans}. It took you ${gameVars.attempts} attempts.`
    gameVars.running = false
    guessEl.disabled = true
    guessEl.style.display = "none"
    submitBtn.disabled = true
    submitBtn.style.display = "none"
    attemptsEl.style.display = "none"
    playBtn.disabled = false
    playBtn.style.display = "inline-block"
  }
}

// --- Event Listeners ---
gameEl.addEventListener("submit", function (e) {
  e.preventDefault()
  sendGuess()
})

playBtn.addEventListener("click", startGame)

// --- Initial State ---
resetGame()

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

// Improved by @Rafacv23
