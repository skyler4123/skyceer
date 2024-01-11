import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['tab']
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },

    showIndex: { type: Number, default: 0 },

    klass: { type: String, default: "" },
    tabClass: { type: String, default: "" },
    klassDefault: { type: String, default: "" },
    tabClassDefault: { type: String, default: "hidden open:flex cursor-pointer" },

  }
  initialize() {
    this.initializeID()
    this.initializeClass()
    this.initializeAction()
    
    this.initializeComplete()
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.tabTargets.forEach((target) => {
      target.className = target.className + ' ' + this.tabClassDefaultValue + ' ' + this.tabClassValue
    })
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

  tab(payload) {
    this.showIndexValue = payload.event.value
  }

  showIndexValueChanged(value, previousValue) {
    this.tabTargets.forEach((target) => {
      target.removeAttribute('open')
    })
    this.tabTargets[this.showIndexValue].setAttribute('open', '')
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
