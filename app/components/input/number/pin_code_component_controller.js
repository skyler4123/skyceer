import morphdom from "morphdom";
import { Controller } from "@hotwired/stimulus";

/////////////////////////////////////////////////////////////////////////////////////////////////////
const outletHelper = ['helper']
const targetHelper = ['template']
export default class extends Controller {
  initialize() {
    this.initializeOutlet()
  }
  initializeOutlet() {
    this.element.setAttribute(`data-${this.identifier}-helper-outlet`, "body")
  }
  helperOutletConnected() {
    this.helperOutlet.initTarget(this)
    this.helperOutlet.initValue(this)
    this.helperOutlet.initHTML(this)
    this.initializeFunction()
    this.helperOutlet.initComplete(this)
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  static outlets = [...outletHelper]
  static targets = [...targetHelper, "input", 'inputForm']
  static values = {
    inputIndex: { type: Number, default: 0 },
    inputName: { type: String, default: 'default_name' },
    input: { type: String }
  }
  initializeFunction() {

  }
  focusNext(event) {
    if (event.currentTarget.value.length === 0) { return }

    const index = this.inputTargets.indexOf(event.currentTarget)
    this.inputIndexValue = index
  }
  inputIndexValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }

    const nextInputIndex = this.inputIndexValue + 1
    this.inputTargets[nextInputIndex]?.focus()
    const currentInput = this.inputTargets.map((input) => { return input.value }).join('')
    this.inputFormTarget.setAttribute('value', currentInput)
  }
  initHTML() {
    return `
    <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
      <input class='hidden' name="${this.inputNameValue}" type="text" data-${this.identifier}-target="inputForm">
      <div>
          <input data-${this.identifier}-target="input" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input data-${this.identifier}-target="input" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input data-${this.identifier}-target="input" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input data-${this.identifier}-target="input" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input data-${this.identifier}-target="input" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input data-${this.identifier}-target="input" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
    </div>
    `
  }
  connect() {
    // console.log("Hello, Stimulus!", this.inputFormTarget);
  }
}