import morphdom from "morphdom";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "content", "input", "cell"]
  static values = {
    index: { type: Number, default: 0 },
    name: { type: String, default: 'default_name' },
    value: { type: String }
  }
  initialize() {
    this.initializeID()
    this.initializeHTML()
    // this.initializeClass()
    // this.initializeAction()
    
    this.initializeComplete()
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeHTML() {
    if (this.dir) {
      this.element.setAttribute('dir', this.dir)
    }
    morphdom(this.templateTarget, this.initHTML)
  }
  focusNext(event) {
    if (event.currentTarget.value.length === 0) { return }

    const index = this.cellTargets.indexOf(event.currentTarget)
    this.indexValue = index
  }
  indexValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }

    const nextInputIndex = this.indexValue + 1
    this.cellTargets[nextInputIndex]?.focus()
    const currentInput = this.cellTargets.map((input) => { return input.value }).join('')
    this.inputTarget.setAttribute('value', currentInput)
    this.valueValue = currentInput
  }
  get initHTML() {
    return `
    <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
      <input class='hidden' name="${this.nameValue}" type="text" data-${this.identifier}-target="input">
      <div>
          <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
    </div>
    `
  }
  connect() {
    // console.log("Hello, Stimulus!", this.inputFormTarget);
  }
}