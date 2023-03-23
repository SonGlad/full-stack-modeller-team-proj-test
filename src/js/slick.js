$('.company-swipe').slick({

  prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',

  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
  ]


});