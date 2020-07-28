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

  // var ADDRESSES = ['600, 350'];

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

  var DESCRIPTION = [
    'Апартаменты с бесплатным Wi-Fi расположены в Токио. К услугам гостей терраса',
    'К услугам гостей просторная квартира с прекрасным видом',
    'Современный дом с кондиционером и балконом. Из окон открывается вид на город',
    'К услугам гостей бунгало бесплатная частная парковка. Можно взять напрокат автомобиль',
  ];

  // Создание массива объектов

  var getInformArrows = function (number) {
    var informArrows = [];
    for (var i = 0; i < number; i++) {
      informArrows.push({
        author: {
          avatar: window.main.getRandomArrElement(AVATARS),
        },
        offer: {
          title: window.main.getRandomArrElement(TITLES),
          // address: window.main.getRandomArrElement(ADDRESSES),
          price: window.main.getRandomArrElement(PRICES),
          type: window.main.getRandomArrElement(TYPES),
          rooms: window.main.getRandomArrElement(ROOMS),
          guests: window.main.getRandomArrElement(GUESTS),
          checkin: window.main.getRandomArrElement(CHECKIN_HOURS),
          checkout: window.main.getRandomArrElement(CHECKOUT_HOURS),
          description: window.main.getRandomArrElement(DESCRIPTION),
          features: window.main.getRandomArrLength(FEATURES),
          photos: window.main.getRandomArrLength(PHOTOS),
        },
        location: {
          x: window.main.getRandomIntElement(130, 1130),
          y: window.main.getRandomIntElement(130, 630),
        },
      });
    }
    return informArrows;
  };

  window.data = {
    getInformArrows: getInformArrows
  };
})();
