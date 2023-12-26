import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "link", "modal", "popover", "drawer"]
  static values = {
    label: { type: String, default: "Button" },
    url: { type: String },
    klass: { type: String, default: "flex bg-red-5" },
    buttonClass: { type: String, default: "" },
    linkClass: { type: String, default: "" }
  }

  initialize() {
    this.initializeHTML()
    this.initializeClass()

    this.initializeComplete()
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeHTML() {
    morphdom(this.element.querySelector('template'), this.initHTML())
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassValue
  }

  initHTML() {
    if (this.urlValue) {
      return `
        <button
          type="button"
          class="${this.buttonClassValue} text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 active:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          data-${this.identifier}-target="button"
        >
          <a href="${this.urlValue}" class="${this.linkClassValue}" data-${this.identifier}-target="link">
            ${this.labelValue}
          </a>
        </button>
      `
    } else { return `
        <button
          type="button"
          class="${this.buttonClassValue} text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 active:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          data-${this.identifier}-target="button"
        >
          ${this.labelValue}
        </button>
      `
    }
  }
  openModal() {
    this.modalTarget.classList.remove('hidden')
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#openModal`, "")
  }
  openPopover() {
    this.popoverTarget.classList.remove('hidden')
    this.popoverTarget.classList.add('flex')
  }
  closePopover() {
    this.popoverTarget.classList.remove('flex')
    this.popoverTarget.classList.add('hidden')
  }
  openDrawer() {
    this.drawerTarget.setAttribute('open', '')
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#openDrawer`, "")
  }
}
