'use strict';

(function () {
  var similarCard = document
    .querySelector('#card')
    .content.querySelector('.map__card');
  var mapFiltersContainer = document.querySelector('.map__filters-container');

  var TYPES_HOUSES = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalo: 'Бунгало',
  };

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
    for (var i = 0; i < window.pin.informs.length; i++) {
      card.appendChild(renderCardElement(window.pin.informs[i]));
    }
    return card;
  };

  // Открытие карточки жилья

  var buttonOpenCard = window.pin.pinElement.querySelectorAll('.map__pin');

  for (var i = 0; i < buttonOpenCard.length; i++) {
    buttonOpenCard[i].addEventListener('click', function (evt) {
      evt.currentTarget.classList.add('map__pin--active');
      var currentPin = document.querySelector('.map__pin--active');
      console.log(currentPin);
      window.map.mapElement.insertBefore(renderCards(currentPin), mapFiltersContainer);
    });
  };

})();
