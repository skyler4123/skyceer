import { twMerge } from 'tailwind-merge'
import ApplicationComponentController from './application_component_controller';

export default class extends ApplicationComponentController {
  static targets = ['content', 'link', 'hidden']
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeHTML() {
    if (this.dir) {
      this.element.setAttribute('dir', this.dir)
    }
    if (this.linkTarget.childElementCount === 0) { this.linkTarget.textContent = this.label }
    this.linkTarget.href = this.url
  }
  initializeClass() {
    this.element.className = twMerge(this.element.className, this.optionsValue.klass)
    this.contentTarget.className = twMerge(this.contentTarget.className, this.variant, this.optionsValue.contentClass)
    this.linkTarget.className = twMerge(this.linkTarget.className, this.optionsValue.linkClass)
  }

  copyLink() {
    window.navigator.clipboard.writeText(this.url)
  }

  get label() {
    return this.optionsValue.label
  }
  get url() {
    return this.optionsValue.url
  }


  
}
