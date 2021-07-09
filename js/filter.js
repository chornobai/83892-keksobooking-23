import { debounce } from './util.js';
import { removeMarkers } from './map.js';
import { createMarkers } from './map.js';

const DEFAULT = 'any';
const DELAY = 500;
const priceValue = {
  LOW: 10000,
  HIGHT: 50000,
};
const filterForm = document.querySelector('.map__filters');
const featureList = filterForm.querySelectorAll('.map__checkbox');
const housingType = filterForm.querySelector('#housing-type');
const filterPrice = filterForm.querySelector('#housing-price');
const filterRoom = filterForm.querySelector('#housing-rooms');
const filterGuests = filterForm.querySelector('#housing-guests');

//  -- Фильтер по типу жилья
const filterByType = (ad) => housingType.value === DEFAULT || ad.offer.type === housingType.value;

//  -- Фильтер по цене

const filterByPrice = (ad) => {
  switch (filterPrice.value){
    case 'any':
      return true;
    case 'low':
      return ad.offer.price < priceValue.LOW;
    case 'middle':
      return (priceValue.LOW < ad.offer.price) && (ad.offer.price < priceValue.HIGHT);
    case 'high':
      return ad.offer.price > priceValue.HIGHT;
    default:
      return false;
  }
};


//  -- Фильтер по числу комнат
const filterByRooms = (ad) => filterRoom.value === DEFAULT || Number(filterRoom.value) === ad.offer.rooms;

//  -- Фильтер по числу гостей
const filterByGuests = (ad) => filterGuests.value === DEFAULT ? true : Number(filterGuests.value) === ad.offer.guests;


//  -- Фильтер по дополнительным опциям

const filterByFeatures = (ad) => Array.from(featureList)
  .every((checkbox) => {
    if (!checkbox.checked) {
      return true;
    }
    if (!ad.offer.features) {
      return false;
    }
    return ad.offer.features.includes(checkbox.value);
  });


// --- Отфильтрованный массив с условиями

const getFilteredAds = (ads) => {
  const filteredAds = ads.filter((ad) => (filterByType(ad) &&
    filterByPrice(ad) &&
    filterByRooms(ad) &&
    filterByGuests(ad) &&
    filterByFeatures(ad)
  ));

  return filteredAds;
};

//--- Фильтрация
const onFilterFormChange = (ads) => debounce((evt) => {
  evt.preventDefault();
  const adsFiltered = getFilteredAds(ads);
  removeMarkers();
  createMarkers(adsFiltered);
}, DELAY);

// --- Отслеживать изменения на фильтре
const setFilterChange = (ads) => {
  filterForm.addEventListener('change', onFilterFormChange(ads));
};

export { filterForm, setFilterChange, getFilteredAds, filterByType, onFilterFormChange, housingType };
