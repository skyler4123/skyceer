import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['label', 'horizontalLine']
  static values = {
    klass: { type: String, default: "flex flex-row items-center justify-center w-full py-4" },
    horizontalLineClass: { type: String, default: "w-1/3 h-px bg-gray-300 border-0" },
    labelClass: { type: String, default: "w-1/3 flex-1 text-center font-medium text-black" },
    label: { type: String, default: "Horizontal Line" }
  }
  initialize() {
    this.initializeElement()
    this.initializeClass()

    this.initializeComplete()
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }
  initializeElement() {
    this.initializeLabelElement()
    this.initializeHorizontalLineElements()
  }
  initializeLabelElement() {
    const label = document.createElement('div')
    label.setAttribute(`data-${this.identifier}-target`, 'label')
    const labelText = document.createTextNode(this.labelValue);
    label.appendChild(labelText)
    this.element.appendChild(label).cloneNode(true)
  }
  initializeHorizontalLineElements() {
    const horizontalLine = document.createElement('hr')
    horizontalLine.setAttribute(`data-${this.identifier}-target`, 'horizontalLine')
    horizontalLine.classList = this.horizontalLineClassValue
    this.element.prepend(horizontalLine)
    this.element.appendChild(horizontalLine.cloneNode(true))
  }
  initializeValue() {
    this.labelValue = this.element.dataset.component.label
    this.labelClassValue = this.element.dataset.component.label_class
    this.horizontalLineClassValue = this.element.dataset.component.horizontalLineClass
  }
  initializeClass() {
    this.initializeKlass()
    this.initializeHorizontalLineClass()
  }
  initializeKlass() {
    this.element.classList = this.klassValue
  }
  initializeHorizontalLineClass() {
    this.labelTarget.classList = this.labelClassValue
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
