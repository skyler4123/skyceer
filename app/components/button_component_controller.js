import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", 'content', 'hidden', "button", "link"]
  static values = {
    isOpen: { type: Boolean, default: true },
    action: { type: String },
    eventListener: { type: String },
    eventId: { type: String },

    label: { type: String, default: "Button" },
    url: { type: String },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    buttonClass: { type: String, default: "" },
    linkClass: { type: String, default: "" },
    klassDefault: { type: String, default: "relative flex justify-center items-center cursor-pointer" },
    contentClassDefault: { type: String, default: "relative flex justify-center items-center text-center" },
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
    this.dispatch('dispatch', { detail: { payload: { id: this.element.id, action: "complete", controller: this } } })
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
    if (!this.eventListenerValue) { return }

    if (this.eventListenerValue === 'click') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.actionValue}`
    }
    if (this.eventListenerValue === 'hover') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.actionValue} mouseleave->${this.identifier}#${this.actionValue}`
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

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    event.stopPropagation()
  }

  open(event) {
    this.isOpenValue = true
    event.stopPropagation()
  }

  close(event) {
    this.isOpenValue = false
    event.stopPropagation()
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }

    if (typeof previousValue !== 'undefined') {
      this.dispatch('dispatch', { detail: { payload: { id: this.eventIdValue, action: this.actionValue, controller: this } } })
    }
  }

}
