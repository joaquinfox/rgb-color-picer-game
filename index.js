let gameLength = 6;
let colorSquares = document.querySelectorAll('.color_squares');
let colorArray = makeColorArray(gameLength);

// COLOR RELATED
function rand(n) {
  return Math.floor(Math.random() * n);
}

function makeColor() {
  let r = rand(256);
  let b = rand(256);
  let g = rand(256);
  return `rgb(${r}, ${g} ${b})`;
}

function makeColorArray(n) {
  let array = Array(n);
  for (let i = 0; i < array.length; i++) {
    array.push(makeColor());
  }
  return array;
}
