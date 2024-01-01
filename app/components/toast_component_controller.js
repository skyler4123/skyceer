import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"]
  static values = {
    isOpen: { type: Boolean, default: false },
    position: { type: String, default: "left_center" },
    klass: { type: String },
    contentClass: { type: String },
    klassDefault: { type: String },
    contentClassDefault: { type: String },
  }
  initialize() {
    this.initializeID()
    this.initializeDefaultClass()
    this.initializeClass()

    this.initializeComplete()
  }
  initializeID() {
    this.element.id = `${this.identifier}-${crypto.randomUUID()}`
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeDefaultClass() {
    if (this.positionValue === "left") {
      this.klassValue = this.klassValue || " "
      this.contentClassValue = this.contentClassValue || " "
      this.klassDefaultValue = this.klassDefaultValue || " w-1/3 h-full bg-green-500 fixed top-0 left-0 z-20 open:translate-x-0 -translate-x-full duration-200 ease-in-out"
      this.contentClassDefaultValue = this.contentClassDefaultValue || " "
    }
    if (this.positionValue === "left_top") {
      this.klassDefaultValue = this.klassDefaultValue || " w-1/3 h-1/3 bg-green-500 fixed top-0 left-0 z-20 open:translate-x-0 -translate-x-full duration-200 ease-in-out"
      this.contentClassDefaultValue = this.contentClassDefaultValue || " "
    }
    if (this.positionValue === "left_center") {
      this.klassValue = this.klassValue || " w-1/3 h-1/3 bg-green-500 open:translate-x-0"
      this.contentClassValue = this.contentClassValue || " "
      this.klassDefaultValue = this.klassDefaultValue || " fixed top-1/2 left-0 z-20 -translate-x-full -translate-y-1/2 duration-200 ease-in-out"
      this.contentClassDefaultValue = this.contentClassDefaultValue || " "
    }
    if (this.positionValue === "left_bottom") {
      this.klassDefaultValue = this.klassDefaultValue || " w-1/3 h-1/3 bg-green-500 fixed bottom-0 left-0 z-20 open:translate-x-0 -translate-x-full duration-200 ease-in-out"
      this.contentClassDefaultValue = this.contentClassDefaultValue || " "
    }
    if (this.positionValue === "right") {
      this.klassDefaultValue = this.klassDefaultValue || " w-1/3 h-full bg-green-500 fixed top-0 right-0 z-20 open:-translate-x-0 translate-x-full duration-200 ease-in-out"
      this.contentClassDefaultValue = this.contentClassDefaultValue || " "
    }
    if (this.positionValue === "top") {
      this.klassDefaultValue = this.klassDefaultValue || " h-1/3 w-full bg-green-500 fixed top-0 z-20 open:translate-y-0 -translate-y-full duration-200 ease-in-out"
      this.contentClassDefaultValue = this.contentClassDefaultValue || " "
    }
    if (this.positionValue === "bottom") {
      this.klassDefaultValue = this.klassDefaultValue || " h-1/3 w-full bg-green-500 fixed bottom-0 z-20 open:-translate-y-0 translate-y-full duration-200 ease-in-out"
      this.contentClassDefaultValue = this.contentClassDefaultValue || " "
    }
  }

  initializeClass() {
    this.element.className = this.element.className + this.klassDefaultValue + this.klassValue
    this.contentTarget.className = this.contentTarget.className + this.contentClassDefaultValue + this.contentClassValue
  }

  isOpenValueChanged() {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
