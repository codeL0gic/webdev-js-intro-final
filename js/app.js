"use strict";
const input = document.getElementById("guess-input");
// console.log(input);

const guessMessage = document.getElementById("guess-message");
// console.log(guessMessage);

const currentGuess = document.getElementById("current-guess");
// console.log(currentGuess);

const computerGuessEl = document.getElementById("computer-guess");
// console.log(computerGuessEl);

const guessHistory = document.getElementById("guess-history");
// console.log(guessHistory);

const submitButton = document.getElementById("submit-btn");
// console.log(submitButton);

const restartButton = document.getElementById("restart-btn");
// console.log(restartButton);

// const WinCondition = currentGuess === computerGuess && guessHistory.length < 3;

// const LoseCondition =
//   guessHistory.length >= 3 && currentGuess !== computerGuess;

let computerGuess;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function evaluateGuess(guess) {
  if (guess === computerGuess) {
    guessMessage.textContent = "Congratulations! You guessed the number!";
  } else if (guess < computerGuess) {
    guessMessage.textContent = "Your guess is too low!";
  } else if (guess > computerGuess) {
    guessMessage.textContent = "Your guess is too high!";
  }
}

function updateGuessHistory(guess) {
  let li = document.createElement("li");
  li.textContent = guess;
  guessHistory.appendChild(li);
}

function reset() {
  input.value = "";
}

function restart() {
  computerGuess = generateRandomNumber();
  guessMessage.textContent = "Please enter a number between 1 and 100.";
  currentGuess.textContent = "-";
  computerGuessEl.textContent = "-";
  guessHistory.innerHTML = "";
  reset();
}

submitButton.addEventListener("click", function () {
  computerGuess = generateRandomNumber();
  let inputGuess = Number(input.value);
  //   console.log("the computer guess is", computerGuess);
  //   console.log("the input guess is", inputGuess);
  evaluateGuess(inputGuess);
  currentGuess.textContent = inputGuess;
  computerGuessEl.textContent = computerGuess;
  updateGuessHistory(inputGuess);
  reset();
});
