'use strict';

const randomNumber = function () {
  let secretNumber = Math.trunc(Math.random() * 20 + 1);
  return secretNumber;
};

let secretNumber = randomNumber();

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (value) {
  document.querySelector('.score').textContent = value;
};

const lostGame = function (score) {
  displayMessage('You Lost the Game');
  //Do
  setScore(0);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When no Guess Entered
  if (!guess) {
    displayMessage('⛔ No Number');
  }
  // When Guess equals to secretNumber
  else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // When Guess not equals to Secret Number
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('Too High!')
        : displayMessage('Too Low!');
      score--;
      setScore(score);
    } else {
      lostGame();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber();
  score = 20;

  displayMessage('Start guessing...');

  setScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
