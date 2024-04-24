{/* <div data-controller="rating">
  <%= icon %>
  <%= icon %>
  <%= icon %>
  <%= icon %>
  <%= icon %>
</div> */}

import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['ratingItem']
  static values = {
    ...super.values,
    rating: { type: Number },
  }

  init() {
    // super.init()
    this.initTarget()
    // this.initComplete()
  }

  initTarget() {
    Array.from(this.element.children).forEach((target, index) => {
      target.setAttribute(`data-${this.identifier}-target`, 'ratingItem')
      target.setAttribute(`data-${this.identifier}-rating-param`, index)
      target.setAttribute('data-action', `click->${this.identifier}#rating`)
    })
  }

  initClass() {
    setTimeout(() => {
      super.initClass()
    })
  }

  rating(event) {
    this.ratingValue = event.params['rating']
  }

  ratingValueChanged(value, previousValue) {
    this.ratingItemTargets.forEach((target, index) => {
      if (index <= this.ratingValue) {
        target.setAttribute('open', '')
      } else {
        target.removeAttribute('open')
      }
    })
  }

  get type() {
    return this.paramsValue.type || 'yellowStar'
  }
  get typeClass() {
    return {
      yellowStar: {
        element: 'flex flex-row',
        ratingItemTarget: 'cursor-pointer open:text-yellow-500 open:fill-yellow-500',
      }
    }
  }

}
