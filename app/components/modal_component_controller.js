import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['background', 'content']
  static values = {
    isOpen: { type: Boolean, default: false },

    klass: { type: String, default: ' ' },
    backgroundClass: { type: String, default: ' bg-gray-200 opacity-50' },
    contentClass: { type: String, default: ' text-black' },

    klassDefault: { type: String, default: ' hidden fixed h-screen w-screen inset-0 z-10 flex-col items-center justify-center bg-transparent' },
    backgroundClassDefault: { type: String, default: ' z-20 h-full w-full cursor-pointer' },
    contentClassDefault: { type: String, default: ' z-30 opacity-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' },
  }

  initialize() {
    this.initializeID()
    this.initializeAction()
    this.initializeClass()
    console.log(this)
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }

  initializeAction() {
    this.element.dataset.action = ` open-component:open@window->${this.identifier}#open close-component:close@window->${this.identifier}#close`
    this.backgroundTarget.dataset.action = this.backgroundTarget.dataset.action + ` click->${this.identifier}#closeSelf`
  }

  initializeClass() {
    this.element.className = this.element.className + this.klassDefaultValue + this.klassValue
    this.backgroundTarget.className = this.backgroundTarget.className  + this.backgroundClassDefaultValue + this.backgroundClassValue
    this.contentTarget.className = this.contentTarget.className + this.contentClassDefaultValue + this.contentClassValue
  }

  open({ detail: { id } }) {
    if (this.element.id === id) {
      this.isOpenValue = true
    }
  }

  close({ detail: { id } }) {
    if (this.element.id === id) {
      this.isOpenValue = false
    }
  }

  closeSelf() {
    this.dispatch('close', { detail: { id: this.modalTarget.id } })
  }

  isOpenValueChanged() {
    if (this.isOpenValue) {
      this.element.classList.remove('hidden')
    } else {
      this.element.classList.add('hidden')
    }
  }

}
