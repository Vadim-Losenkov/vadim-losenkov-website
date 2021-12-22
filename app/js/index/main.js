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
  
  (function userProfile() {
    const $userTitle = $('.github__user-title')
    const $userDescription = $('.github__user-description')
    const $userSubscribers = $('.github__user-subscribers')
    const $userAva = $('.github__user-ava')
    const $userRedirect = $('.github__user-redirect')
    
    $('.github__desc-title').on('click', function(e) {
      $(this).toggleClass('open')
      $('.github__desc-inner').slideToggle()
    })

    axios.get('https://api.github.com/users/Vadim-Losenkov').then(resp => {
      console.log(resp.data);
      $userTitle.html(resp.data.name)
      $userDescription.html(resp.data.bio)
      $userAva.attr({
        src: resp.data.avatar_url
      })
      $userRedirect.attr({
        href: resp.data.html_url
      })
    })
  } ())
})