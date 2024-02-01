import { twMerge } from 'tailwind-merge'
import BaseComponentController from './base_component_controller';

export default class extends BaseComponentController {
  static targets = ['content']
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeClass() {
    if (this.orientation === 'vertical') {
      this.element.className = twMerge(this.element.className , "grid grid-rows-[0fr] open:grid-rows-[1fr] transition-all duration-200 ease-out overflow-hidden", this.klass)
      this.contentTarget.className = twMerge("overflow-hidden", this.variant, this.contentClass)
    }
    if (this.orientation === "horizontal") {
      this.element.className = twMerge(this.element.className , "whitespace-nowrap grid grid-cols-[0fr] open:grid-rows-[1fr] open:grid-cols-[1fr] transition-all duration-200 ease-out overflow-hidden", this.optionsValue.klass)
      this.contentTarget.className = twMerge("overflow-hidden", this.variant, this.optionsValue.contentClass)
    }
  }

  get contentClass() {
    return this.optionsValue.contentClass
  }



}
