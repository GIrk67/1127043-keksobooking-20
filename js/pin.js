'use strict';

(function () {
  var NUMBER_OBJECTS = 8;

  var similarMapPin = document
    .querySelector('#pin')
    .content.querySelector('.map__pin');
  var mapFiltersContainer = document.querySelector('.map__filters-container');

  var renderMapPin = function (informArrow) {
    var mapPinElement = similarMapPin.cloneNode(true);
    mapPinElement.querySelector('img').src = informArrow.author.avatar;
    mapPinElement.querySelector('img').alt = informArrow.offer.title;
    mapPinElement.style = 'top: ' + informArrow.location.y + 'px; left: ' + informArrow.location.x + 'px;';
    mapPinElement.addEventListener('click', function () {
      var currentPin = document.querySelector('.map__pin--active');

      if (currentPin) {
        currentPin.classList.remove('map__pin--active');
      }

      window.map.mapElement.insertBefore(window.card.renderCardElement(informArrow), mapFiltersContainer);
      mapPinElement.classList.add('map__pin--active');
    });

    return mapPinElement;
  };

  var informs = window.data.getInformArrows(NUMBER_OBJECTS);

  var pinElement = document.createDocumentFragment();
  for (var n = 0; n < informs.length; n++) {
    pinElement.appendChild(renderMapPin(informs[n]));
  }

  window.pin = {
    informs: informs,
    pinElement: pinElement
  };

})();
