import ApplicationComponentController from './application_component_controller';

export default class RatioComponentController extends ApplicationComponentController {
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
  
  initializeValue() {
    this.ratioValue = this.ratio
  }

  initializeHTML() {
    if (this.type === 'progressBar') {
      this.element.innerHTML = this.typeHTML[this.type]
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
    if (this.isReverse) {
      ratio = 100 - this.ratioValue
    } else {
      ratio = this.ratioValue
    }
    this.ratioTarget.style.width = `${ratio}%`
    if (this.isShowRatio) {
      this.ratioTarget.textContent = this.ratioValue
    }
  }

  changeRatio(event) {
    this.ratioValue = event.value
  }

  get ratioClass() {
    return this.optionsValue.ratioClass
  }
  get ratio() {
    return this.optionsValue.ratio || 50
  }
  get isReverse() {
    return this.optionsValue.isReverse || false
  }
  get isShowRatio() {
    return this.optionsValue.isShowRatio
  }
  get orientation() {
    return this.optionsValue.orientation || "vertical"
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