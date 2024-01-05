import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", 'content', 'hidden', "button", "link", "modal", "popover", "toast"]
  static values = {
    label: { type: String, default: "Button" },
    url: { type: String },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: " text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 active:bg-gradient-to-br font-medium rounded-lg text-sm px-2.5 py-2.5 gap-x-2" },
    buttonClass: { type: String, default: "" },
    linkClass: { type: String, default: "" },
    klassDefault: { type: String, default: " " },
    contentClassDefault: { type: String, default: " flex justify-center items-center text-center cursor-pointer relative" },
    buttonClassDefault: { type: String, default: " flex justify-center items-center" },
    linkClassDefault: { type: String, default: " flex justify-center items-center" },    
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
    this.element.className = this.element.className + this.klassDefaultValue + this.klassValue
    this.contentTarget.className = this.contentTarget.className + this.contentClassDefaultValue + this.contentClassValue
    this.buttonTarget.className = this.buttonTarget.className + this.buttonClassDefaultValue + this.buttonClassValue
    if (this.hasLinkTarget) {
      this.linkTarget.className = this.linkTarget.className + this.linkClassDefaultValue + this.linkClassValue
    }
  }

  initializeAction() {
    if (this.hasModalTarget) {
      this.contentTarget.dataset.action = (this.contentTarget.dataset.action || '') + ` click->${this.identifier}#openModal`
    }
    if (this.hasToastTarget) {
      this.element.dataset.action = (this.element.dataset.action || '') + ` click->${this.identifier}#openToast`
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

  openModal() {
    this.dispatch('toggle', { detail: { id: this.modalTarget.id, type: "open" } })
  }

  togglePopover() {
    this.dispatch('open', { detail: { id: this.popoverTarget.id } })
  }

  openToast() {
    this.dispatch('open', { detail: { id: this.toastTarget.id } })
  }

  openDrawer() {
    this.drawerTarget.setAttribute('open', '')
    this.element.dataset.action = (this.element.dataset.action || '').replace(`click->${this.identifier}#openDrawer`, "")
  }
}
