import morphdom from "morphdom";
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    // console.log('Initialize Helper Controller')
  }
  initialize() {
    // console.log(this.table())
  }
  show(that) {
    console.log('My name is Skyler from stimulus helper', that)
  }
  initTargetValueHTML(that) {
    // Target
    if (that.element.querySelectorAll('[data-target]')) {
      that.element.querySelectorAll('[data-target]')?.forEach((target) => {
        target.setAttribute(`data-${that.identifier}-target`, target.dataset.target.replaceAll('_', '-'))
        target.removeAttribute('data-target')
      })
      that.element.querySelector('template')?.setAttribute(`data-${that.identifier}-target`, 'template')
    }

    // Value
    if (that.element.dataset.value) { 
      const values = JSON.parse(that.element.dataset.value)
      Object.keys(values).forEach((key) => {
        if (!values[key]) { return }
        if (Array.isArray(values[key])) {
          that.element.setAttribute(`data-${that.identifier}-${key.replaceAll('_', '-')}-value`, JSON.stringify(values[key]))
        } else {
          that.element.setAttribute(`data-${that.identifier}-${key.replaceAll('_', '-')}-value`, JSON.stringify(values[key]).replaceAll('"', ''))
        }
      })
    }

    // HTML
    if (that.hasTemplateTarget) {
      morphdom(that.templateTarget, that.initHTML())
    }
  }
  initTarget(that) {
    if (that.element.querySelectorAll('[data-target]')) {
      that.element.querySelectorAll('[data-target]')?.forEach((target) => {
        target.setAttribute(`data-${that.identifier}-target`, target.dataset.target.replaceAll('_', '-'))
        target.removeAttribute('data-target')
      })
      that.element.querySelector('template')?.setAttribute(`data-${that.identifier}-target`, 'template')
    }
  }
  initValue(that) {
    if (that.element.dataset.value) { 
      const values = JSON.parse(that.element.dataset.value)
      Object.keys(values).forEach((key) => {
        if (!values[key]) { return }
        if (Array.isArray(values[key])) {
          that.element.setAttribute(`data-${that.identifier}-${key.replaceAll('_', '-')}-value`, JSON.stringify(values[key]))
        } else {
          that.element.setAttribute(`data-${that.identifier}-${key.replaceAll('_', '-')}-value`, JSON.stringify(values[key]).replaceAll('"', ''))
        }
      })
    }
  }
  initHTML(that) {
    if (that.hasTemplateTarget) {
      morphdom(that.templateTarget, that.initHTML())
    }
  }
  initCompleted(that) {
    that.element.classList.remove('hidden')
  }
  initializeComplete(that) {
    that.element.classList.remove('hidden')
  }
}



// //////////////////////////////////////////////Copy///////////////////////////////////////////////////////
// const outletHelper = ['helper']
// const targetHelper = ['template']
// export default class extends Controller {
//   initialize() {
//     this.initializeOutlet()
//   }
//   initializeOutlet() {
//     this.element.setAttribute(`data-${this.identifier}-helper-outlet`, "body")
//   }
//   helperOutletConnected() {
//     this.helperOutlet.initTarget(this)
//     this.helperOutlet.initValue(this)
//     this.helperOutlet.initHTML(this)
//     this.initializeFunction()
//     this.helperOutlet.initCompleted(this)
//   }
//   ///////////////////////////////////////////////Past//////////////////////////////////////////////////////