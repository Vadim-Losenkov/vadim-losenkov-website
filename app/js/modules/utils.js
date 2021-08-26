function listGenerator(list) {
  return list.map(item => {
    `<li class="portfolio__project-item">${item}</li>`
  }).join('')
}