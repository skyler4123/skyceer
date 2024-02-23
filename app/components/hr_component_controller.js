import ApplicationComponentController from './application_component_controller';

export default class HrComponentController extends ApplicationComponentController {
  static targets = ['content', 'hr']
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeTarget()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeHTML() {
    this.element.innerHTML = this.initHTML
  }

  initializeTarget() {
    this.hrTarget.nextElementSibling?.setAttribute(`data-${this.identifier}-target`, 'content')
  }

  initializeClass() {
    this.element.className = this.twMerge(`w-full my-5 ${this.hasContentTarget ? 'relative' : ''}`, this.element.className, this.klass)
    this.hrTarget.className = this.twMerge("w-full h-0.5 bg-gray-200 border-0 dark:bg-gray-700", this.hrTarget.className, this.hrClass)
    if (this.hasContentTarget) {
      this.contentTarget.className = this.twMerge("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2", this.contentTarget.className, this.contentClass)
    }
  }

  get initHTML() {
    return `
      <hr data-${this.identifier}-target="hr">
      ${this.element.innerHTML}
    `
  }
  get hrClass() {
    return this.optionsValue.hrClass
  }
  get typeClass() {
    return {
      default: {
        element: `w-full my-5 ${this.hasContentTarget ? 'relative' : ''}`,
        contentTarget: 'w-full h-0.5 bg-gray-200 border-0 dark:bg-gray-700',
        hrTarget: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2',
      }
    }
  }



}
