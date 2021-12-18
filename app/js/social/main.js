
$(function () {
  (function arrowScrollbar() {
    let progressPath = document.querySelector('.progress-wrap path');
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    let updateProgress = function () {
      let scroll = $(window).scrollTop();
      let height = $(document).height() - $(window).height();
      let progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    let offset = 50;
    let duration = 550;
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > offset) {
        $('.progress-wrap').addClass('active-progress');
      } else {
        $('.progress-wrap').removeClass('active-progress');
      }
    })
  }())

  $('[href="scrollTop"]').click(function (event) {
    event.preventDefault()
    setTimeout(() => $('html, body').animate({ scrollTop: 0 }, 500), 0);
  })
  const $menu = $('.mobile-menu')
  const $btn = $('.header__btn')
  $btn.on('click', () => {
    $btn.toggleClass('open')
    $menu.toggleClass('open')
  })
  $('.mobile-menu__item').on('click', () => {
    $menu.toggleClass('open')
    $btn.toggleClass('open')
  })
})