const gameLength = 6;
const colorSquares = document.querySelectorAll('.color_square');
const colorArray = makeColorArray(gameLength);
const targetColor = pickTargetColor();
const targetColorDisplay = document.querySelector('#target_color_display');

// reset();

for (let i = 0; i < colorSquares.length; i++) {
  colorSquares[i].style.backgroundColor = colorArray[i];
}
targetColorDisplay.innerText = targetColor;

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
