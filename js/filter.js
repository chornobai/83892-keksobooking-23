import { debounce } from './util.js';
import { removeMarkers } from './map.js';
import { createMarkers } from './map.js';

const DEFAULT = 'any';
const DELAY = 500;
const priceValue = {
  LOW: 10000,
  UP: 50000,
};
const filterForm = document.querySelector('.map__filters');

const housingType = filterForm.querySelector('#housing-type');
const filterPrice = filterForm.querySelector('#housing-price');
const filterRoom = filterForm.querySelector('#housing-rooms');
const filterGuests = filterForm.querySelector('#housing-guests');

//  -- Фильтер по типу жилья
const filterByType = (ad) => housingType.value === DEFAULT || ad.offer.type === housingType.value;

//  -- Фильтер по цене
const filterByPrice = function (ads) {
  return ads.filter((ad) => {
    const priceRange = {
      'low': ad.offer.price < priceValue.LOW,
      'middle': ad.offer.price >= priceValue.LOW && ad.offer.price <= priceValue.UP,
      'high': ad.offer.price > priceValue.UP,
    };
    return priceRange[filterPrice];
  });
};

//  -- Фильтер по числу комнат
const filterByRooms = (ad) => filterRoom.value === DEFAULT || Number(filterRoom.value) === ad.offer.rooms;

//  -- Фильтер по числу гостей
const filterByGuests = (ad) => filterGuests.value === DEFAULT ? true : parseInt(filterGuests.value, 10) <= ad.offer.guests;


//  -- Фильтер по дополнительным опциям
const filterByFeatures = (ad) => {
  const featuresChecked = filterForm.querySelectorAll('.map__checkbox:checked');
  let count = 0;
  featuresChecked.forEach((feature) => {
    if (ad.offer.features.includes(feature.value)) {
      count++;
    }
  });
  return count === featuresChecked.length;
};

// --- Отфильтрованный массив с условиями

const getFilteredAds = (ads) => {
  const filteredAds = ads.filter((ad) => (filterByType(ad) &&
    filterByPrice(ads) &&
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
