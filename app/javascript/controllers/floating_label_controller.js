// <%= box(controller: "floating-label") do %>
//   <%= text(label: 'Floating Title') %>
//   <%= input %>
// <% end %>

{/* <div data-controller="floating-label">
  <%= text(label: 'Floating Title') %>
  <%= input %>
</div> */}

import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['text', 'input']

  init() {
    // super.init()
    this.initTarget()
    // this.initComplete()
    useClickOutside(this, { element: this.inputTarget })
  }

  initTarget() {
    this.textControllerElement.setAttribute(`data-${this.identifier}-target`, 'text')
    this.inputControllerElement.setAttribute(`data-${this.identifier}-target`, 'input')
  }


  initAction() {
    // super.initAction()
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
      this.textController.open()
      this.inputController.open()
    } else {
      if (this.inputTarget.value.length === 0) { this.textController.close() }
      this.inputController.close()
    }
  }
  

  get type() {
    return this.paramsValue.type || 'default'
  }
  get typeClass() {
    return {
      default: {
        element: 'relative',
        textTarget: 'absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 open:top-0 duration-200 ease-out bg-gray-50 dark:bg-gray-900',
        inputTarget: '',
      }
    }
  }
  get textController() {
    return this.findController('text')
  }
  get inputController() {
    return this.findController('input')
  }
  get textControllerElement() {
    return this.findControllerElement('text')
  }
  get inputControllerElement() {
    return this.findControllerElement('input')
  }
}
