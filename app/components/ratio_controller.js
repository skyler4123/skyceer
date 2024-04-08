import ApplicationController from "../javascript/controllers/application_controller";

export default class RatioController extends ApplicationController {
  static targets = ["ratio", "divider"]
  static values = {
    ...super.values,
    ratio: { type: Number }
  }

  initialize() {
    super.initialize()
    this.initializeValue()
    this.initializeHTML()
    this.initializeTarget()
    this.initializeComplete()
  }
  
  initializeParams() {
    super.initializeParams()
    this.setParams({name: 'ratio', defaultValue: 50})
    this.setParams({name: 'isReverse', defaultValue: false})
    this.setParams({name: 'isShowRatio', defaultValue: false})
    this.setParams({name: 'orientation', defaultValue: 'vertical'})
  }

  initializeValue() {
    this.ratioValue = this.ratioParams
  }

  initializeHTML() {
    if (this.typeParams=== 'progressBar') {
      this.element.innerHTML = this.typeHTML[this.typeParams]
    }
  }

  initializeTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'ratio')
    })
  }

  // initializeClass() {
  //   if (this.type === 'progressBar') {
  //     this.element.className = this.twMerge(this.element.className, this.typeClass.progressBar.klass, this.klass)
  //     this.ratioTarget.className = this.twMerge(this.ratioTarget.className, this.typeClass.progressBar.ratioClass, this.ratioClass)
  //     return
  //   }
  //   super.initializeClass()
  // }


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
    this.ratioValue = event.value
  }

  // get ratioClass() {
  //   return this.paramsValue.ratioClass
  // }
  // get ratio() {
  //   return this.paramsValue.ratio || 50
  // }
  // get isReverse() {
  //   return this.paramsValue.isReverse || false
  // }
  // get isShowRatio() {
  //   return this.paramsValue.isShowRatio
  // }
  // get orientation() {
  //   return this.paramsValue.orientation || "vertical"
  // }
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