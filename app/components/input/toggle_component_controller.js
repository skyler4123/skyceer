import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", 'toggle', 'background']
  static values = {
    isOpen: { type: Boolean, default: true },
    klass: { type: String, default: "flex justify-center items-center" },
    backgroundClass: { type: String, default: "w-11 h-6 bg-gray-500 open:bg-blue-800 duration-200" },
    toggleClass: { type: String, default: "w-5 h-5 bg-white duration-200" }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  initialize() {
    this.initializeInitialTargetAndValue()
    this.initializeFunction()
    this.initializeComplete()
  }
  initializeInitialTargetAndValue() {
    this.element.querySelectorAll('[data-target]')?.forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, target.dataset.target.replaceAll('_', '-'))
      target.removeAttribute('data-target')
    })
    const values = JSON.parse(this.element.dataset.value)
    Object.keys(values).forEach((key) => {
      if (!values[key]) { return }
      this.element.setAttribute(`data-${this.identifier}-${key.replaceAll('_', '-')}-value`, JSON.stringify(values[key]))
    })
    this.element.removeAttribute('data-value')
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  initializeFunction() {
    this.initializeHTML()
    this.initializeClass()
  }
  initializeHTML() {
    this.element.innerHTML = ""
    this.element.innerHTML = this.initHTML()
  }
  initializeClass() {
    this.element.className = this.element.className.concat(' ' + this.klassValue)
  }
  initHTML() {
    return `
    <div data-action="click->${this.identifier}#toggle" data-${this.identifier}-target="background" class="relative flex justify-center items-center cursor-pointer rounded-full ${this.backgroundClassValue}">
      <input type="checkbox" value="" class="hidden" data-${this.identifier}-target="input">
      <div data-${this.identifier}-target="toggle" class="absolute rounded-full open:translate-x-1/2 -translate-x-1/2 ${this.toggleClassValue}"></div>
    </div>
    `
  }
  toggle() {
    this.isOpenValue = !this.isOpenValue
  }
  isOpenValueChanged() {
    this.backgroundTarget.toggleAttribute('open')
    this.toggleTarget.toggleAttribute('open')
    this.inputTarget.value = this.isOpenValue & 1
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
