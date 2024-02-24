// <%= tab(controller: 'edit-text-by-input') do %>
//   <%= text(label: 'Text need edit')%>
//   <%= input(value: 'hahah') %>
// <% end %>

import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationController from './application_controller'

export default class EditTextByInput extends ApplicationController {
  static targets = ['text', 'input']

  initialize() {}
  init() {
    setTimeout(() => {
      this.initializeTarget()
      this.initializeAction()
      this.initializeComplete()  
      useClickOutside(this, { element: this.inputTarget })
    }, 1000)
  }

  connect() {
    super.connect()
    // useClickOutside(this, { element: this.inputTarget })
  }
  
  initializeTarget() {
    this.textController.element.setAttribute(`data-${this.identifier}-target`, 'text')
    this.inputController.element.setAttribute(`data-${this.identifier}-target`, 'input')
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
