'use strict';

(function () {
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

  window.data = {
    getInformArrows: getInformArrows
  };
})();
