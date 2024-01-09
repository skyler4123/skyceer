import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", 'content', 'hidden', "button", "link", "modal", "popover", "toast"]
  static values = {
    isOpen: { type: Boolean, default: false },
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
    
    toggleType: { type: String, default: "toggle" },
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
    this.dispatch('dispatch', { detail: { payload: { id: this.element.id, action: "complete", controller: this } } })
  }

  initializeTarget() {
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
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.toggleTypeValue}`
    //   if (this.hasModalTarget) {
    //     this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.toggleTypeValue}Modal`
    //   }
    //   if (this.hasToastTarget) {
    //     this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.toggleTypeValue}Toast`
    //   }
    //   if (this.hasPopoverTarget) {
    //     this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.toggleTypeValue}Popover`
    //   }
    }

    if (this.eventListenerValue === 'hover') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.toggleTypeValue} mouseleave->${this.identifier}#${this.toggleTypeValue}`
      // if (this.hasPopoverTarget) {
      //   this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.toggleTypeValue}Popover mouseleave->${this.identifier}#${this.toggleTypeValue}Popover`
      // }
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

  toggle() {
    this.isOpenValue = !this.isOpenValue
  }

  open() {
    this.isOpenValue = true
  }

  close() {
    this.isOpenValue = false
  }

  isOpenValueChanged() {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }

  // toggleModal(event) {
  //   this.dispatch('dispatch', { detail: { payload: { id: this.modalTarget.id, action: "toggle" } } })
  //   event.stopPropagation()
  // }
  // openModal(event) {
  //   this.dispatch('dispatch', { detail: { payload: { id: this.modalTarget.id, action: "open" } } })
  //   event.stopPropagation()
  // }
  // closeModal(event) {
  //   this.dispatch('dispatch', { detail: { payload: { id: this.modalTarget.id, action: "close" } } })
  //   event.stopPropagation()
  // }

  // togglePopover(event) {
  //   this.dispatch('dispatch', { detail: { payload: { id: this.popoverTarget.id, action: "toggle" } } })
  //   event.stopPropagation()
  // }
  // openPopover(event) {
  //   this.dispatch('dispatch', { detail: { payload: { id: this.popoverTarget.id, action: "open" } } })
  //   event.stopPropagation()
  // }
  // closePopover(event) {
  //   this.dispatch('dispatch', { detail: { payload: { id: this.popoverTarget.id, action: "close" } } })
  //   event.stopPropagation()
  // }

  // toggleToast(event) {
  //   this.dispatch('dispatch', { detail: { payload: { id: this.toastTarget.id, action: "toggle" } } })
  //   event.stopPropagation()
  // }
  // openToast(event) {
  //   this.dispatch('dispatch', { detail: { payload: { id: this.toastTarget.id, action: "open" } } })
  //   event.stopPropagation()
  // }
  // closeToast(event) {
  //   this.dispatch('dispatch', { detail: { payload: { id: this.toastTarget.id, action: "close" } } })
  //   event.stopPropagation()
  // }

  // openDrawer(event) {
  //   this.drawerTarget.setAttribute('open', '')
  //   this.element.dataset.action = (this.element.dataset.action || '').replace(`click->${this.identifier}#openDrawer`, "")
  //   event.stopPropagation()
  // }

  demo() {
    console.log("Hello Skyler")
  }
}
