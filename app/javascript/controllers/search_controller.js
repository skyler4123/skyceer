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

  initParams() {
    this.setParams({name: 'type', defaultValue: 'default'})
  }

  init() {
    this.initTarget()
    useClickOutside(this, { element: this.inputTarget })
  }

  initTarget() {
    this.inputController.element.setAttribute(`data-${this.identifier}-target`, 'input')
    this.buttonController.element.setAttribute(`data-${this.identifier}-target`, 'button')
    this.popoverController.element.setAttribute(`data-${this.identifier}-target`, 'popover')
  }

  initAction() {
    this.addAction(this.inputTarget, `input->${this.identifier}#input keydown.enter->${this.identifier}#enterSearch`)
    this.addAction(this.buttonTarget, `click->${this.identifier}#buttonSearch`)
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
    if (this.isAutoSubmit) {
      this.search()
    }
  }

  get inputController() {
    return this.getChildrenControllerFromIdentifier('input')
  }
  get buttonController() {
    return this.getChildrenControllerFromIdentifier('button')
  }
  get popoverController() {
    return this.getChildrenControllerFromIdentifier('popover')
  }
  get url() {
    return this.inputController.paramsValue.url
  }
  get isAutoSubmit() {
    return this.inputController.paramsValue.isAutoSubmit
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

  get typeClass() {
    return {
      default: {
        element: 'relative flex flex-row justify-center items-center',
        inputTarget: '',
        popoverTarget: '',
        buttonTarget: '',
      }
    }
  }
}
