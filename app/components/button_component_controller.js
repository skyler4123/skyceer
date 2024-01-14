import morphdom from "morphdom"
import { useHover, useClickOutside } from 'stimulus-use'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", 'content', 'hidden', "button", "link"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },

    label: { type: String, default: "Button" },
    url: { type: String },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    buttonClass: { type: String, default: "" },
    linkClass: { type: String, default: "" },
    klassDefault: { type: String, default: "flex justify-center items-center cursor-pointer" },
    contentClassDefault: { type: String, default: "flex justify-center items-center text-center" },
    buttonClassDefault: { type: String, default: "flex justify-center items-center" },
    linkClassDefault: { type: String, default: "flex justify-center items-center" }
  }

  initialize() {
    this.initializeID()
    this.initializeHTML()
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

  initializeHTML() {
    morphdom(this.templateTarget, this.initHTML())
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
    this.buttonTarget.className = this.buttonTarget.className + ' ' + this.buttonClassDefaultValue + ' ' + this.buttonClassValue
    if (this.hasLinkTarget) {
      this.linkTarget.className = this.linkTarget.className + ' ' + this.linkClassDefaultValue + ' ' + this.linkClassValue
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

  templateHTML() {
    if (this.templateTarget.content.childElementCount === 0) {
      return this.labelValue
    } else {
      return this.templateTarget.innerHTML
    }
  }
  
  initHTML() {
    return `
      <button
        type="button"
        class="${this.buttonClassValue}"
        data-${this.identifier}-target="button"
      >
        ${this.urlValue ? `<a href="${this.urlValue}" class="${this.linkClassValue}" data-${this.identifier}-target="link">` : ""}
          ${this.templateHTML()}
        ${this.urlValue ? '</a>' : ''}
      </button>
    `
  }

  globalDispatch({ detail: { payload } }) {
    if (this.eventValue.id === payload.event.id) {
      eval(`this.${payload.event.action}(payload)`)
    }
  }

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    this.dispatch('dispatch', { detail: { payload: { event: this.eventValue, controller: this } } })
    event.stopPropagation()
  }

  open(event) {
    this.isOpenValue = true
    this.dispatch('dispatch', { detail: { payload: { event: this.eventValue, controller: this } } })
    event.stopPropagation()
  }

  close(event) {
    this.isOpenValue = false
    this.dispatch('dispatch', { detail: { payload: { event: this.eventValue, controller: this } } })
    event.stopPropagation()
  }

  switch(event) {
    this.dispatch('dispatch', { detail: { payload: { event: this.eventValue, controller: this } } })
    event.stopPropagation()
  }

  tab(event) {
    this.dispatch('dispatch', { detail: { payload: { event: this.eventValue, controller: this } } })
    event.stopPropagation()
  }

  copyLink(event) {
    console.log(event)
    // this.dispatch('dispatch', { detail: { payload: { event: this.eventValue, controller: this } } })
    event.stopPropagation()
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }

  demo(name = 'skyler') {
    console.log("Demo success!", name)
  }
  
}
