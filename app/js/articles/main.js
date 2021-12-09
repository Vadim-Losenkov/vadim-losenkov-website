const POSTS_HASH = '61ac9c7ed228a9001703ab64'
const $PORTFOLIO_WRAPPER = document.querySelector('[data-portfolio="wrapper"]')
const $MODALS_WRAPPER = document.querySelector('[data-modals="wrapper"]')

let posts
let reviews

function filter(wrapper) {
  getPosts('all')

  const $wrapper = document.querySelector(wrapper)
  const $items = $wrapper.querySelectorAll('[data-target]')

  $wrapper.addEventListener('click', (event) => {
    $PORTFOLIO_WRAPPER.innerHTML = ''
    
    const $target = event.target.closest('[data-target]')
    if ($target) {
      $items.forEach($el => {
        $el.classList.remove('open')
      })
      $target.classList.add('open')

      const $item = $target.dataset.target
      getPosts($item)
    }
  })
}

class Poster {
  constructor(selectors = {}) {
    this.$main = selectors.portfolio instanceof HTMLElement 
      ? selectors.portfolio
      : document.querySelector(selectors.portfolio)
    this.$modals = selectors.modals instanceof HTMLElement 
      ? selectors.modals 
      : document.querySelector(selectors.modals)
    this.render()
  }

  render() {
    const listGenerator = list => list.map(item => `<li class="portfolio__project-item">${item}</li>`).join('')
    const postsList = posts.map((post, index) => {
      return `
        <div class="portfolio__project project-card ${post.className || ''}" data-groups='[${post.groups}]' ${post.customAttr || ''}>
          <div class="portfolio__project-box">
            <a 
              href="${post.modal ? `#${post.title}-router` : post.link}" 
              ${!post.modal && 'target="_blank"'}
              class="portfolio__project-link ${post.modal ? 'popup' : 'data-effect="mfp-zoom-in"'}" 
            >
              ${post.link}
            </a>
            <div class="portfolio__project-image swiper-container card-slider">
              <div class="portfolio__project-images swiper-wrapper" data-tabson="items">
                <a href="#${post.title}" data-effect="mfp-zoom-in" data-post="${index}" data-popup="desc" class="portfolio__project-img swiper-slide open popup"
                  data-item="1">
                  <img src="${post.srcDesc}" />
                </a>
                <a href="#${post.title}-mobile" data-effect="mfp-zoom-in" data-post="${index}" data-popup="mobile" class="portfolio__project-img swiper-slide popup"
                  data-item="2">
                  <img src="${post.srcMobile}" />
                </a>
              </div>
              <div class="portfolio__project-pagination"></div>
            </div>
            <a 
              href="${post.modal ? `#${post.title}-router` : post.link}" 
              ${!post.modal ? 'target="_blank"' : 'data-effect="mfp-zoom-in"'} 
              class="portfolio__project-btn ${post.modal ? 'popup' : ''}"
            >
              посмотреть сайт
            </a>
          </div>
          <div class="portfolio__project-description">
            <div class="portfolio__project-description__title">
              <span>Описание проекта</span>
            </div>
            <div class="portfolio__project-wrapper">
              <p class="portfolio__project-name">
                <span>Название: </span>${post.title}
              </p>
              <p class="portfolio__project-descr">
                <span>Описание: </span>
                ${post.description}
              </p>
              <p class="portfolio__project-technologes">
                <span>Инструменты разработки: </span>
                <ul class="portfolio__project-list">
                  ${listGenerator(post.useList)}
                </ul>
              </p>
              <p class="portfolio__project-time">
                <span>Время за котрое проект был выполен: </span>
                ${post.time}
              </p>
            </div>
          </div>
        </div>
      `
    }).join('')

    this.$main.innerHTML = postsList
    this.modal()
  }
  modal() {
    const routerModalsList = []
    const modalsList = posts.map(modal => {
      const createRouterButtons = list => list.map(button => `
        <a href="${button.url}" target="_blank" class="website-router__button">
          ${button.name}
        </a>
      `).join('')
      
      const routerModalTemplate = (text, buttonsList) => `
        <div id="${modal.title}-router" class="website-router white-popup mfp-with-anim mfp-hide">
          <h2 class="website-router__title">Vadim losenkov</h2>
          <p class="website-router__text">
            ${text}
          </p>
          <div class="website-router__buttons">
            ${createRouterButtons(buttonsList)}
          </div>
        </div>
      `
      if (modal.modal) {
        routerModalsList.push(routerModalTemplate(modal.modal.text, modal.modal.buttons))
      }
      return `
        <div id="${modal.title}" class="popup-image open mfp-with-anim mfp-hide">
          <div class="project-img open popup-img"
            style="background-image: url('${modal.srcDesc}');"></div>
        </div>
        <div id="${modal.title}-mobile" class="popup-image open mfp-with-anim mfp-hide">
          <div class="project-img open popup-img"
            style="background-image: url('${modal.srcMobile}');"></div>
        </div>
      `
    }).join('')

    this.$modals.innerHTML = modalsList
    this.$modals.insertAdjacentHTML('beforeend', routerModalsList.join(''))
  }
}

function getPosts(item = 'all') {
  axios.get(`https://${POSTS_HASH}.mockapi.io/${item}`).then((resp) => {
    posts = resp.data
  
    new Poster({
      portfolio: $PORTFOLIO_WRAPPER,
      modals: $MODALS_WRAPPER,
    })
  
    new Swiper(".card-slider", {
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.portfolio__project-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span data-id="${index}" class="${className}">${index === 0 ? 'на ПК' : 'на телефоне'}</span>`;
        },
      },
    })

  }) 
}

filter('.portfolio__filter-inner')

$(function () {
  $('.portfolio__inner').magnificPopup({
    delegate: '.popup',
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
  
  
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
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > offset) {
			$('.progress-wrap').addClass('active-progress');
		} else {
			$('.progress-wrap').removeClass('active-progress');
		}
	})
	
  $('.portfolio__project-description__title').on('click', function () {
    const $description = $(this).siblings('.portfolio__project-wrapper')
    $(this).toggleClass('open')
    $description.slideToggle()
  })
  $('[href="scrollTop"]').click(function(event) {
    event.preventDefault()
    setTimeout(() => $('html, body').animate({scrollTop: 0},500), 0);
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