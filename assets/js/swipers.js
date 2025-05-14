var swiper = new Swiper('.cases-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
});

var swiper = new Swiper('.story-swiper', {
    slidesPerView: 4,
    spaceBetween: 26,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // чтобы можно было кликать по точкам
    },
});