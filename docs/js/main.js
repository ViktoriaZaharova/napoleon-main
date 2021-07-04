"use strict";

var menu = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    mobileBack = document.querySelector('.mobile-back'),
    overlay = document.querySelector('.overlay');

var lockScroll = function lockScroll() {
  document.body.classList.add('lock');
};

var unlockScroll = function unlockScroll() {
  document.body.classList.remove('lock');
};

var initialMenu = function initialMenu() {
  document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
  scrollTop();
};

var scrollTop = function scrollTop() {
  menu.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

burger.addEventListener('click', function () {
  menu.classList.add('open');
  overlay.classList.add('open');
  lockScroll();
  initialMenu();
});
overlay.addEventListener('click', function () {
  menu.classList.remove('open');
  overlay.classList.remove('open');
  unlockScroll();
});
menu.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    // e.preventDefault();
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  }
});
// var startPlay = document.querySelectorAll("#butt");
// var startPlayList = document.querySelectorAll(".coun");
// startPlay.forEach((item, index) => {
//   item.addEventListener("click", function () {
//     startPlayList[index].classList.toggle("block");
//     item.style.cssText = "position:relative; opacity:0; z-index:-1; display:none";
//   });
// });
"use strict";
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

if (document.querySelectorAll('a[href^="#"]')) {
  // Найти все ссылки начинающиеся на #
  var anchors = document.querySelectorAll('a[href^="#"]'); // Цикл по всем ссылкам

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Предотвратить стандартное поведение ссылок
        // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)

        var _goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'; // Плавная прокрутка до элемента с id = href у ссылки


        document.querySelector(_goto).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
"use strict";

var slider = document.querySelector('.swiper-container');
var mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    992: {
      slidesPerView: 2
    }
  }
});

if (document.querySelector('.slider-container')) {
  var mobileSliders = function mobileSliders() {
    if (window.innerWidth <= 545 && sliders.dataset.mobile == 'false') {
      mySwipers = new Swiper(sliders, {
        slidesPerView: 1.25,
        spaceBetween: 5,
        loop: false,
        slideClass: 'product__item'
      });
      sliders.dataset.mobile = 'true';
    }

    if (window.innerWidth > 545) {
      sliders.dataset.mobile = 'false';

      if (sliders.classList.contains('swiper-container-initialized')) {
        mySwipers.destroy();
      }
    }
  };

  var mySwipers;
  var sliders = document.querySelector('.slider-container');
  mobileSliders();
  window.addEventListener('resize', function () {
    mobileSliders();
  });
}

if (document.querySelector('.slider-container-1')) {
  var mobileSliders1 = function mobileSliders1() {
    if (window.innerWidth <= 545 && sliders1.dataset.mobile == 'false') {
      mySwipers1 = new Swiper(sliders1, {
        slidesPerView: 1.25,
        spaceBetween: 5,
        loop: false,
        slideClass: 'product__item'
      });
      sliders1.dataset.mobile = 'true';
    }

    if (window.innerWidth > 545) {
      sliders1.dataset.mobile = 'false';

      if (sliders1.classList.contains('swiper-container-initialized')) {
        mySwipers1.destroy();
      }
    }
  };

  var mySwipers1;
  var sliders1 = document.querySelector('.slider-container-1');
  mobileSliders1();
  window.addEventListener('resize', function () {
    mobileSliders1();
  });
}

if (document.querySelector('.slider-container-2')) {
  var mobileSliders2 = function mobileSliders2() {
    if (window.innerWidth <= 545 && sliders2.dataset.mobile == 'false') {
      mySwipers2 = new Swiper(sliders2, {
        slidesPerView: 1.25,
        spaceBetween: 5,
        loop: false,
        slideClass: 'product__item'
      });
      sliders2.dataset.mobile = 'true';
    }

    if (window.innerWidth > 545) {
      sliders2.dataset.mobile = 'false';

      if (sliders2.classList.contains('swiper-container-initialized')) {
        mySwipers2.destroy();
      }
    }
  };

  var mySwipers2;
  var sliders2 = document.querySelector('.slider-container-2');
  mobileSliders2();
  window.addEventListener('resize', function () {
    mobileSliders2();
  });
}

var sliderI = document.querySelector('.intro-slider-container');
var mySwiperI = new Swiper(sliderI, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination-i',
    clickable: true
  }
});
"use strict";

if (document.querySelector('.video-js')) {
  videojs(document.querySelector('.video-js'), {
    language: 'ru'
  });
}
"use strict";
//# sourceMappingURL=main.js.map
