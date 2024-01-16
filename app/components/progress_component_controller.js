import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", 'content', 'background', 'percentage']
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },
    canSendGlobalDispatch: { type: Boolean, default: false },
    canReceiveGlobalDispatch: { type: Boolean, default: false },
    percentage: { type: String, default: "17%" },
    isShowPercentage: { type: Boolean, default: true },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    backgroundClass: { type: String, default: "" },
    percentageClass: { type: String, default: "" },
    klassDefault: { type: String, default: "w-1/3" },
    contentClassDefault: { type: String, default: "" },
    backgroundClassDefault: { type: String, default: "" },
    percentageClassDefault: { type: String, default: "" },
  }

  initialize() {
    this.initializeHTML()
    this.initializeClass()
    // this.initializeAction()

    this.initializeComplete()
    setInterval(() => {
      this.percentageValue = `${Math.floor(Math.random() * 101)}%`
    }, 500)
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
    morphdom(this.templateTarget, this.initHTML())
  }

  initHTML() {
    return `
    <div data-${this.identifier}-target="content" class="w-full">
      <div data-${this.identifier}-target="background" class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div data-${this.identifier}-target="percentage" class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full duration-300 ease-in-out" style="width: ${this.percentageValue}">
          ${this.isShowPercentageValue ? this.percentageValue : ''}
        </div>
      </div>
    <?div>

    `
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
  }

  percentageValueChanged() {
    this.percentageTarget.style.width = this.percentageValue
    this.percentageTarget.textContent = this.percentageValue
  }
}
