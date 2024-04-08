import Sortable from 'sortablejs';
import ApplicationController from "../javascript/controllers/application_controller";

export default class ListController extends ApplicationController {
  static targets = ['li']
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeTarget()
    this.initializeComplete()
  }

  initializeParams() {
    super.initializeParams()
    this.setParams({name: 'sort', defaultValue: true})
  }

  initializeTarget() {
    this.element.querySelectorAll('li').forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'li')
    })
  }

  initializeAction() {
    super.initializeAction()
    if (this.hasSortParams) {
      Sortable.create(this.element, this.sortParams)
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

  // get isSortable() {
  //   if (this.sortableOptions || this.paramsValue.isSortable) { return true }
  // }
  // get sortableOptions() {
  //   return this.paramsValue.sortableOptions
  // }


}