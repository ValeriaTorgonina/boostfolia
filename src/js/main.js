
function scrollHeader() {
  const header = $('.main-header')
  let scrollPrev = 0;
  $(window).scroll(() => {
    const scrolled = $(window).scrollTop();
    if ( scrolled > 100 && scrolled > scrollPrev ) {
      header.addClass('out');
    } else {
      header.removeClass('out');
    }
    scrollPrev = scrolled;
  })
};

function toggleMenu() {
  const menu = $('.main-nav__list');
  const burgerBtn = $('.main-nav__burger');
  burgerBtn.click(() => {
    menu.toggleClass('open');
    burgerBtn.toggleClass('cross');
  })
}

function getActiveLink() {
  const links = $('.main-nav__link');
  links.click(function () {
    links.removeClass('active');
    $(this).addClass('active');
    $('.main-nav__list').removeClass('open');
    $('.main-nav__burger').removeClass('cross');
    $('.main-header').addClass('out');
  })
}

function playVideo() {
  const video = $('#process__video');
  const playBtn = $('.process__play-button');
  playBtn.click(() => {
      video.attr('controls', true);
      $(video).get(0).play();
      playBtn.hide();
  })
}

function filter() {
  const buttons = $('.works__filter-button');
  const images = $('.works__item').toArray()
  buttons.click(function () {
    buttons.removeClass('active');
    $(this).addClass('active');
    const btnName = $(this).attr('name');

    images.forEach(item => {
      $(item).show();
      if($(item).attr('title') !== btnName) {  
        $(item).hide();
      }      
      if(btnName === "all") {
        $(item).show();
      }
    })
  })
}


$(document).ready(() => {
  $('.tools__slider').owlCarousel({
    loop: true,
    smartSpeed: 200,
    items: 3,
    nav: true,
    lazyLoad: true,
    animateOut: 'fadeOut',
    navText: ['<div class="prev"></div>', '<div class="next"></div>'],
    dots: false,
  });

  $('.team__person-slider').owlCarousel({
    loop: true,
    smartSpeed: 500,
    items: 1,
    nav: false,
    lazyLoad: true,
    dots: true,
  });



  scrollHeader();
  toggleMenu();
  getActiveLink();
  playVideo();
  filter();
});