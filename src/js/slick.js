var $jq = jQuery.noConflict();
$(document).ready(function(){
  $(".list-card-team").slick({
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000
})
});