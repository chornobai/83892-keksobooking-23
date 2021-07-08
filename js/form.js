import { sendData } from './api.js';
import { startCoordinatesTokyo } from './map.js';
import { renderErrorMesssage, renderSuccessMesssage } from './message.js';
import { filterForm } from './filter.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE_VALUE = 0;
const MAX_PRICE_VALUE = 7;
const adForm = document.querySelector('.ad-form');
const resetButton = adForm.querySelector('.ad-form__reset');
const form = document.querySelectorAll('form');
const address = document.querySelector('#address');
const formElements = document.querySelectorAll('fieldset');
const adTitle = document.querySelector('#title');
const adPrice = document.querySelector('#price');
const adType = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const guestSelected = document.querySelector('#capacity');

const guestsCapacity = document.querySelector('#capacity').querySelectorAll('option');

const valueForRooms = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const priceTypeValue = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

//// Активация и деактивация страницы

const formDisabled = () => {

  form.forEach((item) => {
    item.classList.add('ad-form--disabled');
  });

  formElements.forEach((item) => {
    item.setAttribute('disabled', 'disabled');
  });
};

const formActive = () => {

  form.forEach((item) => {
    item.classList.remove('ad-form--disabled');
  });

  formElements.forEach((item) => {
    item.removeAttribute('disabled');
  });
};


// ---Валидация формы

// --- Валидация поля заголовок обьявления

adTitle.addEventListener('input', () => {
  const valueLength = adTitle.value.length;
  if (adTitle.validity.valueMissing) {
    adTitle.setCustomValidity('Заполните обязательное поле');
  } else if (valueLength < MIN_TITLE_LENGTH) {
    adTitle.setCustomValidity(`Eщё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitle.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    adTitle.setCustomValidity('');
  }
  adTitle.reportValidity();
});

// --- Валидация поля цена обьявления

adPrice.addEventListener('input', () => {
  const priceLength = adPrice.value.length;
  if (adPrice.validity.valueMissing) {
    adPrice.setCustomValidity('Заполните обязательное поле');
  } else if (priceLength < MIN_PRICE_VALUE) {
    adPrice.setCustomValidity(`Eщё ${MIN_PRICE_VALUE - priceLength} симв.`);
  }
  else if (priceLength > MAX_PRICE_VALUE) {
    adPrice.setCustomValidity(`Удалите ${priceLength - MAX_PRICE_VALUE} симв.`);
  } else {
    adPrice.setCustomValidity('');
  }
  adPrice.reportValidity();
});

// --- Валидация количество гостей и комнат.

const changeRoom = (evt) => {
  guestsCapacity.forEach((option) => {
    option.disabled = true;
  });
  valueForRooms[evt.target.value].forEach((seatsAmount) => {
    guestsCapacity.forEach((option) => {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
};
guestSelected[2].setAttribute('selected', 'selected');
roomNumber.addEventListener('change', changeRoom);


// --- Синхронизация время въезда и время выезда.

const onTmeInChange = (evt) => {
  timeout.value = evt.target.value;
};
const onTimeOutChange = (evt) => {
  timein.value = evt.target.value;
};

timein.addEventListener('change', onTmeInChange);
timeout.addEventListener('change', onTimeOutChange);

// --- Валидация типа жилья и цены

const getTypePrice = (evt) => {
  adPrice.placeholder = priceTypeValue[evt.target.value];
  adPrice.min = priceTypeValue[evt.target.value];
};

adType.addEventListener('change', getTypePrice);

// --- Отправка формы

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => (renderSuccessMesssage(), adForm.reset(), startCoordinatesTokyo()),
    () => (renderErrorMesssage(), startCoordinatesTokyo()),
    new FormData(evt.target),
  );
});

// ---Сброс формы по кнопке

const onResetButton = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    adForm.reset();
    startCoordinatesTokyo();
    filterForm.reset();

  });
};

export { formDisabled, formActive, address, onResetButton };
