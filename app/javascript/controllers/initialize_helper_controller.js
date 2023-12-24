import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    console.log('Initialize Helper Controller')
  }
  initialize() {
    // console.log(this.table())
  }
  show(that) {
    console.log('My name is Skyler from stimulus helper', that)
  }
  initializeInitialTargetAndValue(that) {
    that.element.querySelectorAll('[data-target]')?.forEach((target) => {
      target.setAttribute(`data-${that.identifier}-target`, target.dataset.target.replaceAll('_', '-'))
      target.removeAttribute('data-target')
    })
    const values = JSON.parse(that.element.dataset.value)
    Object.keys(values).forEach((key) => {
      if (!values[key]) { return }
      if (Array.isArray(values[key])) {
        that.element.setAttribute(`data-${that.identifier}-${key.replaceAll('_', '-')}-value`, JSON.stringify(values[key]))
      } else {
        that.element.setAttribute(`data-${that.identifier}-${key.replaceAll('_', '-')}-value`, JSON.stringify(values[key]).replaceAll('"', ''))
      }
    })
    that.element.removeAttribute('data-value')
  }
  initializeComplete(that) {
    that.element.classList.remove('hidden')
  }
}
