import Sortable from 'sortablejs';
import ApplicationComponentController from './application_component_controller';

export default class ListComponentController extends ApplicationComponentController {
  static targets = ['li']
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeTarget()
    // this.initializeClass()
    // this.initializeAction()

    this.initializeComplete()
  }

  initializeTarget() {
    this.element.querySelectorAll('li').forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'li')
    })
  }

  // initializeClass() {
  //   this.element.className = this.twMerge(this.element.className, this.klass)
  //   this.liTargets.forEach((target) => {
  //     target.className = this.twMerge(target.className, this.liClass)
  //   })
  // }

  initializeAction() {
    super.initializeAction()
    if (this.isSortable) {
      Sortable.create(this.element, this.sortableOptions)
    }
  }

  isOpenValueChanged(value, previousValue) {
    super.isOpenValueChanged(value, previousValue)
    if (this.isOpenValue) {
      this.liTarget.setAttribute('open', '')
    } else {
      this.liTarget.removeAttribute('open')
    }
  }

  // get liClass() {
  //   return this.optionsValue.liClass
  // }
  get isSortable() {
    if (this.sortableOptions || this.optionsValue.isSortable) { return true }
  }
  get sortableOptions() {
    return this.optionsValue.sortableOptions
  }


}