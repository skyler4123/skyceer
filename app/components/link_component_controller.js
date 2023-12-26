import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "link", "modal", "popover", "drawer"]
  static values = {
    label: { type: String, default: "Link" },
    url: { type: String },
    klass: { type: String, default: "" },
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
    return `
      <a href="${this.urlValue}" data-${this.identifier}-target="link" class="${this.linkClassValue} font-medium text-blue-600 dark:text-blue-500 hover:underline active:text-blue-800">
        ${this.labelValue}
      </a>
    `
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
