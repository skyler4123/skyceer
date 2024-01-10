import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['switch']
  static values = {
    isOpen: { type: Boolean, default: true },
    action: { type: String },
    eventListener: { type: String },
    eventId: { type: String },

    showIndex: { type: Number, default: 0 },

    klass: { type: String, default: " " },
    switchClass: { type: String, default: " " },
    klassDefault: { type: String, default: " " },
    switchClassDefault: { type: String, default: " cursor-pointer" },

  }
  initialize() {
    this.initializeID()
    this.initializeTarget()
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

  initializeTarget() {
    this.switchTargets.forEach((target, index) => {
      target.setAttribute(`data-${this.identifier}-show-index-param`, (index + 1) % this.switchTargets.length)
      target.setAttribute('data-action', `click->${this.identifier}#switch`)
    })
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.switchTargets.forEach((target) => {
      target.className = target.className + ' ' + this.switchClassDefaultValue + ' ' + this.switchClassValue
    })
  }

  switch(event) {
    const showIndex = event.params.showIndex
    this.showIndexValue = showIndex
  }
  showIndexValueChanged() {
    this.switchTargets.forEach((target) => {
      target.classList.add('hidden')
    })
    this.switchTargets[this.showIndexValue].classList.remove('hidden')
  }

  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    if (!this.eventListenerValue) { return }

    if (this.eventListenerValue === 'click') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.actionValue}`
    }
    if (this.eventListenerValue === 'hover') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.actionValue} mouseleave->${this.identifier}#${this.actionValue}`
    }
  }

  globalDispatch({ detail: { payload } }) {
    if (this.eventIdValue === payload.id) {
      if (payload.action === "toggle") { this.toggle() }
      if (payload.action === "open") { this.open() }
      if (payload.action === "close") { this.close() }
    }
  }

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    if (event) {
      event.stopPropagation()
    }
  }

  open(event) {
    this.isOpenValue = true
    if (event) {
      event.stopPropagation()
    }
  }

  close(event) {
    this.isOpenValue = false
    if (event) {
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
