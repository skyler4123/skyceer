import ApplicationComponentController from './application_component_controller';

export default class LinkComponentController extends ApplicationComponentController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeComplete()
  }

  initializeHTML() {
    if (this.hasLabel) { this.element.innerHTML = this.label }
    this.element.href = this.url
  }
  
  copyLink() {
    window.navigator.clipboard.writeText(this.url)
  }

  get url() {
    return this.optionsValue.url || '/#'
  }

  
}
