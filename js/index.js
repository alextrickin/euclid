window.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters    
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  document.querySelector('.header__burger-button').addEventListener('click', function () {
    document.querySelector('.header__burger_navigation').classList.toggle('is-active')    
  })

  $( function() {
    $( "#accordion" ).accordion({
      icons: false,
      collapsible: true
    });
  });
})