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

function renderFeature (array, container){
  container.innerHTML='';
  array.forEach((item) => {
    const newFeatureItem = document.createElement('li');
    newFeatureItem.classList.add('popup__feature', `popup__feature--${item}`);
    container.appendChild(newFeatureItem);
  });
}

export { getrandomNumber, getnumberFloat, randomArrayLenght, getRandomArrayElement,renderImages, renderFeature};

