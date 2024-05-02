import ApplicationController from '../../javascript/controllers/application_controller';

export default class Pincode extends ApplicationController {
  static targets = ["input", "cell"]
  static values = {
    ...super.values,
    index: { type: Number, default: 0 },
    input: { type: String }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = `
      <input class='hidden' name="${this.nameParams}" type="text" data-${this.identifier}-target="input">
      <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#keyup click->${this.identifier}#focus" type="text" maxlength="1" />
      <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#keyup click->${this.identifier}#focus" type="text" maxlength="1" />
      <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#keyup click->${this.identifier}#focus" type="text" maxlength="1" />
      <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#keyup click->${this.identifier}#focus" type="text" maxlength="1" />
      <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#keyup click->${this.identifier}#focus" type="text" maxlength="1" />
      <input data-${this.identifier}-target="cell" data-action="keyup->${this.identifier}#keyup click->${this.identifier}#focus" type="text" maxlength="1" />
    `
  }

  keyup(event) {
    if (event.code === 'Backspace') {
      this.focusPrevious()
    } else {
      this.focusNext()
    }
    this.inputValue = this.inputString
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
    if (!this.isInitializedValue) { return }

    this.cellTargets[this.indexValue].focus()
  }

  inputValueChanged() {
    if (!this.isInitializedValue) { return }
    
    this.inputTarget.value = this.inputValue
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
  get variantClass() {
    return {
      default: {
        element: 'flex flex-row justify-center items-center gap-x-2',
        inputTarget: '',
        cellTarget: 'block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
      }
    }
  }

}