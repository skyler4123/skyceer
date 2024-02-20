// <%= button(controller: 'edit-text-by-editor', events: [{ id: new_id, action: :tab_last, listener: :dblclick }, { id: id, action: :tab_first, listener: :click_outside }]) do %>
// <%= tab(event: { id: id }) do |c| %>
//   <%= text(label: 'Text need edit')%>
//   <%= input(value: 'hahah') %>
// <% end %>
// <% end %>

import ApplicationController from './application_controller'

export default class EditTextByEditor extends ApplicationController {
  init() {
    this.initAction()

    this.initializeComplete()
  }

  initAction() {
    setTimeout(() => {
      this.buttonController.dataActions.forEach((action) => {
        if (action.includes('click:outside')) { this.clickOutsideAction = action }
      })
      this.buttonController.removeAction(this.clickOutsideAction)
    }, 500)
  }

  tabLast() {
    this.editorController.inputValue = this.textController.labelValue
    this.buttonController.addAction(this.clickOutsideAction)
  }

  tabFirst() {
    this.textController.labelValue = this.editorController.inputValue
    this.buttonController.removeAction(this.clickOutsideAction)
  }

  get buttonController() {
    return this.application.getControllerForElementAndIdentifier(this.element, 'button-component')
  }

  get textController() {
    return this.findController('text-component')
  }

  get editorController() {
    return this.findController('input-component')
  }
}
