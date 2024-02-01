import { Controller } from "@hotwired/stimulus";

export default class BaseComponentController extends Controller {
  // connect() {
  //   console.log("Hello, Stimulus!", this.element);
  // }

  get dir() {
    return this.optionsValue.dir || false
  }
  get klass() {
    return this.optionsValue.klass
  }
  get contentClass() {
    return this.optionsValue.contentClass
  }
  get id() {
    return this.element.id
  }
  get isTest() {
    return this.optionsValue.isTest
  }
  get event() {
    return this.optionsValue.event
  }
  get eventId() {
    return this.event?.id || this.optionsValue.eventId || this.parentButtonEventId
  }
  get parentButtonController() {
    if (this.element.parentNode.closest('[data-controller]').dataset.controller.includes('button-component')) {
      return this.element.parentNode.closest('[data-controller*="button-component"]')
    } else {
      return false
    }
  }
  get parentButtonEventId() {
    if (this.parentButtonController) {
      return JSON.parse(this.parentButtonController.dataset.buttonComponentOptionsValue).events[0].id
    }
  }
  get position() {
    return this.optionsValue.position
  }
  get type() {
    return this.optionsValue.type
  }
  get border() {
    return this.optionsValue.border
  }
  get color() {
    return this.optionsValue.color
  }

}
