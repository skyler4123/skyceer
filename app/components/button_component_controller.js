import morphdom from "morphdom"
import { useHover, useClickOutside } from 'stimulus-use'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", 'content', 'hidden', "button", "link"]
  static values = {
    isOpen: { type: Boolean, default: true },
    isDisabled: { type: Boolean, default: false },
    isFocus: { type: Boolean, default: false },
    event: { type: Object },
    canSendGlobalDispatch: { type: Boolean, default: false },
    canReceiveGlobalDispatch: { type: Boolean, default: false },

    label: { type: String, default: "Button" },
    url: { type: String },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    buttonClass: { type: String, default: "" },
    linkClass: { type: String, default: "" },
    klassDefault: { type: String, default: "flex" },
    contentClassDefault: { type: String, default: "flex" },
    buttonClassDefault: { type: String, default: "flex" },
    linkClassDefault: { type: String, default: "flex" },
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

  templateHTML() {
    if (this.templateTarget.content?.childElementCount === 0) {
      return this.labelValue
    } else {
      return this.templateTarget.innerHTML
    }
  }
  
  initHTML() {
    return `
      <button
        type="button"
        data-${this.identifier}-target="button"
      >
        ${this.urlValue ? `<a href="${this.urlValue}" data-${this.identifier}-target="link">` : ""}
          ${this.templateHTML()}
        ${this.urlValue ? '</a>' : ''}
      </button>
    `
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

  switch(event) {
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  tab(event) {
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  copyLink(event) {
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
    if (this.canReceiveGlobalDispatchValue) {
      window.navigator.clipboard.writeText(this.urlValue)
    }
  }

  copyText(event) {
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
    if (this.canReceiveGlobalDispatchValue) {
      window.navigator.clipboard.writeText(this.element.innerText)
    }
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
