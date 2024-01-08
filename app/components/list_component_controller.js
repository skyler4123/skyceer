import morphdom from "morphdom"
import Sortable from 'sortablejs';
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['content', 'template', 'items', 'item']
  static values = {
    type: { type: String, default: 'ol' },
    sortable: { type: Boolean, default: true },
    sortableOptions: { type: Object, default: { animation: 1000 } },

    // Classes
    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    itemsClass: { type: String, default: "" },
    itemClass: { type: String, default: "" },
    klassDefault: { type: String, default: "" },
    contentClassDefault: { type: String, default: "" },
    itemsClassDefault: { type: String, default: "" },
    itemClassDefault: { type: String, default: "" }
  }

  initialize() {
    this.initializeID()
    this.initializeTarget()
    this.initializeHTML()
    this.initializeClass()
    this.initializeAction()

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

  initializeTarget() {
    this.element.querySelector('template').setAttribute(`data-${this.identifier}-target`, 'template')
  }

  initializeHTML() {
    morphdom(this.templateTarget, this.initHTML())
    this.element.querySelectorAll('li').forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'item')
    })
    if (this.sortableValue) {
      Sortable.create(this.itemsTarget, this.sortableOptionsValue)
    }
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
    this.itemsTarget.className = this.itemsTarget.className + ' ' + this.itemsClassDefaultValue + ' ' + this.itemsClassValue
    this.itemTargets.forEach((target) => {
      target.className = target.className + ' ' + this.itemClassDefaultValue + ' ' + this.itemClassValue
    })
  }

  initializeAction() {
  }

  templateHTML() {
    if (this.templateTarget.content.childElementCount === 0) {
      return `<li>Emplty Content 1</li><li>Emplty Content 2</li>`
    } else {
      return this.templateTarget.innerHTML
    }
  }

  initHTML() {
    return `
      <${this.typeValue} data-${this.identifier}-target="items">
        ${this.templateHTML()}
      </${this.typeValue}>
    `
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
