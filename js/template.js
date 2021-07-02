
import { createClients } from './create-client.js';
import { renderImages, renderFeature } from './util.js';
const testBlock = document.querySelector('.map__canvas');
const templateCard = document.querySelector('#card').content.querySelector('.popup');
const clientCards = createClients();

const clientOrderType = {
  palace: 'Дворец',
  flat: 'Квартирка',
  house: 'Домик',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};


// const clientCardsFragment = document.createDocumentFragment();


const createCard = (card) => {
  const clientElement = templateCard.cloneNode(true);
  clientElement.querySelector('.popup__avatar').src = card.author.avatar;
  clientElement.querySelector('.popup__title').textContent = card.offer.title;
  clientElement.querySelector('.popup__text--address').textContent = card.offer.address;
  clientElement.querySelector('.popup__text--price').innerHTML = `${card.offer.price} ₽/ночь`;
  clientElement.querySelector('.popup__type').textContent = clientOrderType[card.offer.type];
  clientElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты ${card.offer.guests} гостей`;
  clientElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin} выезд до ${card.offer.checkout}`;

  const clientListFeatures = clientElement.querySelector('.popup__features');
  const feature = card.offer.features;

  if (!feature) {
    clientListFeatures.remove();
  } else {
    renderFeature(feature, clientListFeatures);
  }


  if (!card.offer.description) {
    clientElement.querySelector('.popup__description').remove();
  } else {
    clientElement.querySelector('.popup__description').textContent = card.offer.description;
  }


  const clientListPhotos = clientElement.querySelector('.popup__photos');
  const photoArr = card.offer.photos;

  if (!photoArr) {
    clientListPhotos.remove();
  } else {
    renderImages(photoArr, clientListPhotos);
  }

  return clientElement;
};

const renderCard = (container, card) => container.appendChild(createCard(card));

const renderCards = (array) => {
  array.forEach((item) => {
    createCard(item);
    renderCard(testBlock, item);
  });

};


export { renderCards, clientCards, createCard };

