import ApplicationController from "../javascript/controllers/application_controller";

export default class RatioController extends ApplicationController {
  static targets = ["ratio", "divider"]
  static values = {
    ...super.values,
    ratio: { type: Number }
  }

  init() {
    this.initHTML()
    this.initTarget()
    this.initValue()
  }
  
  initParams() {
    this.setParams({name: 'ratio', defaultValue: 50})
    this.setParams({name: 'isReverse', defaultValue: false})
    this.setParams({name: 'isShowRatio', defaultValue: false})
    this.setParams({name: 'orientation', defaultValue: 'vertical'})
  }

  initValue() {
    this.ratioValue = this.ratioParams
  }

  initHTML() {
    if (this.typeParams=== 'progressBar') {
      this.element.innerHTML = this.typeHTML[this.typeParams]
    }
  }

  initTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'ratio')
    })
  }

  ratioValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }
    let ratio
    if (this.isReverseParams) {
      ratio = 100 - this.ratioValue
    } else {
      ratio = this.ratioValue
    }
    this.ratioTarget.style.width = `${ratio}%`
    if (this.isShowRatioParams) {
      this.ratioTarget.textContent = this.ratioValue
    }
  }

  changeRatio(event) {
    this.ratioValue = event.payload.value
  }
  
  get typeHTML() {
    return {
      progressBar: `
        <div data-${this.identifier}-target="ratio" style="width: ${this.ratioValue}%">
          ${this.isShowRatio ? this.ratioValue : ''}
        </div>
      `
    } 
  }

  get typeClass() {
    return {
      progressBar: {
        element: 'w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700',
        ratioTarget: 'bg-blue-600 h-2.5 rounded-full text-center p-0.5 leading-none duration-500 ease-out'
      },
      img: {
        element: '',
        ratioTarget: 'object-cover object-left  h-full w-full duration-1000'
      }
    }
  }


}