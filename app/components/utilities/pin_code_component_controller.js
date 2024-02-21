import ApplicationComponentController from "../application_component_controller";

export default class extends ApplicationComponentController {
  static targets = ["input", "cell"]
  static values = {
    ...super.values,
    index: { type: Number, default: 0 },
    name: { type: String, default: 'default_name' },
    input: { type: String }
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    // this.initializeAction()
    this.initializeClass()

    this.initializeComplete()
  }

  initializeHTML() {
    this.element.innerHTML = this.initHTML
  }

  initializeClass() {
    this.element.className = this.twMerge(this.element.className, this.klass)
  }

  focus(event) {
    this.indexValue = this.cellTargets.indexOf(event.target)
  }

  focusNext() {
    if (this.currentCell.value.length === 0) { return }
    if (this.indexValue === this.maxIndex) { return }
    this.indexValue = this.indexValue + 1
  }

  focusPrevious() {
    if (this.indexValue === 0) { return }
    this.indexValue = this.indexValue - 1
  }

  indexValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }

    this.cellTargets[this.indexValue].focus()
    this.inputValue = this.inputString
  }

  get initHTML() {
    return `
      <input class='hidden' name="${this.nameValue}" type="text" data-${this.identifier}-target="input">
      <div>
        <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext click->${this.identifier}#focus" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
        <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext click->${this.identifier}#focus" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
        <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext click->${this.identifier}#focus" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
        <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext click->${this.identifier}#focus" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
        <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext click->${this.identifier}#focus" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
        <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#focusNext click->${this.identifier}#focus" type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
    `
  }
  get klass() {
    return this.optionsValue.klass || 'flex flex-row gap-x-3'
  }
  get maxIndex() {
    return this.cellTargets.length - 1
  }
  get inputString() {
    return this.cellTargets.map((input) => { return input.value }).join('')
  }
  get currentCell() {
    return this.cellTargets[this.indexValue]
  }
}