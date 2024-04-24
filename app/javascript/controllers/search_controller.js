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

  init() {
    this.initTarget()
    // this.initComplete()
    useClickOutside(this, { element: this.inputTarget })
  }

  initTarget() {
    this.inputControllerElement.setAttribute(`data-${this.identifier}-target`, 'input')
    this.buttonControllerElement.setAttribute(`data-${this.identifier}-target`, 'button')
    this.popoverControllerElement.setAttribute(`data-${this.identifier}-target`, 'popover')
  }

  initAction() {
    this.inputTarget.dataset.action = (this.inputTarget.dataset.action || '') + ` input->${this.identifier}#input keydown.enter->${this.identifier}#enterSearch`
    this.buttonTarget.dataset.action = (this.buttonTarget.dataset.action || '') + ` click->${this.identifier}#buttonSearch`
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
  get inputControllerElement() {
    return this.findControllerElement('input')
  }
  get buttonControllerElement() {
    return this.findControllerElement('button')
  }
  get popoverControllerElement() {
    return this.findControllerElement('popover')
  }
  get url() {
    return this.inputController.paramsValue.url
  }
  get autoSubmit() {
    return this.inputController.paramsValue.autoSubmit
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
