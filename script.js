'use strict';

// Select elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Start game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

// Roll dice
btnRoll.addEventListener('click', function () {
  // - Random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // - Display dice picture
  diceEl.classList.remove('hidden');
  diceEl.src = `Images/dice-${dice}.png`;

  // - Add score and if dice = 1 => change player
  if (dice !== 1) {
    // Add to score
    currentScore += dice;
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // Switch user
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
