import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['switch']
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },
    canSendGlobalDispatch: { type: Boolean, default: false },
    canReceiveGlobalDispatch: { type: Boolean, default: false },

    showIndex: { type: Number, default: 0 },

    klass: { type: String, default: "" },
    switchClass: { type: String, default: "" },
    klassDefault: { type: String, default: "" },
    switchClassDefault: { type: String, default: "hidden open:flex cursor-pointer" },

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
      if (!this.eventValue?.id) {
        if (this.eventValue.listener === 'click') {
          target.dataset.action = (target.dataset.action || '') + ' ' + `click->${this.identifier}#${this.eventValue.action}`
        }
        if (this.eventValue.listener === 'hover') {
          target.dataset.action = (target.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.eventValue.action} mouseleave->${this.identifier}#${this.eventValue.action}`
        }
      }
    })
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.switchTargets.forEach((target) => {
      target.className = target.className + ' ' + this.switchClassDefaultValue + ' ' + this.switchClassValue
    })
  }

  switch(event) {
    let showIndex
    if (event.target) {
      showIndex = event.params.showIndex
      event.stopPropagation()
    } else {
      showIndex = (this.showIndexValue + 1) % this.switchTargets.length
    }
    this.showIndexValue = showIndex
  }

  initializeAction() {
    if (this.eventValue?.id && this.eventValue?.listener && this.eventValue?.action) {
      this.canSendGlobalDispatchValue = true
    }
    if (this.eventValue?.id && !this.eventValue?.listener && !this.eventValue?.action) {
      this.canReceiveGlobalDispatchValue = true
    }
  }

  canSendGlobalDispatchValueChanged(value, previousValue) {
    if (this.canSendGlobalDispatchValue) {
      if (this.eventValue.listener === 'click') {
        this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.eventValue.action}`
      }
      if (this.eventValue.listener === 'hover') {
        this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.eventValue.action} mouseleave->${this.identifier}#${this.eventValue.action}`
      }
    }
  }

  canReceiveGlobalDispatchValueChanged() {
    if (this.canReceiveGlobalDispatchValue) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
  }

  globalDispatch({ detail: { event } }) {
    if (this.eventValue.id === event.id && this.element.id !== event.controller.element.id) {
      eval(`this.${event.action}(event)`)
    }
  }

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  open(event) {
    this.isOpenValue = true
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  close(event) {
    this.isOpenValue = false
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
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

  showIndexValueChanged(value, previousValue) {
    this.switchTargets.forEach((target) => {
      target.removeAttribute('open')
    })
    this.switchTargets[this.showIndexValue].setAttribute('open', '')
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
