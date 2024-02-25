// <%= tab(controller: 'edit-text-by-input') do %>
//   <%= text(label: 'Text need edit')%>
//   <%= input(value: 'hahah') %>
// <% end %>

import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationController from './application_controller'

export default class EditTextByInput extends ApplicationController {
  static targets = ['text', 'input']

  initialize() {
    this.initializeTarget()
    this.initializeComplete()  
    useClickOutside(this, { element: this.inputTarget })
  }

  connect() {
    super.connect()
    // useClickOutside(this, { element: this.inputTarget })
  }
  
  initializeTarget() {
    this.textControllerElement.setAttribute(`data-${this.identifier}-target`, 'text')
    this.inputControllerElement.setAttribute(`data-${this.identifier}-target`, 'input')
  }

  initializeAction() {
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
    return this.application.getControllerForElementAndIdentifier(this.element, 'tab-component')
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
}
