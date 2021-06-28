
import { createCard, clientCards } from './template.js';
import { formActive, formDisabled,address } from './form.js';
// const resetButton = document.querySelector('#reset');

formDisabled();
const map = L.map('map-canvas')
  .on('load', () => {
    formActive();
    // console.log('Карта инициsализирована');
  })
  .setView({
    lat: 35.69493,
    lng: 139.75459,
  }, 8);

L.tileLayer(
  'http://{s}.tiles.maps.sputnik.ru/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const centerTokyo ={
  lat: 35.69493,
  lng: 139.75459,
};

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: centerTokyo.lat,
    lng: centerTokyo.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);


mainPinMarker.addTo(map);
address.placeholder = `Coordinates: ${  centerTokyo.lat }, ${centerTokyo.lng}`;
mainPinMarker.on('moveend', (evt) => {
  address.placeholder = evt.target.getLatLng();
});

const markerGroup = L.layerGroup().addTo(map);

const points = clientCards;
const createMarker = (point) => {

  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: point.location.lat,
      lng: point.location.lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(createCard(point),
      {
        keepInView: true,
      },
    );

};

points.forEach((point) => {
  createMarker(point);
});


// markerGroup.clearLayers(); очистить слой


// Ресет
// resetButton.addEventListener('click', () => {
//   mainPinMarker.setLatLng({
//     lat: 59.96831,
//     lng: 30.31748,
//   });

//   map.setView({
//     lat: 59.96831,
//     lng: 30.31748,
//   }, 16);
// });

// Показать часть меток
// nextButton.addEventListener('click', () => {
//   markerGroup.clearLayers();
//   points.slice(points.length / 2).forEach((point) => {
//     createMarker(point);
//   });
//   nextButton.remove();
// });
