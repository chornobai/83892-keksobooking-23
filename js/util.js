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

// Отрисовка опций жилья для обьявления
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

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}


export { getrandomNumber, getnumberFloat, randomArrayLenght, getRandomArrayElement,renderImages, renderFeature, isEscEvent, debounce};

