// <%= box(controller: 'search') do %>
//   <%= input(placeholder: 'acb...xyz') %>
//   <%= button(label: 'Search') %>
//   <%= popover do %>
//     <p>Response from BE</p>
//   <% end %>
// <% end %>

import ApplicationController from '../../controllers/application_controller'

export default class extends ApplicationController {
  static targets = ['input', 'button', 'popover']
  static values = {
    ...super.values,
    input: { type: String },
  }

  initialize() {
    this.initializeTarget()
    this.initializeComplete()
    useClickOutside(this, { element: this.inputTarget })
  }

}
