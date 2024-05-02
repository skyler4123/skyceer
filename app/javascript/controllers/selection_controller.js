import ApplicationController from './application_controller'

export default class SelectionController extends ApplicationController {
  static targets = ['item']
  static values = {
    ...super.values,
    index: { type: Array },
  }

  initParams() {
    this.setParams({name: 'type', defaultValue: 'rating'})
    if (this.typeParams === 'rating') {
      this.setParams({name: 'variant', defaultValue: 'star'})
    }
  }

  init() {
    // console.log(this)
    this.initTarget()
  }

  initTarget() {
    // console.log(this.element.children)
    Array.from(this.element.children).forEach((target, index) => {
      target.setAttribute(`data-${this.identifier}-target`, 'item')
      target.setAttribute('data-action', `click->${this.identifier}#select`)
    })
    if (this.indexValue.length === 0) {
      this.indexValue = Array.from({ length: this.selectCount}, () => false )
    }
  }

  get selectCount() {
    return this.itemTargets.length
  }
  
  select(event) {
    if (this.typeParams === 'rating') {
      this.itemTargets.forEach((target, index) => {
        // console.log(index)
        // console.log(this.getTargetIndexFromEvent({ event: event, targets: this.itemTargets }))
        if (index <= this.getTargetIndexFromEvent({ event: event, targets: this.itemTargets })) {
          const currentIndexValue = this.indexValue
          currentIndexValue[index] = true
          this.indexValue = currentIndexValue
        } else {
          const currentIndexValue = this.indexValue
          currentIndexValue[index] = false
          this.indexValue = currentIndexValue
        }
      })
    }
    // this.selectValue = event.params['select']
  }


  indexValueChanged(value, previousValue) {
    this.startViewTransition(() => {
      this.itemTargets.forEach((target, index) => {
        if (this.typeParams === 'rating') {
          if (this.indexValue[index]) {
            target.setAttribute('open', '')
          } else {
            target.removeAttribute('open')
          }
        
        }

      })
    })
  }



  get variantClass() {
    return {
      star: {
        element: 'flex flex-row',
        itemTarget: 'cursor-pointer open:text-yellow-500 open:fill-yellow-500',
      }
    }
  }

}
