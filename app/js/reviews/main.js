const $PORTFOLIO_WRAPPER = document.querySelector('[data-portfolio="wrapper"]')
const $MODALS_WRAPPER = document.querySelector('[data-modal="wrapper"]')

let reviews

function filter(wrapper) {
  getPosts('all')

  const $wrapper = document.querySelector(wrapper)
  const $items = $wrapper.querySelectorAll('[data-target]')

  $wrapper.addEventListener('click', (event) => {
    const $target = event.target.closest('[data-target]')
    if ($target && !$target.querySelector('span').classList.contains('open')) {
      $PORTFOLIO_WRAPPER.innerHTML = `
        <div class="portfolio__card--loading">
          <div class="portfolio__card-link--loading"></div>
          <div class="portfolio__card-image--loading"></div>
          <div class="portfolio__card-filter--loading"></div>
          <div class="portfolio__card-button--loading"></div>
          <div class="portfolio__card-descripton--loading"></div>
        </div>
        <div class="portfolio__card--loading">
          <div class="portfolio__card-link--loading"></div>
          <div class="portfolio__card-image--loading"></div>
          <div class="portfolio__card-filter--loading"></div>
          <div class="portfolio__card-button--loading"></div>
          <div class="portfolio__card-descripton--loading"></div>
        </div>
      `
      $items.forEach($el => {
        $el.querySelector('span').classList.remove('open')
      })
      $target.querySelector('span').classList.add('open')

      const $item = $target.dataset.target
      getPosts($item)
    }
  })
}

class Reviews {
  constructor(selector) {
    this.$reviews = document.querySelector(selector)
    this.render()
  }
  
  render() {
    const reviewsList = reviews.map(review => {
      return `
        <div class="reviews__item">
          <div class="reviews__item-header">
            <div class="reviews__item-title">
              ${review.title}
            </div>
            <div class="reviews__item-price">
              <span>$${review.price[0]}</span>
            </div>
          </div>
          <div class="reviews__item-text wow fadeInRight" data-wow-duration="2s">
            ${review.description}
          </div>
          <div class="reviews__item-button">
            <a href="${review.link}" target="_blank" class="reviews__item-link">открыть отзыв</a>
          </div>
          <div class="reviews__item-footer">
            <div class="reviews__item-name">${review.name}</div>
            <div class="reviews__item-time">${review.date}</div>
          </div>
        </div>
      `
    }).join('')
    this.$reviews.innerHTML = reviewsList
  }
}

function getPosts(item = 'all') {
  axios.get(`../app/data/reviews.json`).then((resp) => {
    reviews = resp.data

    new Reviews('#reviews')
  })
}

(function INIT() {
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
} ())