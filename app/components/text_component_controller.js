import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["before", "after"]
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.element.firstElementChild.setAttribute('data-text-component-target', 'before')
    this.element.lastElementChild.setAttribute('data-text-component-target', 'after')

    const parser = new DOMParser()
    const spanBeforeHTML = this.beforeTarget.outerHTML.replace('<div', '<span').replace('</div>', '</span>')
    const spanBefore = new DOMParser().parseFromString(spanBeforeHTML, 'text/html').body.childNodes[0]
    this.element.replaceChild(spanBefore, this.beforeTarget)
    const spanAfterHTML = this.afterTarget.outerHTML.replace('<div', '<span').replace('</div>', '</span>')
    const spanAfter = new DOMParser().parseFromString(spanAfterHTML, 'text/html').body.childNodes[0]
    this.element.replaceChild(spanAfter, this.afterTarget)
  }
}
