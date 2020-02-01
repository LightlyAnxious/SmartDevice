'use strict';
(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var i;
  var j;
  var cbToggle = document.querySelector('.main-nav__callback');
  var popup = document.querySelector('.modal');
  var layout = document.querySelector('.modal__layout');
  var closeToggle = document.querySelector('.modal__close');
  var forms = document.getElementsByClassName('form');
  var accToggle = document.getElementsByClassName('accordion__toggle');
  var accMenu = document.getElementsByClassName('accordion__menu');

  var getValue = function (el) {
    return el.value;
  };

  var setValue = function (el, value) {
    var newValue = getValue(el) === value;
    return newValue;
  };

  var setFocus = function (el) {
    return el.focus();
  };

  var getCollectionForEach = function (collection, callback) {
    [].forEach.call(collection, callback);
  };

  if (forms) {
    var names = document.querySelectorAll('[name=name]');
    var phones = document.querySelectorAll('[name=tel]');
    var messages = document.querySelectorAll('[name=question]');
    var isStorageSupport = true;
    var storageLogin = '';
    var storagePhone = '';

    try {
      storageLogin = localStorage.getItem('login');
      storagePhone = localStorage.getItem('tel');
    } catch (err) {
      isStorageSupport = false;
    }

    for (i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', function (evt) {
        evt.preventDefault();
        if (isStorageSupport) {
          localStorage.setItem('login', names[i].value);
          localStorage.setItem('tel', phones[i].value);
          localStorage.setItem('message', messages[i].value);
        }
      });
    }

    if (cbToggle) {
      cbToggle.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add('modal--show');
        if (storageLogin || storagePhone) {
          getCollectionForEach(names, setValue(this, storageLogin));
          getCollectionForEach(phones, setValue(this, storagePhone));
          getCollectionForEach(phones, setFocus);
        } else {
          getCollectionForEach(names, setFocus);
        }
      });
      cbToggle.addEventListener('keydown', function (evt) {
        evt.preventDefault();
        if (evt.keyCode === ENTER_KEYCODE) {
          popup.classList.add('modal--show');
        }
      });
    }

    if (closeToggle) {
      closeToggle.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.remove('modal--show');
      });

      closeToggle.addEventListener('keydown', function (evt) {
        evt.preventDefault();
        if (evt.keyCode === ENTER_KEYCODE) {
          popup.classList.remove('modal--show');
        }
      });
    }

    if (layout) {
      layout.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.remove('modal--show');
      });
    }
  }

  if (popup) {
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        popup.classList.remove('modal--show');
      }
    });
  }

  // Пререключение классов аккордеона

  for (j = 0; j < accToggle.length; j++) {
    if ((accToggle && accMenu) && (accToggle.length === accMenu.length)) {
      accToggle[j].addEventListener('click', function () {
        this.classList.toggle('accordion__toggle--active');
      });
    }
  }

  var mask = function () {
    jQuery(function ($) {
      $("#tel").mask("+7(999) 999-9999");
    });
  };

  // Маска для поля ввода телефона

  jQuery(function ($) {
    $(phones).mask("+7(999) 999-9999");
  });

  // Плагин для плавного скролла

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
  });
})();
