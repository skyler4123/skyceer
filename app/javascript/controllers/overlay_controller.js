// <%= button(label: 'Test Overlay', klass: "relative w-60 h-40 bg-red-500", event: { id: new_id, action: :toggle, listener: :hover }) do %>
//   <%= accordion(controller: "overlay", orientation: :horizontal, klass: '') do %>
//     <div data-overlay-target="overlay" class="bg-green-500 w-60 h-40"></div>
//   <% end %>
// <% end %>

import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['overlay']

  initialize() {}
  init() {
    // console.log("Hello, Stimulus!", this.element);
    // this.initializeTarget()
    this.initializeClass()
  }

  // initializeTarget() {
  // }

  initializeClass() {
    this.element.className = this.twMerge(this.element.className, this.typeClass.klass)
    this.overlayTarget.className = this.twMerge(this.overlayTarget.className, this.typeClass.overlay)
  }

  get typeClass() {
    return {
      klass: 'absolute duration-300 top-0 left-0 ease-in-out',
      overlay: ''
    }
  }
  get parentController() {
    return this.element.closest('[data-controller]')
  }
}
