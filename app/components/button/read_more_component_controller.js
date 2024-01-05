import morphdom from "morphdom";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    klass: { type: String, default: "absolute bottom-0 right-1/2 translate-x-1/2" },
    heightClass: String,
    overflowClass: String
  }
  connect() {
    // console.log(this.element);
  }
  initialize() {
    this.initializeKlass()
    this.initializeAction()
    this.heightClassValue = this.heightClass()
    this.overflowClassValue = this.overflowClass()
    this.parentElement().classList.add('relative')
  }

  initializeKlass() {
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
  }
  initializeAction() {
    this.element.setAttribute('data-action', `click->${this.identifier}#readMore`)
  }
  readMore() {
    this.parentElement().classList.remove(this.overflowClassValue)
    this.parentElement().classList.remove(this.heightClassValue)
    morphdom(this.element, this.element.outerHTML.replace('Read More!', 'Show Less!'))
    this.element.dataset.action = (this.element.dataset.action || '').replace(`click->${this.identifier}#readMore`, `click->${this.identifier}#showLess`)
  }
  showLess() {
    this.parentElement().classList.add(this.overflowClassValue)
    this.parentElement().classList.add(this.heightClassValue)
    morphdom(this.element, this.element.outerHTML.replace('Show Less!', 'Read More!'))
    this.element.dataset.action = (this.element.dataset.action || '').replace(`click->${this.identifier}#showLess`, `click->${this.identifier}#readMore`)

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
