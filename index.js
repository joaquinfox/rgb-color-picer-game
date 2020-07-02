const gameLength = 6;
const colorSquares = document.querySelectorAll('.color_square');
let colorArray = makeColorArray(gameLength);
let targetColor = pickTargetColor();
let targetColorDisplay = document.querySelector('#target_color_display');
let userMessage = document.querySelector('#user_message');
const resetButton = document.querySelector('#reset');

reset();

resetButton.addEventListener('click', function () {
  reset();
});

function reset() {
  colorArray = makeColorArray(gameLength);
  targetColor = pickTargetColor();
  for (let i = 0; i < colorSquares.length; i++) {
    colorSquares[i].style.backgroundColor = colorArray[i];
  }
  targetColorDisplay.innerText = targetColor;
}

// GAME LOGIC
for (let i = 0; i < colorSquares.length; i++) {
  colorSquares[i].addEventListener('click', () => {
    if (colorSquares[i].style.backgroundColor === targetColor) {
      userMessage.innerText = 'You got it!';
      gameWin();
    } else {
      userMessage.innerText = 'Try again';
    }
  });
}

// Handle event gameWin
function gameWin() {}

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
