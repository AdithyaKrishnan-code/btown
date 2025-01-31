(function ($) {
  "use strict";

  /*----------------------------------------
  Sticky Header Activation
  ------------------------------------------*/
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('.sticky-header').addClass('sticky');
    } else {
      $('.sticky-header').removeClass('sticky');
    }
  });

  /*---------------------------
    Hero Slider Activation
  -----------------------------------*/
  var mySwiper = new Swiper('.slider-container.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000, // Transition speed (1s)
    autoplay: {
      delay: 5000, // 5 seconds between slides
      disableOnInteraction: false // Continue autoplay after manual interaction
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    /* events */
    on: {
      slideChange: function () {
        var currentSlide = this.realIndex + 1;
        document.querySelector('.current-slide').innerHTML = currentSlide;
      },
      paginationRender: function () {
        var totalSlides = document.getElementsByClassName('swiper-pagination-bullet').length;
        document.querySelector('.total-slides').innerHTML = totalSlides;
      }
    }
  });
  // ---------------------------------properties slider----------------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
    let imageSets = {
      "properties_tabs1": [
        "https://vishwakarmainteriors.com/wp-content/uploads/2022/08/hero_image_about-1.png",
        "https://asset.skoiy.com/9b80a6f781ff336f/a8csx84ab4fj.jpg",
        "https://res.cloudinary.com/dwa6fuv2x/w_2000,h_1200,c_fit/auto-mapping-folder/2020/07/Luxury-interior-design.jpg"
      ],
      "properties_tabs2": [
        "https://www.manjooran.com/wp-content/uploads/2016/03/apartments-in-kochi.jpg",
        "https://echoresorts.com/storage/media/resorts/bungaraya/villas/36/01HXR114N53NAPFSCJEE4SNMGP.jpg",
        "https://mayatar.com/wp-content/uploads/2022/05/UrbanX-1.jpg"
      ],
      "properties_tabs3": [
        "https://corbettfunresort.in/images/room/poll-cottage-image1.jpeg",
        "https://st.hzcdn.com/simgs/pictures/pools/contemporary-pool-envi-interior-design-studio-img~b501ddab024b192a_14-4206-1-a288608.jpg",
        "https://margaritabravo.com/wp-content/uploads/2022/10/luxury-2.jpg"
      ],
      "properties_tabs4": [
        "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/images/methode/2017/06/06/677a2be4-4a71-11e7-a842-aa003dd7e62a_1280x720_185554.JPG?itok=YdiS3qKf",
        "https://kreafolk.com/cdn/shop/articles/BlogThumbnail_Mansion_Interior_Design.webp?crop=center&height=1200&v=1730205858&width=1200",
        "https://i.ytimg.com/vi/MAN9m-ixvSA/maxresdefault.jpg"
      ]
    };

    // Different speed intervals for each property tab
    let speedIntervals = {
      "properties_tabs1": 5000,  // Changes every 2 seconds
      "properties_tabs2": 5000,  // Changes every 2 seconds
      "properties_tabs3": 5000,  // Changes every 2 seconds
      "properties_tabs4": 5000   // Changes every 2 seconds
    };

    function startImageRotation(elementId) {
      let anchor = document.querySelector(`#${elementId} .blog-thumb a img`);
      if (!anchor) return;

      let images = imageSets[elementId];
      let index = 0;
      let interval = speedIntervals[elementId]; // Get unique speed for each tab

      let rotationInterval;

      // Function to start image rotation
      function rotateImages() {
        rotationInterval = setInterval(() => {
          index = (index + 1) % images.length;
          anchor.style.opacity = "0"; // Fade out
          setTimeout(() => {
            anchor.src = images[index];
            anchor.style.opacity = "1"; // Fade in
          }, 1000);
        }, interval);
      }

      // Check screen width for mobile/tablet
      const isMobileOrTablet = window.innerWidth <= 1024;  // Detect if it's a mobile or tablet screen

      // On mobile/tablet, automatically rotate the images
      if (isMobileOrTablet) {
        rotateImages();
      } else {
        // On desktop, start rotation on hover
        anchor.addEventListener('mouseenter', () => {
          rotateImages();
        });

        anchor.addEventListener('mouseleave', () => {
          clearInterval(rotationInterval);
        });
      }
    }

    Object.keys(imageSets).forEach(startImageRotation);
  });

  // -------------------------------------------------------------------------------

  /*---------------------------
    Team Carousel Activation
  -----------------------------------*/
  // Swipper JS
  var mySwiper = new Swiper('.team-carousel .swiper-container', {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    spaceBetween: 30,
    autoplay: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.team-carousel .swiper-button-next',
      prevEl: '.team-carousel .swiper-button-prev',
    }
  });

  /*---------------------------
    Testimonial Carousel Activation
  -----------------------------------*/
  // Swipper JS
  var mySwiper = new Swiper('.testimonial-carousel.swiper-container', {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    spaceBetween: 30,
    autoplay: true,
    navigation: {
      nextEl: '.testimonial-carousel .swiper-button-next',
      prevEl: '.testimonial-carousel .swiper-button-prev',
    }
  });

  /*---------------------------
    Magnific Popup
  -----------------------------------*/
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });

  /*-----------------------------------------
    Off Canvas Mobile Menu
  -------------------------------------------*/
  $(".header-action-btn-menu").on('click', function () {
    $("body").addClass('fix');
    $(".mobile-menu-wrapper").addClass('open');
  });

  $(".offcanvas-btn-close,.offcanvas-overlay").on('click', function () {
    $("body").removeClass('fix');
    $(".mobile-menu-wrapper").removeClass('open');
  });

  /*----------------------------------------
    Responsive Mobile Menu
  ------------------------------------------*/
  //Variables
  var $offCanvasNav = $('.mobile-menu, .category-menu'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

  //Close Off Canvas Sub Menu
  $offCanvasNavSubMenu.slideUp();

  //Category Sub Menu Toggle
  $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
    var $this = $(this);
    if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length) {
        $this.parent('li').removeClass('active');
        $this.siblings('ul').slideUp();
      } else {
        $this.parent('li').addClass('active');
        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();
      }
    }
  });

  /*----------------------------------------*/
  /*  When document is loading, do
  /*----------------------------------------*/
  var varWindow = $(window);
  varWindow.on('load', function () {
    AOS.init({
      once: true,
    });
  });

  /*----------------------------------------*/
  /*  Splitting When Document is Loading, do
  /*----------------------------------------*/
  Splitting();

  /*----------------------------------------*/
  /*  Datepicker
  /*----------------------------------------*/
  $(".date-pic").datepicker({
    showOn: "button",
    buttonText: '<i class="icofont-calendar"></i>'
  });

  /*----------------------------------------*/
  /*  Project Filter
  /*----------------------------------------*/
  $('.gallery-filter-nav').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
  });

  var $grid = $('.gallery-filter-wrapper').isotope({
    itemSelector: '.filter-item',
    percentPosition: true,
  });

  /*----------------------------------------*/
  /*  Lightgallery Active
  /*----------------------------------------*/
  $(".popup-gallery").magnificPopup({
    delegate: 'a',
    type: 'image'
  });
  /*-------------------------
     Ajax Contact Form 
  ---------------------------*/
  $(function () {

    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-messege');

    // Set up an event listener for the contact form.
    $(form).on('submit', function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $('#contact-form input,#contact-form textarea').val('');
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
          }
        });
    });

  });
  /*----------------------------------------*/
  /*  Scroll to top
  /*----------------------------------------*/
  function scrollToTop() {
    var $scrollUp = $('#scroll-top'),
      $lastScrollTop = 0,
      $window = $(window);
    $window.on('scroll', function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass('show');
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.addClass('show');
        } else {
          $scrollUp.removeClass('show');
        }
      }
      $lastScrollTop = st;
    });

    $scrollUp.on('click', function (evt) {
      $('html, body').animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }
  scrollToTop();

})(jQuery);

