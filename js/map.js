
import { createCard } from './template.js';
import { formActive, formDisabled, address } from './form.js';
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
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const centerTokyo = {
  lat: 35.69493,
  lng: 139.75459,
};

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
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

const startCoordinatesTokyo = () => {
  address.value = `Coordinates: ${centerTokyo.lat}, ${centerTokyo.lng}`;
};
mainPinMarker.addTo(map);
startCoordinatesTokyo();
mainPinMarker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng();
});

const markerGroup = L.layerGroup().addTo(map);


const createMarker = (point) => {

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
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

const createMarkers = (array) => {
  array.forEach((point) => {
    createMarker(point);
  });
};


export { createMarkers, startCoordinatesTokyo };

// markerGroup.clearLayers(); очистить слой

// Показать часть меток
// nextButton.addEventListener('click', () => {
//   markerGroup.clearLayers();
//   points.slice(points.length / 2).forEach((point) => {
//     createMarker(point);
//   });
//   nextButton.remove();
// });
