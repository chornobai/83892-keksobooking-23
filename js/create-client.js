import { getrandomNumber, getnumberFloat, randomArrayLenght, getRandomArrayElement } from './util.js';
import {AVATAR,TITLE,PRICEMIN,PRICEMAX,GUESTMIN,GUESTMAX,ROOMMIN,ROOMMAX,TYPE,CHECKIN,CHECKOUT,FEATURES,DESCRIPTION,PHOTOS} from './data.js';
const CLIENT_COUNT = 10;
const createClient = () => {
  const locationX = getnumberFloat(35.65000, 35.70000, 5);
  const locationY = getnumberFloat(139.00000, 139.80000, 5);
  return {
    author: {
      avatar: getRandomArrayElement(AVATAR),
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${locationX} ${locationY}`,
      price: getrandomNumber(PRICEMIN, PRICEMAX),
      type: getRandomArrayElement(TYPE),
      rooms: getrandomNumber(ROOMMIN, ROOMMAX),
      guests: getrandomNumber(GUESTMIN, GUESTMAX),
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

const createClients=()=> new Array(CLIENT_COUNT).fill(null).map(() => createClient());
export { createClients,createClient};
