// Слайдер

var slideButtonOne = document.querySelector('.slide__btn--one');
var slideButtonTwo = document.querySelector('.slide__btn--two');
var slideButtonThree = document.querySelector('.slide__btn--three');

var slideOne = document.querySelector('.slide__one');
var slideTwo = document.querySelector('.slide__two');
var slideThree = document.querySelector('.slide__three');

slideButtonOne.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideOne.classList.remove('slider__show');
  slideTwo.classList.remove('slider__show');
  slideThree.classList.remove('slider__show');
  slideOne.classList.add('slider__show');

  slideButtonOne.classList.remove('current-slide');
  slideButtonTwo.classList.remove('current-slide');
  slideButtonThree.classList.remove('current-slide');
  slideButtonOne.classList.add('current-slide');
});

slideButtonTwo.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideOne.classList.remove('slider__show');
  slideTwo.classList.remove('slider__show');
  slideThree.classList.remove('slider__show');
  slideTwo.classList.add('slider__show');

  slideButtonOne.classList.remove('current-slide');
  slideButtonTwo.classList.remove('current-slide');
  slideButtonThree.classList.remove('current-slide');
  slideButtonTwo.classList.add('current-slide');
});

slideButtonThree.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideOne.classList.remove('slider__show');
  slideTwo.classList.remove('slider__show');
  slideThree.classList.remove('slider__show');
  slideThree.classList.add('slider__show');

  slideButtonOne.classList.remove('current-slide');
  slideButtonTwo.classList.remove('current-slide');
  slideButtonThree.classList.remove('current-slide');
  slideButtonThree.classList.add('current-slide');
});

// Блок Сервис

var serviceItemDeliver = document.querySelector('.service__item--deliver');
var serviceItemWaranty = document.querySelector('.service__item--waranty');
var serviceItemCredit = document.querySelector('.service__item--credit');

var serviceButtonDeliver = serviceItemDeliver.querySelector('.service__button--deliver');
var serviceButtonWaranty = serviceItemWaranty.querySelector('.service__button--waranty');
var serviceButtonCredit = serviceItemCredit.querySelector('.service__button--credit');

var serviceWrapperDeliver = document.querySelector('.service__text-wrapper--deliver');
var serviceWrapperWaranty = document.querySelector('.service__text-wrapper--waranty');
var serviceWrapperCredit = document.querySelector('.service__text-wrapper--credit');

serviceButtonDeliver.addEventListener('click', function (evt) {
  evt.preventDefault();
  serviceWrapperDeliver.classList.remove('service__show');
  serviceWrapperWaranty.classList.remove('service__show');
  serviceWrapperCredit.classList.remove('service__show');
  serviceWrapperDeliver.classList.add('service__show');

  serviceItemDeliver.classList.remove('service__item--current');
  serviceItemWaranty.classList.remove('service__item--current');
  serviceItemCredit.classList.remove('service__item--current');
  serviceItemDeliver.classList.add('service__item--current');
});

serviceButtonWaranty.addEventListener('click', function (evt) {
  evt.preventDefault();
  serviceWrapperDeliver.classList.remove('service__show');
  serviceWrapperWaranty.classList.remove('service__show');
  serviceWrapperCredit.classList.remove('service__show');
  serviceWrapperWaranty.classList.add('service__show');

  serviceItemDeliver.classList.remove('service__item--current');
  serviceItemWaranty.classList.remove('service__item--current');
  serviceItemCredit.classList.remove('service__item--current');
  serviceItemWaranty.classList.add('service__item--current');
});

serviceButtonCredit.addEventListener('click', function (evt) {
  evt.preventDefault();
  serviceWrapperDeliver.classList.remove('service__show');
  serviceWrapperWaranty.classList.remove('service__show');
  serviceWrapperCredit.classList.remove('service__show');
  serviceWrapperCredit.classList.add('service__show');

  serviceItemDeliver.classList.remove('service__item--current');
  serviceItemWaranty.classList.remove('service__item--current');
  serviceItemCredit.classList.remove('service__item--current');
  serviceItemCredit.classList.add('service__item--current');
});

// Карта

var buttonMap = document.querySelector('.map__button');
var popupMapSection = document.querySelector('.map');
var popupMap = popupMapSection.querySelector('.map__wrapper');
var closeMapBtn = popupMap.querySelector('.map__button--close');

buttonMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMapSection.classList.add('modal-show');
});

closeMapBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMapSection.classList.remove('modal-show');
});

// Yandex карта

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.686980, 37.529654],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'DEVICE',
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/popular-2.svg',
          iconImageSize: [40, 70],
          iconImageOffset: [-20, -70]
      });

  myMap.geoObjects
      .add(myPlacemark);
});

// Модальное окно

var buttonContacts = document.querySelector('.contacts__button');
var popupModalSection = document.querySelector('.modal');
var popupModal = popupModalSection.querySelector('.modal__wrapper');

var closeButton = popupModal.querySelector('.modal__button--close');
var formContacts = popupModal.querySelector('.modal__form');
var userName = popupModal.querySelector('.modal__input--name');
var userEmail = popupModal.querySelector('.modal__input--email');
var userText = popupModal.querySelector('.modal__textarea');


buttonContacts.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupModalSection.classList.add('modal-show');
  popupModal.classList.add('modal-show--animation');
  userName.focus();
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupModalSection.classList.remove('modal-show');
  popupModal.classList.remove('modal-error');
  popupModal.classList.remove('modal-show--animation');
});

formContacts.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    popupModal.classList.remove("modal-error");
    popupModal.classList.remove('modal-show--animation');
    popupModal.offsetWidth = popupModal.offsetWidth;
    popupModal.classList.add("modal-error");
  } else {
    userName.focus();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupModalSection.classList.contains("modal-show")) {
      popupModalSection.classList.remove("modal-show");
      popupModalSection.classList.remove("modal-error");
      popupModal.classList.remove('modal-show--animation');
    }
    if (popupMapSection.classList.contains("modal-show")) {
      popupMapSection.classList.remove("modal-show");
    }
  }
});