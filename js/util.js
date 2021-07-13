// --- Целое случайное число
function getrandomNumber(min, max) {
  min = Math.abs(min);
  max = Math.abs(max);

  if (max <= min) {
    max = min + 2;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// --- Дробное случайное число
function getnumberFloat(min, max, rounding) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (max <= min) {
    max = min + 1;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(rounding);
}

//  Случайная длинна массива
function randomArrayLenght(arr) {
  return arr.slice(0, getrandomNumber(1, arr.length));
}

//  Случайный элемент из массива
const getRandomArrayElement = (elements) => elements[Math.floor(Math.random() * elements.length)];

//  Отрисовка фотографий в обьявлений
function renderImages(array, container) {
  container.innerHTML = '';
  array.forEach((item) => {
    const newImage = document.createElement('img');
    newImage.classList.add('popup__photo');
    newImage.src = item;
    newImage.alt = 'Фотография жилья';
    newImage.width = 45;
    newImage.height = 40;
    container.appendChild(newImage);
  });
}

// Отрисовка преимуществ
function renderFeature (array, container){
  container.innerHTML='';
  array.forEach((item) => {
    const newFeatureItem = document.createElement('li');
    newFeatureItem.classList.add('popup__feature', `popup__feature--${item}`);
    container.appendChild(newFeatureItem);
  });
}

//  Если нажат ESC
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

//  Функция устранение дребезга
function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


export { getrandomNumber, getnumberFloat, randomArrayLenght, getRandomArrayElement,renderImages, renderFeature, isEscEvent, debounce};

