import Poster from './Poster'
import Tabson from './Tabson'


new Poster({
  portfolio: '[data-portfolio="wrapper"]',
  modals: '[data-modal="wrapper"]',
})
new Tabson('[data-tabson="wrapper"]')

$(function () {
  $('.popup').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  $('.portfolio__project-description__title').on('click', function () {
    const $description = $(this).siblings('.portfolio__project-wrapper')
    $(this).toggleClass('open')
    $description.slideToggle()
  })
})