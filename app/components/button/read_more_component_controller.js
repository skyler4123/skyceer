import morphdom from "morphdom";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    heightClass: String,
    overflowClass: String
  }
  connect() {
    console.log(this.element);
  }
  initialize() {
    this.element.setAttribute('data-action', `click->${this.identifier}#readMore`)
    this.heightClassValue = this.heightClass()
    this.overflowClassValue = this.overflowClass()
    this.parentElement().classList.add('relative')
  }

  readMore() {
    this.parentElement().classList.remove(this.overflowClassValue)
    this.parentElement().classList.remove(this.heightClassValue)
    morphdom(this.element, this.element.outerHTML.replace('Read More!', 'Show Less!'))
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#readMore`, `click->${this.identifier}#showLess`)
  }
  showLess() {
    this.parentElement().classList.add(this.overflowClassValue)
    this.parentElement().classList.add(this.heightClassValue)
    morphdom(this.element, this.element.outerHTML.replace('Show Less!', 'Read More!'))
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#showLess`, `click->${this.identifier}#readMore`)

  }
  parentElement() {
    return this.element.parentNode.closest('[data-controller]')
  }
  heightClass() {
    var heightClass = ""
    this.parentElement().classList.forEach((klass) => {
      if (klass.match(/h-\w/)) {
        heightClass = klass
      }
    })
    return heightClass
  }
  overflowClass() {
    var overflowClass = ""
    this.parentElement().classList.forEach((klass) => {
      if (klass.match(/overflow-\w/)) {
        overflowClass = klass
      }
    })
    return overflowClass
  }
}
