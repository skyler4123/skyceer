import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "button", "link", "modal", "popover", "drawer"]
  static values = {
    label: { type: String },
    url: { type: String },
    klass: { type: String, default: "flex justify-center items-center text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 active:bg-gradient-to-br font-medium rounded-lg text-sm px-2.5 py-2.5 gap-x-2" },
    buttonClass: { type: String },
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
    console.log(this.templateTarget.innerHTML)
    return this.templateTarget.innerHTML
  }
  initHTML() {
    return `
      <button
        type="button"
        class="${this.buttonClassValue} flex justify-center items-center"
        data-${this.identifier}-target="button"
      >
        ${this.urlValue ? `<a href="${this.urlValue}" class="${this.linkClassValue} flex justify-center items-center" data-${this.identifier}-target="link">` : ""}
          ${this.templateHTML()}
        ${this.urlValue ? '</a>' : ''}
      </button>
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
