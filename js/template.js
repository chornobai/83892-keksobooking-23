
import { createClients } from './create-client.js';
import { renderImages, renderFeature } from './util.js';
const testblock = document.querySelector('.map__canvas');
const templateCard = document.querySelector('#card').content.querySelector('.popup');
const clientCards = createClients();

const clientOrderType = {
  palace: 'Дворец',
  flat: 'Квартирка',
  house: 'Домик',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};


const clientCardsFragment = document.createDocumentFragment();

const renderCardTemplate = (cards) => {
  cards.forEach((offer) => {
    const clientElement = templateCard.cloneNode(true);
    clientElement.querySelector('.popup__avatar').src = offer.author.avatar;
    clientElement.querySelector('.popup__title').textContent = offer.offer.title;
    clientElement.querySelector('.popup__text--address').textContent = offer.offer.address;
    clientElement.querySelector('.popup__text--price').innerHTML = `${offer.offer.price} ₽/ночь`;
    clientElement.querySelector('.popup__type').textContent = clientOrderType[offer.offer.type];
    clientElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты ${offer.offer.guests} гостей`;
    clientElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin} выезд до ${offer.offer.checkout}`;

    const clientListFeatures = clientElement.querySelector('.popup__features');
    const feature = offer.offer.features;
    renderFeature(feature, clientListFeatures);

    clientElement.querySelector('.popup__description').textContent = offer.offer.description;
    const clientListPhotos = clientElement.querySelector('.popup__photos');
    const photoArr = offer.offer.photos;
    renderImages(photoArr, clientListPhotos);

    clientCardsFragment.appendChild(clientElement);

  });

  return testblock.appendChild(clientCardsFragment);

};

export { renderCardTemplate, clientCards };

// clientCards.forEach((offer) => {
//   const clientElement = templateCard.cloneNode(true);
//   clientElement.querySelector('.popup__avatar').src = offer.author.avatar;
//   clientElement.querySelector('.popup__title').textContent = offer.offer.title;
//   clientElement.querySelector('.popup__text--address').textContent = offer.offer.address;
//   clientElement.querySelector('.popup__text--price').innerHTML = `${offer.offer.price} ₽/ночь`;
//   clientElement.querySelector('.popup__type').textContent = clientOrderType[offer.offer.type];
//   clientElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты ${offer.offer.guests} гостей`;
//   clientElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin} выезд до ${offer.offer.checkout}`;

//   const clientListFeatures = clientElement.querySelector('.popup__features');
//   const feature = offer.offer.features;
//   renderFeature(feature, clientListFeatures);

//   clientElement.querySelector('.popup__description').textContent = offer.offer.description;
//   const clientListPhotos = clientElement.querySelector('.popup__photos');
//   const photoArr = offer.offer.photos;
//   renderImages(photoArr, clientListPhotos);

//   clientCardsFragment.appendChild(clientElement);

// });

// testblock.appendChild(clientCardsFragment);
