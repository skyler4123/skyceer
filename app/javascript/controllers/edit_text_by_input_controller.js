// <%= tab(controller: 'edit-text-by-input') do %>
//   <div><%= text(label: 'Text need edit')%></div>
//   <div><%= input %></div>
// <% end %>

import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationController from './application_controller'

export default class EditTextByInput extends ApplicationController {
  static targets = ['text', 'input']
  static values = {
    ...super.values,
  }

  initParams() {
    this.setParams({name: 'type', defaultValue: 'default'})
  }

  init() {
    this.initTarget()
    useClickOutside(this, { element: this.inputTarget })
  }

  // connect() {
  //   super.connect()
  //   useClickOutside(this, { element: this.inputTarget })
  // }
  
  initTarget() {
    this.textController.element.setAttribute(`data-${this.identifier}-target`, 'text')
    this.inputController.element.setAttribute(`data-${this.identifier}-target`, 'input')
  }

  initAction() {
    this.textTarget.dataset.action = (this.textTarget.dataset.action || '') + ` dblclick->${this.identifier}#tabToInput`
    this.inputTarget.dataset.action = (this.inputTarget.dataset.action || '') + ` input->${this.identifier}#inputFitContent`
  }

  clickOutside(event) {
    this.tabToText()
  }

  tabToInput() {
    this.inputController.inputValue = this.textController.labelValue
    this.inputFitContent()
    this.tabController.tabToIndex(this.inputTabIndex)
  }

  tabToText() {
    this.textController.labelValue = this.inputController.inputValue
    this.tabController.tabToIndex(this.textTabIndex)
  }

  inputFitContent() {
    this.inputTarget.style.width = this.inputController.inputValue.length + 'ch'
  }

  get tabController() {
    return this.application.getControllerForElementAndIdentifier(this.element, 'tab')
  }
  get textControllerElement() {
    return this.element.querySelector('[data-controller*=text]')
  }
  get textController() {
    return this.application.getControllerForElementAndIdentifier(this.textControllerElement, 'text')
  }
  get inputControllerElement() {
    return this.element.querySelector('[data-controller*=input]')
  }
  get inputController() {
    return this.application.getControllerForElementAndIdentifier(this.inputControllerElement, 'input')
  }
  get textTabIndex() {
    return this.tabController.tabIndexOf(this.textTarget)
  }
  get inputTabIndex() {
    return this.tabController.tabIndexOf(this.inputTarget)
  }
  get textWidth() {
    return this.textController.element.offsetWidth
  }

  get typeClass() {
    return {
      default: {
        element: 'relative'
      }
    }
  }
}
