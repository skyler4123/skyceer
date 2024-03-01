// <%= box(controller: "floating-label") do %>
//   <%= label(label: 'Floating Title') %>
//   <%= input %>
// <% end %>

{/* <div data-controller="floating-label">
  <%= label(label: 'Floating Title') %>
  <%= input %>
</div> */}

import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['label', 'input']

  initialize() {
    super.initialize()
    this.initializeTarget()
    this.initializeComplete()
    useClickOutside(this, { element: this.inputTarget })
  }

  initializeTarget() {
    this.labelControllerElement.setAttribute(`data-${this.identifier}-target`, 'label')
    this.inputControllerElement.setAttribute(`data-${this.identifier}-target`, 'input')
  }


  initializeAction() {
    super.initializeAction()
    this.addAction(this.inputTarget, `click->${this.identifier}#click`)
  }

  clickOutside(event) {
    if (this.isOpenValue === false) { return }
    this.close()
  }
  
  click() {
    this.open()
  }

  isOpenValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }
    super.isOpenValueChanged(value, previousValue)
    if (this.isOpenValue) {
      this.labelController.open()
      this.inputController.open()
    } else {
      this.labelController.close()
      this.inputController.close()
    }
  }
  

  get type() {
    return this.optionsValue.type || 'default'
  }
  get typeClass() {
    return {
      default: {
        element: 'relative',
        labelTarget: 'absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 open:top-0 duration-200 ease-out bg-white',
        inputTarget: '',
      }
    }
  }
  get labelController() {
    return this.findController('label')
  }
  get inputController() {
    return this.findController('input')
  }
  get labelControllerElement() {
    return this.findControllerElement('label')
  }
  get inputControllerElement() {
    return this.findControllerElement('input')
  }
}
