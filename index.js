let gameLength = 6;
const colorSquares = document.querySelectorAll('.color_square');
let colorArray = makeColorArray(gameLength);
let targetColor = pickTargetColor();
let targetColorDisplay = document.querySelector('#target_color_display');
let userMessage = document.querySelector('#user_message');
const resetButton = document.querySelector('#reset');
let header = document.querySelector('header');
let gameMode = document.querySelectorAll('.game_mode');

reset();

resetButton.addEventListener('click', function () {
  reset();
});

function reset() {
  colorArray = makeColorArray(gameLength);
  targetColor = pickTargetColor();
  header.style.backgroundColor = 'steelblue';
  userMessage.innerText = 'Pick a color.';
  resetButton.innerText = 'Change colors?';
  for (let i = 0; i < colorSquares.length; i++) {
    if (!colorArray[i]) {
      colorSquares[i].style.display = 'none';
    } else {
      colorSquares[i].style.display = 'inline';
      colorSquares[i].style.backgroundColor = colorArray[i];
    }
  }
  targetColorDisplay.innerText = targetColor;
}

// GAME LOGIC
for (let i = 0; i < colorSquares.length; i++) {
  colorSquares[i].addEventListener('click', () => {
    if (colorSquares[i].style.backgroundColor === targetColor) {
      userMessage.innerText = 'You got it!';
      header.style.backgroundColor = targetColor;
      resetButton.innerText = 'New game?';
    } else {
      userMessage.innerText = 'Try again';
    }
  });
}

// GAME MODE
for (let i = 0; i < gameMode.length; i++) {
  gameMode[i].addEventListener('click', () => {
    gameMode[i].innerText === 'EASY' ? (gameLength = 3) : (gameLength = 6);
    reset();
  });
}

// COLOR RELATED
function rand(n) {
  return Math.floor(Math.random() * n);
}

function makeColor() {
  let r = rand(256);
  let b = rand(256);
  let g = rand(256);
  return `rgb(${r}, ${g}, ${b})`;
}

function makeColorArray(n) {
  let array = Array(n);
  for (let i = 0; i < array.length; i++) {
    array[i] = makeColor();
  }
  return array;
}

function pickTargetColor() {
  return colorArray[rand(gameLength)];
}
