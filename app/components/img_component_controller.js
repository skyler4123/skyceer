import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "img"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },
    canSendGlobalDispatch: { type: Boolean, default: false },
    canReceiveGlobalDispatch: { type: Boolean, default: false },

    type: { type: String },
    url: { type: String, default: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" },
    alt: { type: String, default: "image description" },

    klass: { type: String },
    imgClass: { type: String, default: "h-24 w-24 object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" },
    klassDefault: { type: String },
    imgClassDefault: { type: String }
  }

  initialize() {
    this.initializeID()
    this.initializeHTML()
    this.initializeTarget()
    this.initializeDefaultClass()
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
    this.dispatch('dispatch', { detail: { payload: { id: this.element.id, action: "complete", controller: this } } })
  }

  initializeHTML() {
    morphdom(this.templateTarget, this.initHTML())
  }

  initializeTarget() {
    this.element.querySelector('img').setAttribute(`data-${this.identifier}-target`, 'img')
  }

  initializeDefaultClass() {
    if (this.typeValue === "circle") {
      this.imgClassDefaultValue = "rounded-full"
    }
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.imgTarget.className = this.imgTarget.className + ' ' + this.imgClassDefaultValue + ' ' + this.imgClassValue
  }
  
  initHTML() {
    return `
      <img src="${this.urlValue}" alt="${this.altValue}">
    `
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

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
