const $REVIEWS_WRAPPER = document.querySelector('#reviews')

let reviews

function filter() {
  getPosts()
}

class Reviews {
  constructor(selector) {
    this.$reviews = selector instanceof HTMLElement
      ? selector
      : document.querySelector(selector)
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

function getPosts() {
  axios.get(`../app/data/reviews.json`).then((resp) => {
    reviews = resp.data

    new Reviews($REVIEWS_WRAPPER)
  })
}

(function INIT() {
  filter($REVIEWS_WRAPPER)

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