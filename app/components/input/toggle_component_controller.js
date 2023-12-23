import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

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
    this.element.innerHTML = ""
    this.element.innerHTML = this.initHTML()
  }
  initHTML() {
    return `
    <div class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="hidden">
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </div>
    `
  }
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
}
