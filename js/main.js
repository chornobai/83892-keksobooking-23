import { getData } from './api.js';
import { setFilterChange } from './filter.js';
import { createMarkers, setupMap } from './map.js';
import { formDisabled, onResetButton } from './form.js';
import './filter.js';
import './map.js';

const ADS_COUNT = 10;

// ---Неактивное состояние
formDisabled();

// --- Загрузка карты и перевод в активное состояние
setupMap();

// --- Получение даных от сервера, фильтрация, отрисовка обьявлений на карте.
getData((ads) => {
  const adsforRender = ads.slice(0, ADS_COUNT);
  createMarkers(adsforRender);
  setFilterChange(adsforRender);
});

// --- Сброс настроек
onResetButton();


