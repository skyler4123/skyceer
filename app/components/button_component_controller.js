import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "button", "link", "modal"]
  // static outlets = ['popover-component', 'modal-component']
  static values = {
    label: { type: String, default: "Button" },
    url: { type: String },
    klass: { type: String, default: " text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 active:bg-gradient-to-br font-medium rounded-lg text-sm px-2.5 py-2.5 gap-x-2" },
    buttonClass: { type: String, default: " " },
    linkClass: { type: String, default: " " },

    klassDefault: { type: String, default: " flex justify-center items-center text-center cursor-pointer" },
    buttonClassDefault: { type: String, default: " flex justify-center items-center" },
    linkClassDefault: { type: String, default: " flex justify-center items-center" },
  }

  initialize() {
    this.initializeID()
    this.initializeTarget()
    this.initializeHTML()
    this.initializeClass()

    this.initializeComplete()
  }
  initializeID() {
    this.element.id = `${this.identifier}-${crypto.randomUUID()}`
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    this.element.querySelector('template').setAttribute(`data-${this.identifier}-target`, 'template')
    this.element.querySelector('[data-controller="modal-component"]')?.setAttribute(`data-${this.identifier}-target`, 'modal')
  }

  initializeHTML() {
    morphdom(this.templateTarget, this.initHTML())
  }

  initializeClass() {
    this.element.className = this.element.className + this.klassDefaultValue + this.klassValue
    this.buttonTarget.className = this.buttonTarget.className + this.buttonClassDefaultValue + this.buttonClassValue
    if (this.hasLinkTarget) {
      this.linkTarget.className = this.linkTarget.className + this.linkClassDefaultValue + this.linkClassValue
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
    const modalController = this.application.getControllerForElementAndIdentifier(this.modalTarget, 'modal-component')
    modalController.isOpenValue = true
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#openModal`, "")
  }

  openDrawer() {
    this.drawerTarget.setAttribute('open', '')
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#openDrawer`, "")
  }
}
