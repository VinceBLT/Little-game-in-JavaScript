'use strict';

// Select elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const dot0El = document.querySelector('.dot--0');
const dot1El = document.querySelector('.dot--1');
const name0El = document.querySelector('#name--0');
const name1El = document.querySelector('#name--1');
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  dot0El.classList.toggle('hidden');
  dot1El.classList.toggle('hidden');
  name0El.classList.toggle('name--inactive');
  name1El.classList.toggle('name--inactive');
};

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
    // Switch player
    switchPlayer();
  }
});

// Hold score
btnHold.addEventListener('click', function () {
  // Add current to player's score
  scores[activePlayer] += currentScore;
  document.querySelector(`current--${activePlayer}`).textContent =
    scores[activePlayer];
  // Check if score is >= 100

  // Switch next player
  switchPlayer();
});
