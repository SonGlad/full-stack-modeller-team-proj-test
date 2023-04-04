var $jq = jQuery.noConflict();




$('.list-card-team').slick({
  infinite: true,
  slidesToShow: 6.7,
  
  speed: 500, 
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.6,
       
        speed: 500, 
        autoplay: true,
        autoplaySpeed: 1000
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6.7,
        
        speed: 500, 
        autoplay: true,
        autoplaySpeed: 1000
      }
    }
  ]
});

// $(document).ready(function(){
//   $(".list-card-team").slick({
//   // dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 1000
// })
// });