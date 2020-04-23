
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
    console.log(menu);
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


$(document).ready(() => {
    scrollHeader();
    toggleMenu();
    getActiveLink();
});