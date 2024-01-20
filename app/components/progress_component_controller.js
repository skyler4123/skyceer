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
    backgroundClass: { type: String, default: "rounded-full bg-gray-200" },
    percentageClass: { type: String, default: "bg-blue-600 dark:bg-gray-700 text-xs font-medium text-blue-100 rounded-full" },
    klassDefault: { type: String, default: "w-1/3" },
    contentClassDefault: { type: String, default: "w-full" },
    backgroundClassDefault: { type: String, default: "w-full" },
    percentageClassDefault: { type: String, default: "text-center p-0.5 leading-none duration-500 ease-out" },
  }

  initialize() {
    this.initializeHTML()
    this.initializeClass()

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
      <div data-${this.identifier}-target="content">
        <div data-${this.identifier}-target="background">
          <div data-${this.identifier}-target="percentage" style="width: ${this.percentageValue}">
            ${this.isShowPercentageValue ? this.percentageValue : ''}
          </div>
        </div>
      </div>
    `
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
    this.backgroundTarget.className = this.backgroundTarget.className + ' ' + this.backgroundClassDefaultValue + ' ' + this.backgroundClassValue
    this.percentageTarget.className = this.percentageTarget.className + ' ' + this.percentageClassDefaultValue + ' ' + this.percentageClassValue
  }

  percentageValueChanged() {
    this.percentageTarget.style.width = this.percentageValue
    if (this.isShowPercentageValue) {
      this.percentageTarget.textContent = this.percentageValue
    }
  }
}
