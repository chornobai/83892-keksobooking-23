import { randomNumber, numberFloat, randomArrayLenght, getRandomArrayElement } from './util.js';
import {AVATAR,TITLE,PRICEMIN,PRICEMAX,GUESTMIN,GUESTMAX,ROOMMIN,ROOMMAX,TYPE,CHECKIN,CHECKOUT,FEATURES,DESCRIPTION,PHOTOS} from './data.js';

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
export { createClient };
