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

//  Функция - устранение дребезга
function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


export { renderImages, renderFeature, isEscEvent, debounce};

