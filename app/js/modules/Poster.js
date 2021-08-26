import posts from './posts'
import {listGenerator} from './utils'

class Poster {
  constructor(selectors = {}) {
    this.$main = document.querySelector(selectors.portfolio)
    this.$modals = document.querySelector(selectors.modals)
    this.render()
  }

  render() {
    const postsList = posts.map((post, index) => {
      return `
        <div class="portfolio__project" data-tabson="wrapper">
          <div class="portfolio__project-box">
            <a class="portfolio__project-link" href="${post.link}" target="_blank">${post.link}</a>
            <div class="portfolio__project-image">
              <div class="portfolio__project-images" data-tabson="items">
                <a href="#${post.title}" data-effect="mfp-zoom-in" data-post="${index}" data-popup="desc" class="portfolio__project-img open popup"
                  data-item="1" style="background-image: url('${post.srcDesc}');"></a>
                <a href="#${post.title}-mobile" data-effect="mfp-zoom-in" data-post="${index}" data-popup="mobile" class="portfolio__project-img popup"
                  data-item="2" style="background-image: url('${post.srcMobile}');"></a>
              </div>
              <div class="portfolio__project-buttons" data-tabson="menu">
                <span class="open" data-id="1">на ПК</span>
                <span data-id="2">на телефоне</span>
              </div>
            </div>
            <a href="${post.link}" target="_blank" class="portfolio__project-btn">
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
    const modalsList = posts.map(modal => {
      return `
        <div id="${modal.title}" class="popup-image open mfp-with-anim mfp-hide">
          <div class="portfolio__project-img open popup-img"
            style="background-image: url('${modal.srcDesc}');"></div>
        </div>
        <div id="${modal.title}-mobile" class="popup-image open mfp-with-anim mfp-hide">
          <div class="portfolio__project-img open popup-img"
            style="background-image: url('${modal.srcMobile}');"></div>
        </div>
      `
    })

    this.$modals.innerHTML = modalsList
  }
}

export default Poster