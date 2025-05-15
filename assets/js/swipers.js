var swiper = new Swiper('.cases-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    touchRatio: 1,
    simulateTouch: true,
    touchStartPreventDefault: false,
    passiveListeners: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1624: {
            slidesPerView: 4,
        }
    }
});


var swiper = new Swiper('.story-swiper', {
    slidesPerView: 4,
    spaceBetween: 26,
    loop: true,
    touchRatio: 1,
    simulateTouch: true,
    touchStartPreventDefault: false,
    passiveListeners: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

var swiper = new Swiper('.auditoria-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    touchRatio: 1,
    simulateTouch: true,
    touchStartPreventDefault: false,
    passiveListeners: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

var swiper = new Swiper('.visualization-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    touchRatio: 1,
    simulateTouch: true,
    touchStartPreventDefault: false,
    passiveListeners: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});
