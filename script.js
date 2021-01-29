'use strict';

// Select elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

// Start game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
