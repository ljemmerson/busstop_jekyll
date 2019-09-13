---
---

# Scroll Reveal Code
window.sr = ScrollReveal();
sr.reveal('.testimonial .photos-container .photo-1', { viewFactor: 0.8, duration: 1000, delay: 0});
sr.reveal('.testimonial .photos-container .photo-2', { viewFactor: 0.8, duration: 1000, delay: 100});
sr.reveal('.testimonial .photos-container .photo-3', { viewFactor: 0.8, duration: 1000, delay: 200});
sr.reveal('.testimonial .photos-container .photo-4', { viewFactor: 0.8, duration: 1000, delay: 300});
sr.reveal('.key-points-container .key-point-one', { viewFactor: 0.4, duration: 500, delay: 0});
sr.reveal('.key-points-container .divider-1', { viewFactor: 0.4, duration: 1000, delay: 300});
sr.reveal('.key-points-container .key-point-two', { viewFactor: 0.4, duration: 1000, delay: 600});
sr.reveal('.key-points-container .divider-2', { viewFactor: 0.4, duration: 1000, delay: 900});
sr.reveal('.key-points-container .key-point-three', { viewFactor: 0.4, duration: 1000, delay: 1200});
sr.reveal('.career-voliunteer-container .photos-container .left-photo', { viewFactor: 0.8, duration: 1000, delay: 0});
sr.reveal('.career-voliunteer-container .photos-container .right-photo-1', { viewFactor: 0.8, duration: 1000, delay: 300});
sr.reveal('.career-voliunteer-container .photos-container .right-photo-2 ', { viewFactor: 0.8, duration: 1000, delay: 600});


$mobile_trigger = $('.mobile-menu')
$header = $('.main-header')

$mobile_trigger.on "click", ->
  menuWatch()

menuWatch = () ->
  if $header.hasClass "show-mobile-menu"
    $header.removeClass "show-mobile-menu"
    $mobile_trigger.text "Menu"
  else
    $header.addClass "show-mobile-menu"
    $mobile_trigger.text "Close"

$bio_close = $('.bio-close')
$bio_trigger = $('.bio-trigger')

$bio_trigger.on "click", (e)->
  $('.show-bio').removeClass "show-bio"
  # $(this).prev('div').addClass "show-bio"
  $(@parentElement).find('.bio-container').addClass "show-bio"

$bio_close.on "click", (e) ->
  $(".bio-container").removeClass "show-bio"


# Animate amount of people helped
animateValue = (id, start, end, duration) ->
  range = end - start
  current = start
  increment = if end > start then 1 else -1
  stepTime = Math.abs(Math.floor(duration / range))
  obj = document.getElementById(id)
  timer = setInterval((->
    current += increment
    obj.innerHTML = current
    if current == end
      clearInterval timer
    return
  ), stepTime)
  return

controller = new ScrollMagic.Controller()
scene = new (ScrollMagic.Scene)(
  triggerElement: '.stats',
  reverse: false,
  triggerHook: 0.3).on('start', ->
    animateNumber(this.triggerElement())
  ).addTo controller

animateNumber = (e) ->
  if e
    e.classList.add("show-animation")
    animateValue("animated-value", 4500, 5000, 500)
    
# JS for triggering video plugin
$('.video').modaal({
  type: 'video'
});

# animate #links
$hash_links = $('a[href*="#"]')

$hash_links.click ->
  if location.pathname.replace(/^\//, '') == @pathname.replace(/^\//, '') and location.hostname == @hostname
    return false if @hash is ""

    target = $(@hash)
    target = if target.length then target else $('[name=' + @hash.slice(1) + ']')
    if target.length
      # If contact section in mobile
      menuWatch() if target.selector is "#contact-section" and $header.hasClass "show-mobile-menu" 
    
      $('html,body').animate { scrollTop: target.offset().top }, 1000
      return false
  return







