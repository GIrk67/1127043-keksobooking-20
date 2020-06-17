'use strict';

var AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
];

var TITLES = [
  'Дивный дворец',
  'Чудесная квартирка',
  'Милый дом',
  'Уютное бунгало',
];

// var ADDRESS = [];

var PRICE = [10000, 50000];

var TYPE = ['palace', 'flat', 'house', 'bungalo'];

var ROOMS = [1, 2, 3];

var GUESTS = [1, 2, 3, 0];

var CHECKIN = ['12:00', '13:00', '14:00'];

var CHECKOUT = ['12:00', '13:00', '14:00'];

var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

var LOCATION = {
  x: getRandomIntElement(130, 1130),
  y: getRandomIntElement(130, 630),
};

var mapElement = document.querySelector('.map');
mapElement.classList.remove('map--faded');

var mapPin = document.querySelector('.map__pins');
var similarMapPin = document
  .querySelector('#pin')
  .content.querySelector('.map__pin');

//  Функция случайного выбора из массива

var getRandomArrElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

// Функция случайного выбора из диапазона

function getRandomIntElement(min, max) {
  return Math.random() * (max - min) + min;
}

// Создание массива объектов

var getInformArrow = function (number) {
  for (var i = 0; i < number; i++) {
    var informarrow = [
      {
        author: {
          avatar: getRandomArrElement(AVATAR),
        },
        offer: {
          title: getRandomArrElement(TITLES),
          price: getRandomArrElement(PRICE),
          type: getRandomArrElement(TYPE),
          rooms: getRandomArrElement(ROOMS),
          guests: getRandomArrElement(GUESTS),
          checkin: getRandomArrElement(CHECKIN),
          checkout: getRandomArrElement(CHECKOUT),
          features: getRandomArrElement(FEATURES),
          photos: getRandomArrElement(PHOTOS),
        },
        location: getRandomArrElement(LOCATION),
      },
    ];
  }
  return informarrow;
};

var inform = getInformArrow(8);

var renderMapPin = function (informarrow) {
  var mapPinElement = similarMapPin.cloneNode(true);
  mapPinElement.querySelector('img').src = informarrow.author.avatar;
  mapPinElement.querySelector('img').alt = informarrow.offer.title;
  mapPinElement.style =
    'top: informarrow.location(y); left: ininformarrow.location(y)';

  return mapPinElement;
};

renderMapPin();

var pinElement = document.createDocumentFragment();
for (var i = 0; i < inform.length; i++) {
  pinElement.appendChild(renderMapPin(inform[i]));
}
mapPin.appendChild(pinElement);
