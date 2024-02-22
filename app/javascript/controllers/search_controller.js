// <%= box(controller: 'search') do %>
//   <%= input(placeholder: 'acb...xyz') %>
//   <%= button(label: 'Search') %>
//   <%= popover do %>
//     <p>Response from BE</p>
//   <% end %>
// <% end %>

import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['input', 'button', 'popover']
  static values = {
    ...super.values,
    input: { type: String },
  }

  initialize() {}
  init() {
    console.log(this)
    this.initializeTarget()
    // this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  connect() {
    super.connect()
    setTimeout(() => {
      useClickOutside(this, { element: this.inputTarget })
    }, 1000)
  }

  initializeTarget() {
    setTimeout(() => {
      this.inputController.element.setAttribute(`data-${this.identifier}-target`, 'input')
      this.buttonController.element.setAttribute(`data-${this.identifier}-target`, 'button')
      this.popoverController.element.setAttribute(`data-${this.identifier}-target`, 'popover')
    }, 500)
  }

  initializeAction() {
    setTimeout(() => {
      this.inputTarget.dataset.action = (this.inputTarget.dataset.action || '') + ` input->${this.identifier}#input keydown.enter->${this.identifier}#enterSearch`
      this.buttonTarget.dataset.action = (this.buttonTarget.dataset.action || '') + ` click->${this.identifier}#buttonSearch`
    }, 750)
  }

  clickOutside(event) {
    if (this.popoverController.isOpenValue === true) { 
      this.closePopover()
     }
  }

  input() {
    this.inputValue = this.inputTarget.value
  }

  buttonSearch() {
    this.search()
  }

  enterSearch() {
    this.search()
  }

  search() {
    if (this.inputTarget.value.length === 0) { return }
    this.axios.get(this.url + `/${this.inputValue}`)
    .then((response) => {
      this.payload = [response.data].flat()
      this.updatePopoverHTML()
    })
    .catch((error) => {
      console.log(error);
    })
  }

  updatePopoverHTML() {
    if (this.payload.length === 0) {
      this.closePopover()
    } else {
      this.popoverController.element.innerHTML = this.popoverHTML
      this.openPopover()
    }
  }

  openPopover() {
    this.popoverController.open()
  }

  closePopover() {
    this.popoverController.close()
  }

  togglePopover() {
    this.popoverController.toggle()
  }

  inputValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }
    if (this.autoSubmit) {
      this.search()
    }
  }

  get inputController() {
    return this.findController('input')
  }
  get buttonController() {
    return this.findController('button')
  }
  get popoverController() {
    return this.findController('popover')
  }
  get url() {
    return this.inputController.optionsValue.url
  }
  get autoSubmit() {
    return this.inputController.optionsValue.autoSubmit
  }
  get popoverHTML() {
    return `
      <div class="flex flex-col">
        ${this.payload.map((row) => 
          `
            <div>${row.name}</div>
          `
          ).join('')}
      </div>
    `
  }
}
