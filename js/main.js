"use strict";

var NUMBER_OBJECTS = 8;

var AVATARS = [
  "img/avatars/user01.png",
  "img/avatars/user02.png",
  "img/avatars/user03.png",
  "img/avatars/user04.png",
  "img/avatars/user05.png",
  "img/avatars/user06.png",
  "img/avatars/user07.png",
  "img/avatars/user08.png",
];

var TITLES = [
  "Дивный дворец",
  "Чудесная квартирка",
  "Милый дом",
  "Уютное бунгало",
];

// var ADDRESSES = [];

var PRICES = [10000, 50000];

var TYPES = ["palace", "flat", "house", "bungalo"];

var ROOMS = [1, 2, 3];

var GUESTS = [1, 2, 3, 0];

var CHECKIN_HOURS = ["12:00", "13:00", "14:00"];

var CHECKOUT_HOURS = ["12:00", "13:00", "14:00"];

var FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];

var PHOTOS = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg",
];

var LOCATIONS = {
  x: getRandomIntElement(130, 1130),
  y: getRandomIntElement(130, 630),
};

var mapElement = document.querySelector(".map");
mapElement.classList.remove("map--faded");

var mapPin = document.querySelector(".map__pins");
var similarMapPin = document
  .querySelector("#pin")
  .content.querySelector(".map__pin");

//  Функция случайного выбора из массива

var getRandomArrElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

// Функция случайного выбора из диапазона

function getRandomIntElement(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Создание массива объектов

var getInformArrows = function (number) {
  var informArrows = [];
  for (var i = 0; i < number; i++) {
    informArrows.push({
      author: {
        avatar: getRandomArrElement(AVATARS),
      },
      offer: {
        title: getRandomArrElement(TITLES),
        price: getRandomArrElement(PRICES),
        type: getRandomArrElement(TYPES),
        rooms: getRandomArrElement(ROOMS),
        guests: getRandomArrElement(GUESTS),
        checkin: getRandomArrElement(CHECKIN_HOURS),
        checkout: getRandomArrElement(CHECKOUT_HOURS),
        features: getRandomArrElement(FEATURES),
        photos: getRandomArrElement(PHOTOS),
      },
      location: {
        x: getRandomIntElement(130, 1130),
        y: getRandomIntElement(130, 630),
      },
    });
  }
  return informArrows;
};

var renderMapPin = function (informArrow) {
  var mapPinElement = similarMapPin.cloneNode(true);
  mapPinElement.querySelector("img").src = informArrow.author.avatar;
  mapPinElement.querySelector("img").alt = informArrow.offer.title;
  mapPinElement.style =
    "top: " +
    informArrow.location.y +
    "px; left: " +
    informArrow.location.x +
    "px;";

  return mapPinElement;
};

var informs = getInformArrows(NUMBER_OBJECTS);

var pinElement = document.createDocumentFragment();
for (var i = 0; i < informs.length; i++) {
  pinElement.appendChild(renderMapPin(informs[i]));
}
mapPin.appendChild(pinElement);

// module3-task3

var TYPES_HOUSES = {
  palace: "Дворец",
  flat: "Квартира",
  house: "Дом",
  bungalo: "Бунгало",
};

var similarCard = document
  .querySelector("#card")
  .content.querySelector(".map__card");
var mapFiltersContainer = document.querySelector(".map__filters-container");

var renderCardElement = function (informArrow) {
  var cardElement = similarCard.cloneNode(true);
  cardElement.querySelector(".popup__title").textContent =
    informArrow.offer.title;
  cardElement.querySelector(".popup__text--price").textContent =
    informArrow.offer.price + " ₽/ночь";
  cardElement.querySelector(".popup__type").textContent =
    TYPES_HOUSES[informArrow.offer.type];
  cardElement.querySelector(".popup__text--capacity").textContent =
    informArrow.offer.rooms +
    " комнаты для " +
    informArrow.offer.guests +
    " гостей";
  cardElement.querySelector(".popup__text--time").textContent =
    "Заезд после " +
    informArrow.offer.checkin +
    ", выезд до " +
    informArrow.offer.checkout;
  cardElement.querySelector(".popup__features").textContent =
    informArrow.offer.features;
  cardElement.querySelector(".popup__avatar").src = informArrow.author.avatar;
  cardElement.querySelector(".popup__photos").src = informArrow.offer.photos;
  return cardElement;
};

var card = document.createDocumentFragment();
for (var i = 0; i < informs.length; i++) {
  card.appendChild(renderCardElement(informs[i]));
}

mapElement.insertBefore(card, mapFiltersContainer);
