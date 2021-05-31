// // Подсмотренно в MDN

function randomNumber(min, max) {
  // Преобразование отрицательных чисел в положительные...
  min = Math.abs(min);
  max = Math.abs(max);

  if (max <= min) {
    max = min + 1;

    return Math.trunc(Math.random() * (max - min + 1)) + min;
  }
}
randomNumber(2, 10);

function numberFloat (min, max, rounding) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (max <= min) {
    max = min + 1;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(rounding);
}
numberFloat(2.2, 10.2, 3);


