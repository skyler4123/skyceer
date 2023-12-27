import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "link"]
  static values = {
    label: { type: String },
    url: { type: String },
    klass: { type: String },
    linkClass: { type: String }
  }

  initialize() {
    this.initializeTarget()
    this.initializeHTML()
    this.initializeClass()

    this.initializeComplete()
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }
  initializeTarget() {
    this.element.querySelector('template').setAttribute(`data-${this.identifier}-target`, 'template')
  }
  initializeHTML() {
    morphdom(this.element.querySelector('template'), this.initHTML())
  }

  initializeClass() {
    this.element.className = this.klassValue
  }
  templateHTML() {
    return this.templateTarget.innerHTML
  }
  initHTML() {
    return `
      <a href="${this.urlValue}" data-${this.identifier}-target="link" class="${this.linkClassValue} font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        ${this.templateHTML()}
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
