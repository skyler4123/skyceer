import Sortable from 'sortablejs';
import ApplicationController from "../javascript/controllers/application_controller";

export default class ListController extends ApplicationController {
  static targets = ['li']
  static values = {
    ...super.values,
  }

  init() {
    // super.init()
    this.initTarget()
    // this.initComplete()
  }

  initParams() {
    // super.initParams()
    this.setParams({name: 'sort', defaultValue: true})
  }

  initTarget() {
    this.element.querySelectorAll('li').forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'li')
    })
  }

  initAction() {
    // super.initAction()
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