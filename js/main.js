import { createMarkers } from './map.js';
import { getData } from './api.js';
const ADS_COUNT = 10;

getData((ads) => {
  createMarkers(ads.slice(0, ADS_COUNT));
});


