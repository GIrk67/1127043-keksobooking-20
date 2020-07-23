'use strict';

(function () {

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

  window.main = {
    getRandomArrElement: getRandomArrElement,
    getRandomIntElement: getRandomIntElement,
    getRandomArrLength: getRandomArrLength
  };

})();
