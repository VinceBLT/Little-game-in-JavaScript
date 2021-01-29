'use strict';

// Select elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Start game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Roll dice
btnRoll.addEventListener('click', function () {
  // 1 Random dice roll
  const dice = Math.trunc(Math.random() * 6);

  // 2 Display dice picture
  diceEl.classList.remove('hidden');
  diceEl.src = `Images/dice-${dice}.png`;

  // 3 If roll 1 : change player
});
