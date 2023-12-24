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
    this.helperOutlet.initCompleted(this)
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  static outlets = [...outletHelper]
  static targets = [...targetHelper]
  initializeFunction() {

  }
  initHTML() {
    return `
    <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
      <div>
          <input type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
      <div>
          <input type="text" maxlength="1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
      </div>
    </div>
    `
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
