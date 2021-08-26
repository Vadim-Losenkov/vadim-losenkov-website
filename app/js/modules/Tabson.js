class Tabson {
  constructor(wrapper) {
    this.wrapper = wrapper

    this.$menu = null
    this.$items = null

    this.listener()
  }

  listener() {
    document.addEventListener('click', event => {
      const $wraper = event.target.closest(this.wrapper)
      const id = event.target.dataset.id
      if ($wraper && id) {
        this.$menu = $wraper.querySelector('[data-tabson="menu"]')
        this.$items = $wraper.querySelector('[data-tabson="items"]')

        this.opener(id)
      }
    })
  }

  opener(id) {
    this.close()

    this.$menu.querySelector(`[data-id="${id}"]`).classList.add('open')
    this.$items.querySelector(`[data-item="${id}"]`).classList.add('open')
  }

  close() {
    const menuList = this.$menu.querySelectorAll('[data-id]')
    const itemsList = this.$items.querySelectorAll('[data-item]')

    menuList.forEach($el => $el.classList.remove('open'))
    itemsList.forEach($el => $el.classList.remove('open'))
  }
}

export default Tabson