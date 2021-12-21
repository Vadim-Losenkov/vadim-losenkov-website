const $PORTFOLIO_WRAPPER = document.querySelector('[data-portfolio="wrapper"]')
const $MODALS_WRAPPER = document.querySelector('[data-modal="wrapper"]')
const defaultFilterSettings = {
  item: 'all', 
  filter: {filterBy: '', from: ''}
  // filter: {filterBy: 'speed', from: 'top'}
    // {filterBy: 'date', from: 'top'}, 
    // {filterBy: 'name', from: 'top'}, 
    // {filterBy: 'tech', from: []}
  
}

const windowHeight = document.documentElement.clientHeight

let poster
let $posts
let stateItem = 'all'
let lazyImagesPositions = []

function lazyScrollCheck() {
  let imgIndex = lazyImagesPositions.findIndex(item => pageYOffset > item - windowHeight)

  if (imgIndex >= 0) {
    const images = $posts[imgIndex].querySelectorAll('[data-src]')
    if (images) {
      images.forEach(img => {
        img.src = img.dataset.src
        img.removeAttribute('data-src')
      })
    }

    delete lazyImagesPositions[imgIndex]
  }
}

function lazyScroll() {
  lazyScrollCheck()
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
                  <img data-src="${post.srcDesc}" />
                </a>
                <a href="#${post.title}-mobile" data-effect="mfp-zoom-in" data-post="${index}" data-popup="mobile" class="portfolio__project-img swiper-slide popup"
                  data-item="2">
                  <img data-src="${post.srcMobile}" />
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

function filter(wrapper) {
  getPosts(defaultFilterSettings, true)

  const $wrapper = document.querySelector(wrapper)
  const $items = $wrapper.querySelectorAll('[data-target]')

  lazyImagesPositions = []

  $wrapper.addEventListener('click', (event) => {
    const $target = event.target.closest('[data-filter]')
    const defaultCondition = $target && !$target.querySelector('span').classList.contains('open')
    
    if (defaultCondition) {
      const useFilter = {
        filterBy: $target.dataset.filter,
        from: $target.dataset.position
      }
      const useRerender = $target.dataset.target
      if (useFilter.filterBy) {
        getPosts({item: stateItem, filter: useFilter})
        
      }
    }
    /* if ($target && !$target.querySelector('span').classList.contains('open')) {
      window.removeEventListener('scroll', lazyScroll)
      
      const $item = $target.dataset.target
      
      $item ? $PORTFOLIO_WRAPPER.innerHTML = `
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
      : ''
      
      $items.forEach($el => {
        $el.querySelector('span').classList.remove('open')
      })
      
      $target.querySelector('span').classList.add('open')
      
      $item 
        ? getPosts({item: $item, filter: filterObj}) 
        : getPosts({item: stateItem, filter: filterObj})
    }
*/
  })
}

function getPosts(settings = defaultFilterSettings, R) {
  if (settings.item !== stateItem || R) {
    rerender()
  } else {
    setFilter()
  }
  
  function rerender() {
    axios.get(`../app/data/${settings.item}.json`).then((resp) => {
      posts = resp.data
      
      setPosts()
      setFilter()
    })
  }
  function setFilter() {
    const pos = settings.filter.from
    switch (settings.filter.filterBy) {
      case 'speed':
        pos === 'top' 
          ? posts.sort((firstItem, secondItem) => firstItem.speed - secondItem.speed)
          : posts.sort((firstItem, secondItem) => firstItem.speed - secondItem.speed).reverse()
        break;
      case 'date':
        pos === 'top' 
          ? posts
          : posts.reverse()
        break;
      case 'name':
        pos === 'top' 
          ? posts
          : posts.reverse()
        break;
    }
    
    poster.render()
    setPosts()
  }
  function setPosts() {
    poster = new Poster({
      portfolio: $PORTFOLIO_WRAPPER,
      modals: $MODALS_WRAPPER,
    })
    
    new Swiper('.card-slider', {
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

    $posts = $PORTFOLIO_WRAPPER.querySelectorAll('.project-card')
    lazyImagesPositions = []
    $posts.forEach($p => {
      lazyImagesPositions.push($p.getBoundingClientRect().top + pageYOffset)
    })
    lazyScrollCheck()
    
    window.addEventListener('scroll', lazyScroll)
    
    $('.portfolio__project-description__title').on('click', function (event) {
      const $description = $(this).siblings('.portfolio__project-wrapper')
      $(this).toggleClass('open')
      $description.slideToggle()
    })
  }
}

(function INIT() {
  filter('.portfolio__filter-inner')

  $(function () {
    $($PORTFOLIO_WRAPPER).magnificPopup({
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
    
    $('.portfolio__filter-opener').on('click', function (event) {
      $(this).toggleClass('open')
      $('.portfolio__filter-inner').slideToggle()
    })
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