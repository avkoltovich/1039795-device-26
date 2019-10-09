// Выпадающее меню

var catalogItem = document.querySelector('.main-nav__item--catalog');
var catalogSubmenu = document.querySelector('.nav-catalog__wrapper');

catalogItem.addEventListener('mouseenter', function () {
  catalogSubmenu.classList.add('nav-catalog-show');
});

catalogItem.addEventListener('mouseleave', function () {
  catalogSubmenu.classList.remove('nav-catalog-show');
});

var fileName = location.href.split("/").slice(-1);

// Слайдер на цикле

if (fileName == "index.html") {

var slideButtons = document.querySelectorAll('.slider__control');
var slides = document.querySelectorAll('.slider__item');

var removeClass = function () {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slider__show');
  };
  for (var i = 0; i < slideButtons.length; i++) {
    slideButtons[i].classList.remove('current-slide');
  };
};

var addButtonClickHandler = function (slide, btn) {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    removeClass();
    slide.classList.add('slider__show');
    btn.classList.add('current-slide');
  });
};

for (var i = 0; i < slideButtons.length; i++) {
  addButtonClickHandler(slides[i], slideButtons[i]);
}

// Блок Сервис на цикле

var serviceItems = document.querySelectorAll('.service__item');
var serviceButtons = document.querySelectorAll('.service__button');
var serviceSlides = document.querySelectorAll('.service__text-wrapper');

var ServiceRemoveClass = function () {
  for (var i = 0; i < serviceSlides.length; i++) {
    serviceSlides[i].classList.remove('service__show');
  };
  for (var i = 0; i < serviceItems.length; i++) {
    serviceItems[i].classList.remove('service__item--current');
  };
};

var addButtonClickHandler = function (text, item, ServiceBtn) {
  ServiceBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    ServiceRemoveClass();
    text.classList.add('service__show');
    item.classList.add('service__item--current');
  });
};

for (var i = 0; i < serviceButtons.length; i++) {
  addButtonClickHandler(serviceSlides[i], serviceItems[i], serviceButtons[i]);
}

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

}
