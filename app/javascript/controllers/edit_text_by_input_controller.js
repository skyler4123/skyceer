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

  init() {
    this.initTarget()
    // this.initComplete()  
  }

  connect() {
    super.connect()
    useClickOutside(this, { element: this.inputTarget })
  }
  
  initTarget() {
    this.textControllerElement.setAttribute(`data-${this.identifier}-target`, 'text')
    this.inputControllerElement.setAttribute(`data-${this.identifier}-target`, 'input')
  }

  initAction() {
    this.textTarget.dataset.action = (this.textTarget.dataset.action || '') + ` dblclick->${this.identifier}#tabInput`
    this.inputTarget.dataset.action = (this.inputTarget.dataset.action || '') + ` input->${this.identifier}#inputFitContent`
  }

  clickOutside(event) {
    this.tabText()
  }

  tabInput() {
    this.inputController.inputValue = this.textController.labelValue
    this.inputFitContent()
    this.tabController.tabToIndex(this.inputTabIndex)
  }

  tabText() {
    this.textController.labelValue = this.inputController.inputValue
    this.tabController.tabToIndex(this.textTabIndex)
  }

  inputFitContent() {
    this.inputTarget.style.width = this.inputController.inputValue.length + 'ch'
  }

  get tabController() {
    return this.application.getControllerForElementAndIdentifier(this.element, 'tab')
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
  get textTabIndex() {
    return this.tabController.tabIndexOf(this.textTarget)
  }
  get inputTabIndex() {
    return this.tabController.tabIndexOf(this.inputTarget)
  }
  get textWidth() {
    return this.textController.element.offsetWidth
  }
  get type() {
    return this.paramsValue.type || 'default'
  }
  get typeClass() {
    return {
      default: {
        element: 'relative'
      }
    }
  }
}
