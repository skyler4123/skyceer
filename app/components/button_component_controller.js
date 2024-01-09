import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", 'content', 'hidden', "button", "link", "modal", "popover", "toast"]
  static values = {
    label: { type: String, default: "Button" },
    url: { type: String },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    buttonClass: { type: String, default: "" },
    linkClass: { type: String, default: "" },
    klassDefault: { type: String, default: "relative flex justify-center items-center cursor-pointer" },
    contentClassDefault: { type: String, default: "relative flex justify-center items-center text-center" },
    buttonClassDefault: { type: String, default: "flex justify-center items-center" },
    linkClassDefault: { type: String, default: "flex justify-center items-center" },
    
    toggleType: { type: String, default: "open" },
    eventListener: { type: String, default: "click" }
  }

  initialize() {
    this.initializeID()
    this.initializeTarget()
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

  initializeTarget() {
    this.element.querySelector('template').setAttribute(`data-${this.identifier}-target`, 'template')
    this.element.querySelector('[data-controller="modal-component"]')?.setAttribute(`data-${this.identifier}-target`, 'modal')
    this.element.querySelector('[data-controller="popover-component"]')?.setAttribute(`data-${this.identifier}-target`, 'popover')
    this.element.querySelector('[data-controller="toast-component"]')?.setAttribute(`data-${this.identifier}-target`, 'toast')
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
    if (this.eventListenerValue === 'click') {
      if (this.hasModalTarget) {
        this.element.dataset.action = (this.element.dataset.action || '') + ` click->${this.identifier}#${this.toggleTypeValue}Modal`
      }
      if (this.hasToastTarget) {
        this.element.dataset.action = (this.element.dataset.action || '') + ` click->${this.identifier}#${this.toggleTypeValue}Toast`
      }
      if (this.hasPopoverTarget) {
        this.element.dataset.action = (this.element.dataset.action || '') + ` click->${this.identifier}#${this.toggleTypeValue}Popover`
      }
    }

    if (this.eventListenerValue === 'hover') {
      if (this.hasPopoverTarget) {
        this.element.dataset.action = (this.element.dataset.action || '') + ` mouseenter->${this.identifier}#${this.toggleTypeValue}Popover mouseleave->${this.identifier}#${this.toggleTypeValue}Popover`
      }
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

  toggleModal(event) {
    this.dispatch('toggle', { detail: { id: this.modalTarget.id, type: "toggle" } })
    event.stopPropagation()
  }
  openModal(event) {
    this.dispatch('toggle', { detail: { id: this.modalTarget.id, type: "open" } })
    event.stopPropagation()
  }
  closeModal(event) {
    this.dispatch('toggle', { detail: { id: this.modalTarget.id, type: "close" } })
    event.stopPropagation()
  }

  togglePopover(event) {
    this.dispatch('toggle', { detail: { id: this.popoverTarget.id, type: "toggle" } })
    event.stopPropagation()
  }
  openPopover(event) {
    this.dispatch('toggle', { detail: { id: this.popoverTarget.id, type: "open" } })
    event.stopPropagation()
  }
  closePopover(event) {
    this.dispatch('toggle', { detail: { id: this.popoverTarget.id, type: "close" } })
    event.stopPropagation()
  }

  toggleToast(event) {
    this.dispatch('toggle', { detail: { id: this.toastTarget.id, type: "toggle" } })
    event.stopPropagation()
  }
  openToast(event) {
    this.dispatch('toggle', { detail: { id: this.toastTarget.id, type: "open" } })
    event.stopPropagation()
  }
  closeToast(event) {
    this.dispatch('toggle', { detail: { id: this.toastTarget.id, type: "close" } })
    event.stopPropagation()
  }

  openDrawer(event) {
    this.drawerTarget.setAttribute('open', '')
    this.element.dataset.action = (this.element.dataset.action || '').replace(`click->${this.identifier}#openDrawer`, "")
    event.stopPropagation()
  }

  demo() {
    console.log("hello Skyler")
  }
}
