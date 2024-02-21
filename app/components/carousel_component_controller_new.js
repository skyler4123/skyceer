import ApplicationComponentController from './application_component_controller';

export default class CarouselComponentController extends ApplicationComponentController {
  static targets = ['carousel']
  static values = {
    ...super.values,
    scrollLeft: { type: Number },
    scrollHeight: { type: Number },
    intervalId: { type: Number }
  }

  initialize() {
    super.initialize()
    this.initializeTarget()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, "carousel")
    })
  }
  initializeClass() {
    this.element.className = this.twMerge(this.element.className , "h-96 w-[600px] flex flex-row rounded-lg items-center overflow-y-auto scroll-smooth snap-x snap-mandatory no-scrollbar", this.klass)
    this.carouselTargets.forEach((target) => {
      target.className = this.twMerge("flex-shrink-0 w-[300px] h-full snap-start snap-always", this.carouselClass)
    })
    this.scrollWidth = this.element.scrollWidth
  }

  initializeAction() {
    super.initializeAction()
    this.element.dataset.action = (this.element.dataset.action || "") + ` wheel->${this.identifier}#scroll:passive`
    if (this.timeInterval) {
      this.intervalIdValue = setInterval(() => { this.scrollForward() }, this.timeInterval)
    }
  }

  scrollLeftValueChanged(value, previousValue) {

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
    if (this.element.scrollLeft === 0 && this.isInfinityScroll) {
      this.prependCarousel()
    }
    this.element.scrollBy(-1, 0)
  }

  scrollForward() {
    if ((this.element.scrollLeft + this.element.offsetWidth + 1) > this.element.scrollWidth) {
      if (this.isInfinityScroll) {
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
      this.intervalIdValue = setInterval(() => { this.scrollForward() }, this.timeInterval || 2000)
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
      this.element.insertBefore(target.cloneNode(true), this.element.children[index])
    })
    console.log('prepend')
    this.element.scrollLeft = this.scrollWidth
    this.reduceCarouselAt('append')
  }

  appendCarousel() {
    this.carouselTargets.forEach((target) => {
      this.element.appendChild(target.cloneNode(true))
    })
    this.reduceCarouselAt('prepend')
  }

  reduceCarouselAt(reduceAt) {
    if (this.carouselTargets.length > 64) {
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

  get carouselClass() {
    return this.optionsValue.carouselClass
  }
  get isInfinityScroll() {
    if (this.optionsValue.isInfinityScroll === undefined) {
      return true
    } else {
      return this.optionsValue.isInfinityScroll
    }
  }
  get timeInterval() {
    return this.optionsValue.timeInterval
  }

}
