import ApplicationController from "../javascript/controllers/application_controller";

export default class CarouselController extends ApplicationController {
  static targets = ['carousel']
  static values = {
    ...super.values,
    intervalId: { type: Number }
  }

  initialize() {
    super.initialize()
    this.initializeTarget()
    this.initializeComplete()
  }

  initializeParams() {
    super.initializeParams()
    this.setParams({name: 'type', defaultValue: "default"})
    this.setParams({name: 'isInfinityScroll', defaultValue: true})

  }

  initializeTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, "carousel")
    })
  }
  initializeAction() {
    super.initializeAction()
    this.element.dataset.action = (this.element.dataset.action || "") + ` wheel->${this.identifier}#scroll:passive`
    if (this.hasTimeIntervalParams) {
      this.intervalIdValue = setInterval(() => { this.scrollForward() }, this.timeIntervalParams)
    }
  }

  scroll() {
    if (this.element.scrollLeft === 0) {
      this.scrollBack()
    }
    if ((this.element.scrollLeft + this.element.offsetWidth + 1) > this.element.scrollWidth) {
      this.scrollForward()
    }

  }

  scrollBack() {
    if (this.element.scrollLeft === 0 && this.isInfinityScrollParams) {
      this.prependCarousel()
    }
    this.element.scrollBy(-1, 0)
  }

  scrollForward() {
    if ((this.element.scrollLeft + this.element.offsetWidth + 1) > this.element.scrollWidth) {
      if (this.hasIsInfinityScrollParams && this.isInfinityScroll) {
        this.appendCarousel()
      } else {
        this.scrollStart()
        return
      }
    }
    this.element.scrollBy(1, 0)
  }

  scrollForwardAuto() {
    if (this.intervalIdValue) {
      this.intervalIdValue = false
    } else {
      this.intervalIdValue = setInterval(() => { this.scrollForward() }, this.timeIntervalParams || 2000)
    }
  }

  
  scrollStart() {
    this.element.scrollTo(0, 0)
  }

  scrollEnd() {
    this.element.scrollTo(this.element.scrollWidth, this.element.scrollHeight)
  }

  prependCarousel() {
    this.carouselTargets.forEach((target, index) => {
      this.element.insertBefore(target.cloneNode(true), this.element.childNodes[index])
    })
    this.reduceCarouselAt('append')
  }

  appendCarousel() {
    this.carouselTargets.forEach((target) => {
      this.element.appendChild(target.cloneNode(true))
    })
    this.reduceCarouselAt('prepend')
  }

  reduceCarouselAt(reduceAt) {
    if (this.carouselTargets.length > 32) {
      const length = Math.round(this.carouselTargets.length * 0.75)
      for (let i = 0; i < length; i++) {
        if (reduceAt === 'append') {
          this.element.removeChild(this.carouselTargets[this.carouselTargets.length - 1])
        } else {
          this.element.removeChild(this.carouselTarget)
        }
      }
    }
  }

  intervalIdValueChanged(value, previousValue) {
    clearInterval(previousValue)
  }

  // get type() {
  //   return this.paramsValue.type || 'default'
  // }
  get typeClass() {
    return {
      default: {
        element: 'h-96 w-[600px] flex flex-row rounded-lg items-center overflow-y-auto scroll-smooth snap-x snap-mandatory no-scrollbar',
        carouselTarget: 'flex-shrink-0 w-[300px] h-full snap-start snap-always'
      }
    }
  }
  get isInfinityScroll() {
    if (this.paramsValue.isInfinityScroll === undefined) {
      return true
    } else {
      return this.paramsValue.isInfinityScroll
    }
  }
  // get timeInterval() {
  //   return this.paramsValue.timeInterval
  // }



}
