'use strict';

var NUMBER_OBJECTS = 8;
var MAIN_PIN_WIDTH = 200;
var MAIN_PIN_HEIGHT = 200;
var MAP_PIN_WIDTH = 65;
var MAP_PIN_HEIGHT = 65;
var END_PIN_WIDTH = 10;
var END_PIN_HEIGHT = 22;

var AVATARS = [
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

// var ADDRESSES = [];

var PRICES = [10000, 50000];

var TYPES = ['palace', 'flat', 'house', 'bungalo'];

var ROOMS = [1, 2, 3, 100];

var GUESTS = [1, 2, 3, 0];

var CHECKIN_HOURS = ['12:00', '13:00', '14:00'];

var CHECKOUT_HOURS = ['12:00', '13:00', '14:00'];

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
/*
var LOCATIONS = {
  x: getRandomIntElement(130, 1130),
  y: getRandomIntElement(130, 630),
};
*/

var mapElement = document.querySelector('.map');
var mapPin = document.querySelector('.map__pins');
var similarMapPin = document
  .querySelector('#pin')
  .content.querySelector('.map__pin');
var mainPin = document.querySelector('.map__pin--main');
var noticeForm = document.querySelector('.ad-form');
var inputAddress = document.querySelector('#address');

//  Функция случайного выбора из массива

var getRandomArrElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

// Функция случайного выбора из диапазона

function getRandomIntElement(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Функция создания массива случайной длины

var getRandomArrLength = function (arr) {
  var newArray = [];
  var newLength = getRandomIntElement(0, arr.length);
  for (var i = 0; i <= newLength; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};

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
        features: getRandomArrLength(FEATURES),
        photos: getRandomArrLength(PHOTOS),
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
  mapPinElement.querySelector('img').src = informArrow.author.avatar;
  mapPinElement.querySelector('img').alt = informArrow.offer.title;
  mapPinElement.style =
    'top: ' +
    informArrow.location.y +
    'px; left: ' +
    informArrow.location.x +
    'px;';

  return mapPinElement;
};

var informs = getInformArrows(NUMBER_OBJECTS);

var pinElement = document.createDocumentFragment();
for (var n = 0; n < informs.length; n++) {
  pinElement.appendChild(renderMapPin(informs[n]));
}

// module3-task3

var TYPES_HOUSES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalo: 'Бунгало',
};

var similarCard = document
  .querySelector('#card')
  .content.querySelector('.map__card');
var mapFiltersContainer = document.querySelector('.map__filters-container');

var renderFeatures = function (features, item) {
  var featuresList = item.querySelector('.popup__features');
  featuresList.innerHTML = '';
  if (features.length > 0) {
    for (var j = 0; j < features.length; j++) {
      var FeatureItem = document.createElement('li');
      FeatureItem.classList.add('popup__feature');
      FeatureItem.classList.add('popup__feature--' + features[j]);
      featuresList.appendChild(FeatureItem);
    }
  } else {
    featuresList.remove();
  }
};

var renderPhoto = function (photos, item) {
  var photosElement = item.querySelector('.popup__photos');
  photosElement.innerHTML = '';
  if (photos.length > 0) {
    for (var j = 0; j < photos.length; j++) {
      var photoItem = document.createElement('img');
      photoItem.classList.add('popup__photo');
      photoItem.src = photos[j];
      photoItem.alt = 'Фотография жилья';
      photoItem.width = 45;
      photoItem.height = 40;
      photosElement.appendChild(photoItem);
    }
  } else {
    photosElement.remove();
  }
};

var renderCardElement = function (informArrow) {
  var cardElement = similarCard.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent =
    informArrow.offer.title;
  cardElement.querySelector('.popup__text--price').textContent =
    informArrow.offer.price + ' ₽/ночь';
  cardElement.querySelector('.popup__type').textContent =
    TYPES_HOUSES[informArrow.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent =
    informArrow.offer.rooms +
    ' комнаты для ' +
    informArrow.offer.guests +
    ' гостей';
  cardElement.querySelector('.popup__text--time').textContent =
    'Заезд после ' +
    informArrow.offer.checkin +
    ', выезд до ' +
    informArrow.offer.checkout;
  cardElement.querySelector('.popup__avatar').src = informArrow.author.avatar;
  renderFeatures(informArrow.offer.features, cardElement);
  renderPhoto(informArrow.offer.photos, cardElement);

  // Закрытие карточки

  var closeCard = function () {
    cardElement.remove();
  };

  var buttonCloseCard = cardElement.querySelector('.popup__close');

  buttonCloseCard.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      closeCard();
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeCard();
    }
  });

  return cardElement;
};

var renderCards = function () {
  var card = document.createDocumentFragment();
  for (var i = 0; i < informs.length; i++) {
    card.appendChild(renderCardElement(informs[i]));
  }
  return card;
};

renderCards();

// Координаты центра метки

var setMainPinCenter = function () {
  var locationX = Math.round(MAIN_PIN_WIDTH / 2 + mainPin.offsetLeft);
  var locationY = Math.round(MAIN_PIN_HEIGHT / 2 + mainPin.offsetTop);
  inputAddress.value = locationX + ', ' + locationY;
};

// Координаты острия метки

var setMainPinPoint = function () {
  var locationX = Math.round(MAP_PIN_WIDTH / 2 + END_PIN_WIDTH / 2 + mainPin.offsetLeft);
  var locationY = Math.round(MAP_PIN_HEIGHT / 2 + END_PIN_HEIGHT + mainPin.offsetTop);
  inputAddress.value = locationX + ', ' + locationY;
};

// Блокировка форм и фильтров

var formElement = document.querySelectorAll('fieldset');
var selectElement = document.querySelector('.map__filters');

var disabledElement = function (element) {
  element.setAttribute('disabled', 'true');
};

var disabledFormElement = function (formelements) {
  for (var i = 0; i < formelements.length; i++) {
    disabledElement(formelements[i]);
  }
  return formelements;
};

// Разблокировка форм

var activatedForm = function (formelements) {
  for (var i = 0; i < formelements.length; i++) {
    formelements[i].removeAttribute('disabled');
  }
};

// Старт

disabledFormElement(formElement);
disabledFormElement(selectElement);
setMainPinCenter();

// Активация страницы

var activatedPage = function () {
  mapElement.classList.remove('map--faded');
  noticeForm.classList.remove('ad-form--disabled');
  mapPin.appendChild(pinElement);
  activatedForm(formElement);
  activatedForm(selectElement);
  setMainPinPoint();
  // mapElement.insertBefore(renderCards(), mapFiltersContainer);
};

mainPin.addEventListener('mousedown', function (evt) {
  if (evt.button === 0) {
    activatedPage();
  }
});
mainPin.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    activatedPage();
  }
});

// Валидация формы добавления нового объявления

var MIN_NAME_LENGTH = 30;
var MAX_NAME_LENGTH = 100;

var selectNumberRooms = document.querySelector('#room_number');
var selectCapacity = document.querySelector('#capacity');
var selectTitle = document.querySelector('#title');
var selectType = document.querySelector('#type');
var selectPrice = document.querySelector('#price');
var selectTimeIn = document.querySelector('#timein');
var selectTimeOut = document.querySelector('#timeout');

selectTitle.addEventListener('invalid', function () {
  if (selectTitle.validity.valueMissing) {
    selectTitle.setCustomValidity('Обязательное поле');
  } else {
    selectTitle.setCustomValidity('');
  }
});

selectTitle.addEventListener('input', function () {
  var valueLength = selectTitle.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    selectTitle.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    selectTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');

  } else {
    selectTitle.setCustomValidity('');
  }
});

var roomValidation = function () {
  if (selectNumberRooms.value === '100' && selectCapacity.value !== '0') {
    selectNumberRooms.setCustomValidity('100 комнат не для гостей');
  } else if (selectNumberRooms.value < selectCapacity.value && selectCapacity.value !== '0') {
    selectNumberRooms.setCustomValidity('Число гостей не должно превышать количество комнат');
  } else if (selectNumberRooms.value !== '100' && selectCapacity.value === '0') {
    selectNumberRooms.setCustomValidity('Не для гостей только 100 комнат');
  } else {
    selectNumberRooms.setCustomValidity('');
  }
};

selectNumberRooms.addEventListener('change', roomValidation);
selectCapacity.addEventListener('change', roomValidation);

var checkTimecIn = function () {
  selectTimeOut.value = selectTimeIn.value;
};

var checkTimeOut = function () {
  selectTimeIn.value = selectTimeOut.value;
};

selectTimeIn.addEventListener('change', checkTimecIn);
selectTimeOut.addEventListener('change', checkTimeOut);

var minPrice = {
  bungalo: '0',
  flat: '1000',
  house: '5000',
  palace: '10000'
};

var typeChange = function (evt) {
  selectPrice.min = minPrice[evt.target.value];
  selectPrice.placeholder = minPrice[evt.target.value];
};

selectType.addEventListener('change', typeChange);

// Открытие карточки жилья

var openCard = function () {
  mapElement.insertBefore(renderCards(), mapFiltersContainer);
};

var buttonOpenCard = pinElement.querySelectorAll('.map__pin');

for (var i = 0; i < buttonOpenCard.length; i++) {
  buttonOpenCard[i].addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      openCard();
    }
  });
}
