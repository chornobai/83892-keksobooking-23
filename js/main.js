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

function numberFloat(min, max, rounding) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (max <= min) {
    max = min + 1;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(rounding);
}
numberFloat(2.2, 10.2, 3);

// Объекты

const AVATAR = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];

const TITLE = 'Бронирование номера';

const ADDRESS = 'location.x, location.y';

const PRICE = (priceNumber) => {
  priceNumber = Math.abs(priceNumber);
  return Math.ceil(Math.random() * priceNumber);
};

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const ROOMS = (roomNumber) => {
  roomNumber = Math.abs(roomNumber);
  return Math.ceil(Math.random() * roomNumber);
};

const GUESTS = (guestNumber) => {
  guestNumber = Math.abs(guestNumber);
  return Math.ceil(Math.random() * guestNumber);
};


const CHECKIN = ['12:00', '13:00', '14:00'];

const CHECKOUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTION = 'Квартира для айтишников с быстрым и стабильмы интернетом, в парковой зоне. Квартира полностью укомплектована.';

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const LAT = (latFirst, latSecond) => {
  latFirst = Math.min(Math.abs(latFirst), Math.abs(latSecond));
  latSecond = Math.max(Math.abs(latFirst), Math.abs(latFirst));

  const latresult = Math.random() * (latSecond - latFirst) + latFirst;
  return latresult.toFixed(5);
};

const LNG = (lngFirst, lngSecond) => {
  lngFirst = Math.min(Math.abs(lngFirst), Math.abs(lngSecond));
  lngSecond = Math.max(Math.abs(lngFirst), Math.abs(lngSecond));

  const result = Math.random() * (lngSecond - lngFirst) + lngFirst;
  return result.toFixed(5);
};
const CLIENT_COUNT = 10;
const getRandomArrayElements = (elements) => elements[Math.floor(Math.random() * elements.length)];


const createClient = () => ({
  author: getRandomArrayElements(AVATAR),
  offer: `${TITLE} ${  ADDRESS  }, ${  PRICE(50)  } $, ${  getRandomArrayElements(TYPE)  }, ${  ROOMS(50)  } комнат, ${  GUESTS(20)  } гостей, ${  getRandomArrayElements(CHECKIN)  }, ${  getRandomArrayElements(CHECKOUT)  }, ${  getRandomArrayElements(FEATURES)  } ${  DESCRIPTION  } ${  getRandomArrayElements(PHOTOS)}`,
  location: `${LAT(35.65000, 35.70000)  }, ${  LNG(139.70000, 139.80000)}`,
});

const clientBooking = new Array(CLIENT_COUNT).fill(null).map(() => createClient());

clientBooking;
// console.log(clientBooking);
