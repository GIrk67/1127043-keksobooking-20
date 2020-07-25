'use strict';

(function () {
  var MAIN_PIN_WIDTH = 200;
  var MAIN_PIN_HEIGHT = 200;
  var MAP_PIN_WIDTH = 65;
  var MAP_PIN_HEIGHT = 65;
  var END_PIN_WIDTH = 10;
  var END_PIN_HEIGHT = 22;

  var mapElement = document.querySelector('.map');
  var mapPin = document.querySelector('.map__pins');

  var mainPin = document.querySelector('.map__pin--main');
  var noticeForm = document.querySelector('.ad-form');
  var inputAddress = document.querySelector('#address');

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

  var disableElement = function (element) {
    element.setAttribute('disabled', 'true');
  };

  var disableFormElement = function (formelements) {
    for (var i = 0; i < formelements.length; i++) {
      disableElement(formelements[i]);
    }
    return formelements;
  };

  // Разблокировка форм

  var activateForm = function (formelements) {
    for (var i = 0; i < formelements.length; i++) {
      formelements[i].removeAttribute('disabled');
    }
  };

  // Старт

  disableFormElement(formElement);
  disableFormElement(selectElement);
  setMainPinCenter();

  // Активация страницы

  var activatePage = function () {
    mapElement.classList.remove('map--faded');
    noticeForm.classList.remove('ad-form--disabled');
    mapPin.appendChild(window.pin.pinElement);
    activateForm(formElement);
    activateForm(selectElement);
    setMainPinPoint();
  };

  mainPin.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      activatePage();
    }
  });
  mainPin.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      activatePage();
    }
  });

  window.map = {
    mapElement: mapElement
  };
})();
