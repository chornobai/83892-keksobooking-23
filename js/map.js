import { createCard } from './template.js';
import { formActive, address } from './form.js';
const TOKYO_LATITUDE = 35.69493;
const TOKYO_LONGITUDE = 139.75459;
const mainPinWidth = 50;
const mainPinHeight = 50;
const pinWidth = 40;
const pinHeight = 40;
const markersArray = [];
const map = L.map('map-canvas');

// --- Загрузка карты
const setupMap = () => {
  map
    .on('load', () => {
      formActive();
    })
    .setView({
      lat: TOKYO_LATITUDE,
      lng: TOKYO_LONGITUDE,
    }, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },
  ).addTo(map);
};

// --- Иконка для главного маркера
const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [mainPinWidth, mainPinHeight],
  iconAnchor: [mainPinWidth / 2, mainPinHeight],
});

// --- Коодинаты главного маркера
const mainPinMarker = L.marker(
  {
    lat: TOKYO_LATITUDE,
    lng: TOKYO_LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

//  --- Заполнение строки адресс в форме обьявлений
const startCoordinates = () => {
  address.value = `Coordinates: ${TOKYO_LATITUDE}, ${TOKYO_LONGITUDE}`;
};

const resetMainMarkerPosition = () => {
  mainPinMarker.setLatLng({lat: TOKYO_LATITUDE, lng: TOKYO_LONGITUDE});
};


// --- Отрисовка главного маркера на карте
mainPinMarker.addTo(map);

startCoordinates();

// Заполнение координатами строки адресс при движении главного маркера
mainPinMarker.on('moveend', (evt) => {
  address.value = `Coordinates: ${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

// --- Отрисовка обявлений на карте
const createMarkers = (array) => {
  array.forEach((point) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [pinWidth, pinHeight],
      iconAnchor: [pinWidth / 2, pinHeight],
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
    markersArray.push(marker);
  });

};

// --- Удаление обьявлений
const removeMarkers = () => {
  markersArray.forEach((item) => {
    item.remove();
  });
};

export { createMarkers, startCoordinates, removeMarkers, setupMap, resetMainMarkerPosition};
