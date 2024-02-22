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
      this.inputTarget.dataset.action = (this.inputTarget.dataset.action || '') + ` input->${this.identifier}#input keydown.enter->${this.identifier}#search`
      this.buttonTarget.dataset.action = (this.buttonTarget.dataset.action || '') + ` click->${this.identifier}#search`
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

  async search() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.payload = users

    this.updatePopoverHTML()
    this.openPopover()
  }

  updatePopoverHTML() {
    this.popoverController.element.innerHTML = this.popoverHTML
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
    // if (previousValue === undefined) { return }
    // this.closePopover()
    // this.search()
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
