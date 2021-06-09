//  Подсмотренно в MDN

function randomNumber(min, max) {
  // Преобразование отрицательных чисел в положительные...
  min = Math.abs(min);
  max = Math.abs(max);

  if (max <= min) {
    max = min + 2;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function numberFloat(min, max, rounding) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (max <= min) {
    max = min + 1;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(rounding);
}


// Объекты

const AVATAR = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];

const TITLE = ['Бронирование номера', 'Аренда квартиры', 'Аренда дома'];


const PRICEMIN = 1;
const PRICEMAX = 300;

const GUESTMIN = 1;
const GUESTMAX = 10;

const ROOMMIN = 1;
const ROOMMAX = 5;

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const CHECKOUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTION = ['Квартира для айтишников с быстрым и стабильмы интернетом.', 'Квартира в историческом центре города', 'Дом в элитном районе'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const CLIENT_COUNT = 10;
const getRandomArrayElement = (elements) => elements[Math.floor(Math.random() * elements.length)];

function randomArrayLenght(arr) {
  return arr.slice(0, randomNumber(1, arr.length));
}

const createClient = () => {
  const locationX = numberFloat(35.65000, 35.70000, 5);
  const locationY = numberFloat(139.00000, 139.80000, 5);
  return {
    author: {
      avatar: getRandomArrayElement(AVATAR),
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${locationX} ${locationY}`,
      price: randomNumber(PRICEMIN, PRICEMAX),
      type: getRandomArrayElement(TYPE),
      rooms: randomNumber(ROOMMIN, ROOMMAX),
      guests: randomNumber(GUESTMIN, GUESTMAX),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: randomArrayLenght(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: randomArrayLenght(PHOTOS),
    },
    location: {
      lat: locationX,
      lng: locationY,
    },
  };
};

const clientBooking = new Array(CLIENT_COUNT).fill(null).map(() => createClient());

clientBooking;
