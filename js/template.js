import { createClients } from './create-client.js';
const testblock = document.querySelector('.map__canvas');
const templateCard = document.querySelector('#card')
  .content
  .querySelector('.popup');

const clientCards = createClients();
const clientOrderType = {
  palace : 'Дворец',
  flat : 'Квартирка',
  house : 'Домик',
  bungalow : 'Бунгало',
  hotel : 'Отель',
};
const clientCardsFragment = document.createDocumentFragment();
clientCards.forEach((offer) => {
  const clientElement = templateCard.cloneNode(true);
  clientElement.querySelector('.popup__avatar').src = offer.author.avatar;
  clientElement.querySelector('.popup__title').textContent=offer.offer.title;
  clientElement.querySelector('.popup__text--address').textContent=offer.offer.address;
  clientElement.querySelector('.popup__text--price').innerHTML = `${offer.offer.price  } ₽/ночь`;
  clientElement.querySelector('.popup__type').textContent =  clientOrderType[offer.offer.type];
  clientElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms  } комнаты ${  offer.offer.guests  } гостей`;
  clientElement.querySelector('.popup__text--time').textContent = `Заезд после ${  offer.offer.checkin  } выезд до ${  offer.offer.checkout}`;
  const clientListFeatures = clientElement.querySelector('.popup__features');
  const feature = offer.offer.features;
  const modifiers = feature.map((item)=>`popup__feature--${item}`);
  clientListFeatures.querySelectorAll('.popup__feature')
    .forEach((item) => {
      const modifier = item.classList[1];
      if(!modifiers.includes(modifier)){
        item.remove();
      }
    });

  clientElement.querySelector('.popup__description').textContent = offer.offer.description;
  const clientListPhotos = clientElement.querySelector('.popup__photos');
  const photoArr=offer.offer.photos;
  while (clientListPhotos.firstChild) {
    clientListPhotos.removeChild(clientListPhotos.firstChild);
  }
  function renderImages (array) {
    array.forEach ((item) => {
      const newImage = document.createElement('img');
      newImage.classList.add('popup__photo');
      newImage.src = item;
      newImage.alt = 'Фотография жилья';
      clientListPhotos.appendChild(newImage);
    });
  }
  renderImages (photoArr);
  clientCardsFragment.appendChild(clientElement);
  // testblock.appendChild(clientElement);
});
testblock.appendChild(clientCardsFragment);
