import ApplicationComponentController from './application_component_controller';

export default class LinkComponentController extends ApplicationComponentController {
  static targets = ['link']
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
    if (this.linkTarget.childElementCount === 0) { this.linkTarget.textContent = this.label }
    this.linkTarget.href = this.url
  }
  initializeClass() {
    this.element.className = this.twMerge(this.element.className, this.optionsValue.klass)
    this.linkTarget.className = this.twMerge(this.linkTarget.className, this.optionsValue.linkClass)
  }

  copyLink() {
    window.navigator.clipboard.writeText(this.url)
  }

  get label() {
    return this.optionsValue.label
  }
  get url() {
    return this.optionsValue.url || '/#'
  }


  
}
