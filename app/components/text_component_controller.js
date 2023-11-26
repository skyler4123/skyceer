import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["before", "after"]
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    const parser = new DOMParser()
    if (this.element.firstElementChild) {
      this.element.firstElementChild.setAttribute('data-text-component-target', 'before')
      const spanBeforeHTML = this.beforeTarget.outerHTML.replace('<div', '<span').replace('</div>', '</span>')
      const spanBefore = parser.parseFromString(spanBeforeHTML, 'text/html').body.childNodes[0]
      this.element.replaceChild(spanBefore, this.beforeTarget)  
    }
    if (this.element.lastElementChild) {
      this.element.lastElementChild.setAttribute('data-text-component-target', 'after')
      const spanAfterHTML = this.afterTarget.outerHTML.replace('<div', '<span').replace('</div>', '</span>')
      const spanAfter = parser.parseFromString(spanAfterHTML, 'text/html').body.childNodes[0]
      this.element.replaceChild(spanAfter, this.afterTarget)  
    }

  }
}
