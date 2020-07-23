'use strict';

(function () {
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

})();
