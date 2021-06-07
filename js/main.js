//  Подсмотренно в MDN

function randomNumber(min, max) {
  // Преобразование отрицательных чисел в положительные...
  min = Math.abs(min);
  max = Math.abs(max);

  if (max <= min) {
    max = min + 1;
  }
  return Math.trunc(Math.random() * (max - min + 1)) + min;
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

const locationX = numberFloat(35.65000, 35.70000, 5);
const locationY = numberFloat(139.00000, 139.80000, 5);

const priceRangeMin = 1;
const priceRangeMax = 300;

const guestRangeMin = 1;
const guestRangeMax = 10;

const roomRangeMin = 1;
const roomRangeMax = 5;

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const CHECKOUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTION = ['Квартира для айтишников с быстрым и стабильмы интернетом.', 'Квартира в историческом центре города', 'Дом в элитном районе'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const CLIENT_COUNT = 10;
const getRandomArrayElements = (elements) => elements[Math.floor(Math.random() * elements.length)];


const createClient = () => ({
  author :{
    avatar: getRandomArrayElements(AVATAR),
  },
  offer :{
    title: getRandomArrayElements(TITLE),
    address: `${locationX } ${locationY}`,
    price: randomNumber(priceRangeMin, priceRangeMax),
    type: getRandomArrayElements(TYPE),
    rooms: randomNumber(roomRangeMin, roomRangeMax),
    guests: randomNumber(guestRangeMin, guestRangeMax),
    checkin: getRandomArrayElements(CHECKIN),
    checkout: getRandomArrayElements(CHECKOUT),
    features: getRandomArrayElements(FEATURES),
    description: getRandomArrayElements(DESCRIPTION),
    photos: getRandomArrayElements(PHOTOS),
  },
  location:{
    lat: locationX,
    lng: locationY,
  },
});

const clientBooking = new Array(CLIENT_COUNT).fill(null).map(() => createClient());


clientBooking;


