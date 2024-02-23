// <%= box(controller: 'floating-label', klass: 'bg-gray-200 p-2') do %>
//   <%= label(label: 'khkhlkl') %>
//   <%= input %>
// <% end %>

import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['label', 'input']

  initialize() {}
  init() {
    this.initializeTarget()
    this.initializeClass()
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
      this.labelController.element.setAttribute(`data-${this.identifier}-target`, 'label')
      this.inputController.element.setAttribute(`data-${this.identifier}-target`, 'input')
    }, 500)
  }

  initializeClass() {
    this.mergeClass(this.element, this.defaultClass.klass)
    setTimeout(() => {
      this.labelTarget.className = this.twMerge(this.labelTarget.className, this.defaultClass.labelClass)
      this.inputTarget.className = this.twMerge(this.inputTarget.className, this.defaultClass.inputClass)
    }, 500)
  }

  initializeAction() {
    setTimeout(() => {
      this.inputTarget.dataset.action = (this.inputTarget.dataset.action || '') + `click->${this.identifier}#click`
    }, 500)
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
  
  get defaultClass() {
    return {
      klass: 'relative',
      labelClass: 'absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 open:top-0 duration-200 ease-out bg-white',
      inputClass: '',
    }
  }

  get labelController() {
    return this.findController('label')
  }
  get inputController() {
    return this.findController('input')
  }
}
