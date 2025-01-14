import "choices"

import { Controller } from "@hotwired/stimulus"


export default class ChoicesController extends Controller {
  static values = {
    options: { type: Object, default: {
      removeItemButton: true,
    } },
  }

  initialize() {
    this.choice = new Choices(this.element, {
      ...this.optionsValue,
    })
  }
}
