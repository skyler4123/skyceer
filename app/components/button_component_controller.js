import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "button", "link"]
  static outlets = ['popover--default-component']
  static values = {
    label: { type: String, default: "Button" },
    url: { type: String },
    klass: { type: String, default: "flex justify-center items-center text-center cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 active:bg-gradient-to-br font-medium rounded-lg text-sm px-2.5 py-2.5 gap-x-2" },
    buttonClass: { type: String, default: "flex justify-center items-center" },
    linkClass: { type: String, default: "flex justify-center items-center" }
  }

  initialize() {
    this.initializeID()
    this.initializeTarget()
    this.initializeHTML()
    this.initializeClass()

    this.initializeCompleted()
  }
  initializeID() {
    this.element.id = `controller-${crypto.randomUUID()}`
  }
  initializeCompleted() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    this.element.querySelector('template').setAttribute(`data-${this.identifier}-target`, 'template')
  }

  initializeHTML() {
    morphdom(this.templateTarget, this.initHTML())
  }

  initializeClass() {
    this.element.className = this.klassValue
  }

  templateHTML() {
    if (this.templateTarget.childElementCount === 0) {
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

  popoverDefaultComponentOutletConnected() {
    this.element.classList.add('relative')
  }
  togglePopover() {
    this.popoverDefaultComponentOutlet.isOpenValue = !this.popoverDefaultComponentOutlet.isOpenValue
  }

  openModal() {
    this.modalTarget.classList.remove('hidden')
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#openModal`, "")
  }

  openDrawer() {
    this.drawerTarget.setAttribute('open', '')
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#openDrawer`, "")
  }
}
