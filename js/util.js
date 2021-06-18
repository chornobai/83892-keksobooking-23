function getrandomNumber(min, max) {
  min = Math.abs(min);
  max = Math.abs(max);

  if (max <= min) {
    max = min + 2;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getnumberFloat(min, max, rounding) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (max <= min) {
    max = min + 1;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(rounding);
}

function randomArrayLenght(arr) {
  return arr.slice(0, getrandomNumber(1, arr.length));
}

const getRandomArrayElement = (elements) => elements[Math.floor(Math.random() * elements.length)];


export { getrandomNumber, getnumberFloat, randomArrayLenght, getRandomArrayElement };

