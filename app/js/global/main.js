/* 
const posts = [
  {
    title: 'borowan',
    link: 'https://vadim-losenkov.ru/borowan',
    time: '1 неделя 5 деней',
    description: 'Корпоративный сайт немецкой правовой компании. При разработке использовался Bootstrap 4 и JQuery',
    srcDesc: 'images/content/borowan.jpg',
    srcMobile: 'images/content/borowan-mob.jpg',
    groups: '"all", "mp"',
    modal: {
      text: '<b>Выбирите:</b><br>перейти на главную / открыть карту сайта',
      buttons: [
        {name: 'главная', url: 'https://vadim-losenkov.ru/borowan/index.html'},
        {name: 'карта', url: 'https://vadim-losenkov.ru/borowan/map.html'}
      ]
    },
    useList: [
      'HTML5',
      'Flexbox',
      'CSS',
      'JavaScript',
      'JQuery',
      'Bootstrap 4',
      'Gulp 5'
    ] 
  },
  {
    title: 'english',
    link: 'https://vadim-losenkov.ru/english',
    time: '2 недели 1 день',
    description: 'Сайт для репетитора по английскому языку. Разработка велась на SCSS + JS, без использования JQuery',
    srcDesc: 'images/content/english.jpg',
    srcMobile: 'images/content/english-mob.jpg',
    groups: '"all", "mp"',
    modal: {
      text: '<b>Выбирите:</b><br>перейти на главную / открыть карту сайта',
      buttons: [
        {name: 'главная', url: 'https://vadim-losenkov.ru/english/index.html'},
        {name: 'карта', url: 'https://vadim-losenkov.ru/english/map.html'}
      ]
    },
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JavaScript',
      'Gulp 5'
    ] 
  },
  {
    title: 'SEO',
    link: 'https://vadim-losenkov.ru/seo',
    time: '1 неделя 1 день',
    description: 'Cайт продажник компании по продвижению бизнес проектов. Разработка велась на SCSS + JS. JQuery не используется',
    srcDesc: 'images/content/seo.jpg',
    srcMobile: 'images/content/seo-mob.jpg',
    groups: '"all", "land"',
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JQuery',
      'JavaScript',
      'Gulp 5'
    ] 
  },
  {
    title: 'Crypto',
    link: 'https://vadim-losenkov.ru/crypto/lang-ru.html',
    time: '5 дней',
    description: 'Небольшой сайт продажник инвестиций в криптовалюты. Сайт был разработан всего за 5 дней. При адаптировании сайта все элементы сайта сохранены.',
    srcDesc: 'images/content/crypto.jpg',
    srcMobile: 'images/content/crypto-mob.jpg',
    groups: '"all", "land"',
    modal: {
      text: '<b>Выбирите:</b><br>русскоязычная версия сайта / англоязычная версия сайта',
      buttons: [
        {name: 'RU', url: 'https://vadim-losenkov.ru/crypto/lang-ru.html'},
        {name: 'ENG', url: 'https://vadim-losenkov.ru/crypto/lang-en.html'}
      ]
    },
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JQuery',
      'JavaScript',
      'Gulp 5'
    ] 
  },
  {
    title: 'Rabit',
    link: 'https://vadim-losenkov.ru/rabit',
    time: '3 недели 4 дня',
    description: 'Большой 13-ти страничный сайт компани специализирующейся на починке техники. страниц у сайта не соеденены между собой, поэтому предоставлена карта сайта',
    srcDesc: 'images/content/rabit.jpg',
    srcMobile: 'images/content/rabit-mob.jpg',
    groups: '"all", "ecom", "mp"',
    modal: {
      text: '<b>Выбирите:</b><br>перейти на главную / открыть карту сайта',
      buttons: [
        {name: 'главная', url: 'https://vadim-losenkov.ru/rabit/main.html'},
        {name: 'карта', url: 'https://vadim-losenkov.ru/rabit/index.html'}
      ]
    },
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JQuery',
      'JavaScript',
      'Gulp 5'
    ] 
  },
  {
    title: 'Karavan',
    link: 'https://vadim-losenkov.ru/karavan',
    time: '2 недели 2 дня',
    description: 'Сайт выполнен для сети магазинов karavan. Состоит из 5 странтц, каждая страница адаптирована, сам сайт оптимизирован на оценку 90+ на сайте Google Page Speed.',
    srcDesc: 'images/content/karavan.jpg',
    srcMobile: 'images/content/karavan-mob.jpg',
    groups: '"all", "mp"',
    modal: {
      text: '<b>Выбирите:</b><br>перейти на главную / открыть карту сайта',
      buttons: [
        {name: 'главная', url: 'https://vadim-losenkov.ru/karavan/'},
        {name: 'карта', url: 'https://vadim-losenkov.ru/karavan/map.html'}
      ]
    },
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JQuery',
      'JavaScript',
      'Gulp 5'
    ] 
  },
  {
    title: 'LemonForTea',
    link: 'https://vadim-losenkov.ru/lemonfortea',
    time: '2 недели 2 дня',
    description: 'Небольшой 5-и страничный магазин, на котором используется множество различных технологий, используется как продажник для курса по инвестициям от популярного сообщества',
    srcDesc: 'images/content/lemonfortea-mob.jpg',
    srcMobile: 'images/content/lemonfortea.jpg',
    groups: '"all", "mp"',
    modal: {
      text: '<b>Выбирите:</b><br>перейти на главную / открыть карту сайта',
      buttons: [
        {name: 'главная', url: 'https://vadim-losenkov.ru/lemonfortea/main.html'},
        {name: 'карта', url: 'https://vadim-losenkov.ru/lemonfortea/index.html'}
      ]
    },
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JQuery',
      'JavaScript',
      'Gulp 5'
    ] 
  },
  {
    title: 'GMbet',
    link: 'https://vadim-losenkov.ru/gmbet',
    time: '1 неделя 3 дня',
    description: 'Стандартный одностраничник (landing-page), созданный для инвестирования в ставки на спорт. Используется современные технологии',
    srcDesc: 'images/content/gmbet.jpg',
    srcMobile: 'images/content/gmbet-mob.jpg',
    groups: '"all", "land"',
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JQuery',
      'JavaScript',
      'Gulp 5'
    ]
  },
  {
    title: 'book-house',
    link: 'https://vadim-losenkov.ru/book-house',
    time: '7 недель 2 дня',
    description: 'Большой интернет магазин, на котором используется множество различных технологий, состоящий из 25 страниц. Каждая страница адаптивна (хорошо выглядит как на ПК так и на телефоне).',
    srcDesc: 'images/content/project-book.jpg',
    srcMobile: 'images/content/project-book-mobile.jpg',
    groups: '"all", "ecom", "mp"',
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JavaScript',
      'Gulp 5'
    ],
    modal: {
      text: '<b>Выбирите:</b><br>перейти на главную / открыть карту сайта',
      buttons: [
        {name: 'главная', url: 'https://vadim-losenkov.ru/book-house/main.html'},
        {name: 'карта', url: 'https://vadim-losenkov.ru/book-house/index.html'}
      ]
    },
  },
  {
    title: 'design-repair',
    link: 'https://vadim-losenkov.ru/design-repair',
    time: '1 неделя 6 дней',
    description: 'landing-page (одностраничный сайт) с использованием $, созданный для компании дизайнеров в городе Ростов-На-Дону. Сайт адаптирован под мобильные устройства',
    srcDesc: 'images/content/design.jpg',
    srcMobile: 'images/content/design-mobile.jpg',
    groups: '"all", "land"',
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JavaScript',
      'JQuery',
      'Gulp 5'
    ]
  },
  {
    title: 'inventa',
    link: 'https://vadim-losenkov.ru/inventa',
    time: '2 недели 1 день',
    description: 'Сайт компании, предоставляющей услуги установки подогреваемых полов. Сайт выполнен с большим использованием JavaScript без использования $. Адаптирован под мобильные телефоны', 
    srcDesc: 'images/content/inventa.jpg',
    srcMobile: 'images/content/inv-mobile.jpg',
    groups: '"all", "land"',
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JavaScript',
      'Gulp 5'
    ]
  },
  {
    title: 'vpn',
    link: 'https://vadim-losenkov.ru/vpn',
    time: '1 неделя 4 дня',
    description: 'Небольшой сайт, для продажи vpn серверов. Был выполнен с использованием технологии Flexbox + $. Адаптирован под мобильные устройства',
    srcDesc: 'images/content/vpn.jpg',
    srcMobile: 'images/content/vpn-mobile.jpg',
    groups: '"all", "land"',
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JavaScript',
      'JQuery',
      'Gulp 5'
    ]
  },
  {
    title: 'rocket',
    link: 'https://vadim-losenkov.ru/rocket',
    time: '4 дня',
    description: 'Сайт выполнен с целью демонстрации моих умений в области верстки, поэтому не наполнен контентом. Сайт адаптивен для мобильных устройств',
    srcDesc: 'images/content/rocket.jpg',
    srcMobile: 'images/content/rocket-mob.jpg',
    groups: '"all", "land"',
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JavaScript',
      'JQuery',
      'Gulp 5'
    ]
  },
  {
    title: 'StroyControl',
    link: 'https://vadim-losenkov.ru/StroyControl',
    time: '1 неделя 2 дня',
    description: 'Сайт выполнен для компании занимающейся доставкой строительных материалов. На сайте используется несколько $ плагинов, что не мешает его производительности (90+ баллов на GPSpeed). Сайт полностью адаптирован под мобильные устройства',
    srcDesc: 'images/content/stroy.jpg',
    srcMobile: 'images/content/stroy-mobile.jpg',
    groups: '"all", "land"',
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JavaScript',
      'JQuery',
      'Gulp 5'
    ]
  },
  {
    title: 'Supplement',
    link: 'https://vadim-losenkov.ru/supplement',
    time: '6 дней',
    description: 'Сайт выполнен с целью демонстрации моих умений в области верстки, поэтому не наполнен контентом. Сайт адаптивен для мобильных устройств',
    srcDesc: 'images/content/supplement.jpg',
    srcMobile: 'images/content/supplement-mobile.jpg',
    groups: '"all", "land"',
    useList: [
      'HTML5',
      'Flexbox',
      'SCSS',
      'JavaScript',
      'JQuery',
      'Gulp 5'
    ]
  },
]
const reviews = [
  {
    name: 'Екатерина Слипченко',
    price: [50, 1420, 3659],
    title: 'Верстка лэндинга',
    description: 'Спасибо Вадиму за работу! Все выполнено в срок, все пожелания учтены. Рекомендую Вадима как профессионала и ответственного исполнителя!',
    date: '04.11.2021 в 12:30',
    link: 'https://www.weblancer.net/projects/html-verstka-32/verstka-lendinga-1135368/'
  },
  {
    name: 'Данил Язычев',
    price: [50, 1420, 3659],
    title: 'Верстка сайта',
    description: 'Отличная работа',
    date: '28.10.2021 в 18:48',
    link: 'https://www.weblancer.net/projects/html-verstka-32/verstka-sajta-1136683/'
  },
  {
    name: 'Игорь Нагибин',
    price: [10, 1420, 3659],
    title: 'Адаптивная верстка страницы',
    description: 'Верстка отличная, все было выполнено вовремя. Рекомендую!',
    date: '24.10.2021 в 17:13',
    link: 'https://www.weblancer.net/projects/html-verstka-32/adaptivnaya-verstka-stranitcy-1135792/'
  },
  {
    name: 'Данила Катышев',
    price: [5, 1420, 3659],
    title: 'Сделать горизонтальный аккардион для сайта на jQuery.',
    description: 'Хороший специалист. Сделал быстро и качественно. Рекомендую.',
    date: '15.09.2021 в 16:28',
    link: 'https://www.weblancer.net/projects/veb-programmirovanie-31/sdelat-gorizontalynyj-akkardion-dlya-sajta-na-jquery-1128976/'
  },
  {
    name: 'Александр Сазанов',
    price: [30, 1420, 3659],
    title: 'Адаптивная верстка',
    description: 'Сделал все оперативно, недочетов в работе не нашел. Хороший исполнитель',
    date: '04.09.2021 в 14:27',
    link: 'https://www.weblancer.net/projects/html-verstka-32/adaptivnaya-verstka-1127051/'
  },
  {
    name: 'Герасим Дяченко',
    price: [35, 1420, 3659],
    title: 'Верстка сайта',
    description: 'Все сделано быстро, качественно. Анимации сделаны как и договаривались. Всем советую этого верстальщика',
    date: '03.09.2021 в 08:46',
    link: 'https://www.weblancer.net/projects/html-verstka-32/verstka-sajta-1126786/'
  },
  {
    name: 'Игорь Бильченко',
    price: [12, 1420, 3659],
    title: 'Верстка блока сайта с видео',
    description: 'Разработчик сделал все по тз, нужный функиционал добавил на wordpress. Советую',
    date: '24.07.2021 в 20:04',
    link: 'https://www.weblancer.net/projects/html-verstka-32/verstka-bloka-sajta-s-video-1120256/'
  },
  {
    name: 'Виктор Шилов',
    price: [15, 1420, 3659],
    title: 'Сверстать меню',
    description: 'Быстро и качественно. Крутой верстальщик 🔥',
    date: '04.07.2021 в 19:40',
    link: 'https://www.weblancer.net/projects/html-verstka-32/sverstat-menyu-1117337/'
  },
  {
    name: 'Александр Випсилинг',
    price: [10, 1420, 3659],
    title: 'Адаптивная html-вёрстка модуля сайта',
    description: 'Вежливо, оперативно, точно. Спасибо за работу',
    date: '30.06.2021 в 11:05',
    link: 'https://www.weblancer.net/projects/html-verstka-32/adaptivnaya-html-vyorstka-modulya-sajta-1116781/'
  },
  {
    name: 'Евгений Мошкин',
    price: [8, 1420, 3659],
    title: 'Анимации на сайте',
    description: 'Разработчик довольно быстро справился с поставленной задачей. Советую!',
    date: '29.06.2021 в 13:44',
    link: 'https://www.weblancer.net/projects/animatciya-39/animatcii-na-sajte-1116535/'
  },
  {
    name: 'Зоя Осаева',
    price: [30, 1420, 3659],
    title: 'Сверстать страницу контактов',
    description: 'Хороший исполнитель. Сверстал страницу по дизайну. Меня все устроило, буду обращаться еще',
    date: '27.06.2021 в 18:58',
    link: 'https://www.weblancer.net/projects/html-verstka-32/sverstat-stranitcu-kontaktov-1116384/'
  },
  {
    name: 'Петр Чимоданов',
    price: [50, 1420, 3659],
    title: 'Верстка лэндинга',
    description: 'Хорошо сверстал, сделал анимации. Рекомендую',
    date: '24.06.2021 в 14:13',
    link: 'https://www.weblancer.net/projects/html-verstka-32/verstka-lendinga-1115676/'
  },
  {
    name: 'Эдуард Хаврон',
    price: [10, 284, 732],
    title: 'Добавить на сайт калькулятор',
    description: 'Рекомендую. Все сделано по тз, сроки соблюдены, нужные правки внесены.',
    date: '23.06.2021 в 11:24',
    link: 'https://www.weblancer.net/projects/veb-programmirovanie-31/dobavit-na-sajt-kalykulyator-1115887/'
  },
  {
    name: 'Алексей Гречко',
    price: [25, 1420, 3659],
    title: 'Галерея',
    description: 'Спасибо за работу. Рекомендую',
    date: '10.06.2021 в 13:34',
    link: 'https://www.weblancer.net/projects/html-verstka-32/galereya-1113783/'
  },
  {
    name: 'Алексей Гречко',
    price: [18, 1420, 3659],
    title: 'Верстка модального окна',
    description: 'Отличный верстальщик, сверстал модалку пиксель перфект, прикрутил на js\'е. Претензий нет, буду обращаться еще.',
    date: '08.06.2021 в 22:52',
    link: 'https://www.weblancer.net/projects/html-verstka-32/verstka-modalynogo-okna-1113359/'
  },
  {
    name: 'Алекс Рубалов',
    price: [5, 1420, 3659],
    title: 'Поменять слайдер',
    description: 'Хороший разработчик, знает js на отличном уровне. Оптимизировал на моем сайте отдельные элементы, переписал слайдер, как и требовалось по ТЗ. \n\n Отличный разработчик. Рекомендую.',
    date: '06.05.2021 в 19:16',
    link: 'https://www.weblancer.net/projects/veb-programmirovanie-31/pomenyat-slajder-1109074/'
  },
  {
    name: 'Артем Василенков',
    price: [15, 1420, 3659],
    title: 'Переписать сайт с $ на js',
    description: 'Вадим выполнил задание максимально точно, даже не пришлось вносить правок. Сроки соблюдены. \n\n Осталось крайне положительное впечатление. Рекомендую!',
    date: '30.04.2021 в 09:22',
    link: 'https://www.weblancer.net/projects/veb-programmirovanie-31/perepisat-sajt-s-$-na-js-1107750/'
  },
  {
    name: 'Владимир Кузнецов',
    price: [10, 1420, 3659],
    title: 'Мелкие правки на сайте',
    description: 'Отличный разработчик. Делает все в срок, быстро отвечает на сообщения. Помог решить мою проблему.',
    date: '30.04.2021 в 20:58',
    link: 'https://www.weblancer.net/projects/html-verstka-32/melkie-pravki-na-sajte-1106901/'
  },
  {
    name: 'Евгений Мошкин',
    price: [10, 1420, 3659],
    title: 'Анимации на сайте',
    description: 'Разработчик довольно быстро справился с поставленной задачей. Советую!',
    date: '29.06.2021 в 13:44',
    link: 'https://www.weblancer.net/projects/html-verstka-32/melkie-pravki-na-sajte-1106901/'
  },
  {
    name: 'Алексей Иванов',
    price: [24, 1420, 3659],
    title: 'Адаптировать верстку',
    description: 'Скептически относился к разработчику, т.к. не было отзывов. Решил рискнуть - остался доволен. Могу рекомендовать. Человек ответственный. Результат работы устроил на 100%',
    date: '28.04.2021 в 19:30',
    link: 'https://www.weblancer.net/projects/html-verstka-32/adaptirovat-verstku-1106719/'
  },
]
*/

let posts
let reviews
 
class Poster {
  constructor(selectors = {}) {
    this.$main = document.querySelector(selectors.portfolio)
    this.$modals = document.querySelector(selectors.modals)
    
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
            <div class="portfolio__project-image swiper-container mySwiper">
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

class Filter {
  constructor(selector, settings) {
    this.$main = document.querySelector(selector)
    this.settings = settings
    
    this.$filter = []
    this.$items = []
    
    this.activeElements = []
    this.init()
  }
  
  init() {
    this.filterInit()
    this.itemsInit()
    
    this.activeElements = this.$items
    this.filterItems(this.settings.filter.activeElements)
  }
  
  filterInit() {
    this.$filter = this.settings.filter.selectors.map(selector => {
      if (typeof selector === 'string') {
        return this.$main.querySelector(selector)
      }
      return selector
    })
          
    this.$filter.forEach($el => {
      const act = $el.querySelector(`[data-target=${this.settings.filter.activeElements}]`)
          .classList.add(this.settings.filter.activeItemClass)
          
      const $targetList = $el.querySelectorAll('[data-target]')
      $el.addEventListener('click', () => {
        const $btn = event.target.closest('[data-target]')

        if ($btn) {
          $targetList.forEach($filterEl => $filterEl.classList.remove(this.settings.filter.activeItemClass))
          $btn.classList.add(this.settings.filter.activeItemClass)
          const type = $btn.dataset.target
          this.filterItems(type)
        }
      })
    })
  }
  
  itemsInit() {
    const $main = this.$main.querySelector(this.settings.items.wrapper)
    this.$items = $main.querySelectorAll(this.settings.items.item)
  }
  
  filterItems(type) {
    this.classAdder(this.activeElements, 'remove')
    setTimeout(() => {
      this.activeElements = []
      this.$items.forEach($item => {
        const attr = JSON.parse($item.getAttribute('data-groups'))
        if (attr.includes(type)) {
          this.activeElements.push($item)
        }
      })
      this.classAdder(this.activeElements, 'add')
    }, this.settings.transitionSpeed);
  }
  
  classAdder($elements, type) {
    let disp
    if (type === 'remove') {
      $elements.forEach($el => {
        disp = $el.style.display
        $el.classList.remove('l-filter--visible')
        $el.classList.add('l-filter--hidden')
      })
      setTimeout(function() {
        $elements.forEach($el => {
          $el.style.display = 'none'
        })
      }, this.settings.transitionSpeed);
    } else if (type === 'add') {
      $elements.forEach($el => {
        $el.style.display = 'block'
      })
      $elements.forEach($el => {
        setTimeout(() => {
          $el.classList.add('l-filter--visible')
          $el.classList.remove('l-filter--hidden')
        }, 50);
      })
    }
  }
}

axios.get('https://61ac9c7ed228a9001703ab64.mockapi.io/posts').then((resp) => {
  posts = resp.data
  new Poster({
    portfolio: '[data-portfolio="wrapper"]',
    modals: '[data-modal="wrapper"]',
  })
  axios.get('https://61ac9c7ed228a9001703ab64.mockapi.io/reviews').then((resp) => {
    reviews = resp.data
    new Reviews('#reviews')
    
    new Filter('.main', {
      items: {
        wrapper: '.box',
        item: '.filter-page'
      },
      filter: {
        selectors: [$1, $2],
        activeItemClass: 'open',
        activeElements: 'portfolio'
      },
      transitionSpeed: 300,
    })
    new Filter('.box', {
      items: {
        wrapper: '.portfolio__inner',
        item: '.project-card'
      },
      filter: {
        selectors: ['.portfolio__filter-inner'],
        activeItemClass: 'open',
        activeElements: 'all'
      },
      transitionSpeed: 300,
    })
    
    new Swiper(".mySwiper", {
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
})

const $1 = document.querySelector('.mobile-menu__list')
const $2 = document.querySelector('.nav-list')

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
  
  
	var progressPath = document.querySelector('.progress-wrap path');
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength / height);
		progressPath.style.strokeDashoffset = progress;
	}
	updateProgress();
	$(window).scroll(updateProgress);	
	var offset = 50;
	var duration = 550;
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