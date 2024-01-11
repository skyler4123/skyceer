import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"]
  static values = {
    isOpen: { type: Boolean, default: false },
    event: { type: Object },

    position: { type: String, default: 'bottom_center' },

    klass: { type: String, default: "w-40" },
    contentClass: { type: String, default: "" },
    klassDefault: { type: String, default: "open:flex" },
    contentClassDefault: { type: String, default: "" }
  }

  initialize() {
    this.initializeID()
    this.initializeClass()
    this.initializeAction()
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }

  initializeClass() {
    this.klassDefaultValue = this.klassDefaultValue + ' ' + this.positionClass()[this.positionValue]

    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
  }

  positionClass() {
    return {
      'bottom_left': 'absolute justify-center items-center left-0 bottom-0 translate-y-full py-2',
      'bottom_center': 'absolute justify-center items-center right-1/2 bottom-0 translate-y-full translate-x-1/2 py-2',
      'bottom_right': 'absolute justify-center items-center right-0 bottom-0 translate-y-full py-2',

      'top_right': 'absolute justify-center items-center top-0 right-0 -translate-y-full py-2',
      'top_left': 'absolute justify-center items-center top-0 left-0 -translate-y-full py-2',
      'top_center': 'absolute justify-center items-center top-0 left-1/2 -translate-y-full -translate-x-1/2 py-2',

      'left_top': 'absolute justify-center items-center left-0 top-0 -translate-x-full px-2',
      'left_bottom': 'absolute justify-center items-center left-0 bottom-0 -translate-x-full px-2',
      'left_center': 'absolute justify-center items-center left-0 top-1/2 -translate-x-full -translate-y-1/2 px-2',

      'right_top': 'absolute justify-center items-center right-0 top-0 translate-x-full px-2',
      'right_bottom': 'absolute justify-center items-center right-0 bottom-0 translate-x-full px-2',
      'right_center': 'absolute justify-center items-center right-0 top-1/2 translate-x-full -translate-y-1/2 px-2'
    }
  }

  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    if (!this.eventValue) { return }

    if (this.eventValue.listener === 'click') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.eventValue.action}`
    }
    if (this.eventValue.listener === 'hover') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.eventValue.action} mouseleave->${this.identifier}#${this.eventValue.action}`
    }
  }

  globalDispatch({ detail: { payload } }) {
    if (this.eventValue.id === payload.event.id) {
      eval(`this.${payload.event.action}(payload)`)
    }
  }

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    if (event.target) {
      event.stopPropagation()
    }
  }

  open(event) {
    this.isOpenValue = true
    if (event.target) {
      event.stopPropagation()
    }
  }

  close(event) {
    this.isOpenValue = false
    if (event.target) {
      event.stopPropagation()
    }
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
