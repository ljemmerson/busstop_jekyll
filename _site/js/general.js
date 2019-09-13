(function() {
  var $bio_close, $bio_trigger, $hash_links, $header, $mobile_trigger, animateNumber, animateValue, controller, menuWatch, scene;

  window.sr = ScrollReveal();

  sr.reveal('.testimonial .photos-container .photo-1', {
    viewFactor: 0.8,
    duration: 1000,
    delay: 0
  });

  sr.reveal('.testimonial .photos-container .photo-2', {
    viewFactor: 0.8,
    duration: 1000,
    delay: 100
  });

  sr.reveal('.testimonial .photos-container .photo-3', {
    viewFactor: 0.8,
    duration: 1000,
    delay: 200
  });

  sr.reveal('.testimonial .photos-container .photo-4', {
    viewFactor: 0.8,
    duration: 1000,
    delay: 300
  });

  sr.reveal('.key-points-container .key-point-one', {
    viewFactor: 0.4,
    duration: 500,
    delay: 0
  });

  sr.reveal('.key-points-container .divider-1', {
    viewFactor: 0.4,
    duration: 1000,
    delay: 300
  });

  sr.reveal('.key-points-container .key-point-two', {
    viewFactor: 0.4,
    duration: 1000,
    delay: 600
  });

  sr.reveal('.key-points-container .divider-2', {
    viewFactor: 0.4,
    duration: 1000,
    delay: 900
  });

  sr.reveal('.key-points-container .key-point-three', {
    viewFactor: 0.4,
    duration: 1000,
    delay: 1200
  });

  sr.reveal('.career-voliunteer-container .photos-container .left-photo', {
    viewFactor: 0.8,
    duration: 1000,
    delay: 0
  });

  sr.reveal('.career-voliunteer-container .photos-container .right-photo-1', {
    viewFactor: 0.8,
    duration: 1000,
    delay: 300
  });

  sr.reveal('.career-voliunteer-container .photos-container .right-photo-2 ', {
    viewFactor: 0.8,
    duration: 1000,
    delay: 600
  });

  $mobile_trigger = $('.mobile-menu');

  $header = $('.main-header');

  $mobile_trigger.on("click", function() {
    return menuWatch();
  });

  menuWatch = function() {
    if ($header.hasClass("show-mobile-menu")) {
      $header.removeClass("show-mobile-menu");
      return $mobile_trigger.text("Menu");
    } else {
      $header.addClass("show-mobile-menu");
      return $mobile_trigger.text("Close");
    }
  };

  $bio_close = $('.bio-close');

  $bio_trigger = $('.bio-trigger');

  $bio_trigger.on("click", function(e) {
    $('.show-bio').removeClass("show-bio");
    return $(this.parentElement).find('.bio-container').addClass("show-bio");
  });

  $bio_close.on("click", function(e) {
    return $(".bio-container").removeClass("show-bio");
  });

  animateValue = function(id, start, end, duration) {
    var current, increment, obj, range, stepTime, timer;
    range = end - start;
    current = start;
    increment = end > start ? 1 : -1;
    stepTime = Math.abs(Math.floor(duration / range));
    obj = document.getElementById(id);
    timer = setInterval((function() {
      current += increment;
      obj.innerHTML = current;
      if (current === end) {
        clearInterval(timer);
      }
    }), stepTime);
  };

  controller = new ScrollMagic.Controller();

  scene = new ScrollMagic.Scene({
    triggerElement: '.stats',
    reverse: false,
    triggerHook: 0.3
  }).on('start', function() {
    return animateNumber(this.triggerElement());
  }).addTo(controller);

  animateNumber = function(e) {
    if (e) {
      e.classList.add("show-animation");
      return animateValue("animated-value", 4500, 5000, 500);
    }
  };

  $('.video').modaal({
    type: 'video'
  });

  $hash_links = $('a[href*="#"]');

  $hash_links.click(function() {
    var target;
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      if (this.hash === "") {
        return false;
      }
      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        if (target.selector === "#contact-section" && $header.hasClass("show-mobile-menu")) {
          menuWatch();
        }
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

}).call(this);
