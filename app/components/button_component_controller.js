import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "link", "modal", "popover", "drawer"]
  static values = {
    label: { type: String, default: "Button" },
    url: { type: String },
    klass: { type: String, default: "" },
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
    if (this.urlfValue) {
      return `
        <button
          type="button"
          class="${this.buttonClassValue} text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          data-${this.identifier}-target="button"
        >
          <a urlf="${this.urlfValue}" class="${this.linkClassValue}" data-${this.identifier}-target="link">
            ${this.labelValue}
          </a>
        </button>
      `
    } else { return `
        <button
          type="button"
          class="${this.buttonClassValue} text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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
