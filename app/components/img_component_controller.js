import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "img"]
  static values = {
    isOpen: { type: Boolean, default: true },
    eventAction: { type: String },
    eventListener: { type: String },
    eventId: { type: String },

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
    this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    if (!this.eventListenerValue) { return }

    if (this.eventListenerValue === 'click') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.eventActionValue}`
    }
    if (this.eventListenerValue === 'hover') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.eventActionValue} mouseleave->${this.identifier}#${this.eventActionValue}`
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
