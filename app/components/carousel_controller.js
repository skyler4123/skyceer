import ApplicationController from "../javascript/controllers/application_controller";

export default class CarouselController extends ApplicationController {
  static targets = ['carousel']
  static values = {
    ...super.values,
    intervalId: { type: Number },
    index: { type: Number, default: 0 },
  }

  init() {
    this.initTarget()
  }

  initParams() {
    this.setParams({name: 'type', defaultValue: "default"})
    this.setParams({name: 'isInfinityScroll', defaultValue: true})

  }

  initTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, "carousel")
    })
  }
  initAction() {
    // this.element.dataset.action = (this.element.dataset.action || "") + ` wheel->${this.identifier}#scroll:passive`
    if (this.hasTimeIntervalParams) {
      this.intervalIdValue = setInterval(() => { this.scrollNext() }, this.timeIntervalParams)
    }
  }

  indexValueChanged(value, previousValue) {
    if (this.indexValue > this.carouselCount - 2) { return this.indexValue = 0 }
    if (this.indexValue < 0) { return this.indexValue = this.carouselCount - 2 }
    this.element.scrollTo(this.indexValue * this.carouselWidth, 0)
  }

  get carouselCount() {
    return this.carouselTargets.length
  }
  get carouselWidth() {
    return this.element.scrollWidth / this.carouselCount
  }

  scrollBack() {
    this.indexValue -= 1
  }

  scrollNext() {
    this.indexValue += 1
  }

  scrollNextAuto() {
    this.intervalIdValue = setInterval(() => { this.scrollNext() }, this.timeIntervalParams || 2000)
  }

  
  scrollToFirst() {
    this.indexValue = 0
  }

  scrollToEnd() {
    this.indexValue = this.carouselCount
  }

  // prependCarousel() {
  //   this.carouselTargets.forEach((target, index) => {
  //     this.element.insertBefore(target.cloneNode(true), this.element.childNodes[index])
  //   })
  //   this.reduceCarouselAt('append')
  // }

  // appendCarousel() {
  //   this.carouselTargets.forEach((target) => {
  //     this.element.appendChild(target.cloneNode(true))
  //   })
  //   this.reduceCarouselAt('prepend')
  // }

  // reduceCarouselAt(reduceAt) {
  //   if (this.carouselTargets.length > 32) {
  //     const length = Math.round(this.carouselTargets.length * 0.75)
  //     for (let i = 0; i < length; i++) {
  //       if (reduceAt === 'append') {
  //         this.element.removeChild(this.carouselTargets[this.carouselTargets.length - 1])
  //       } else {
  //         this.element.removeChild(this.carouselTarget)
  //       }
  //     }
  //   }
  // }

  intervalIdValueChanged(value, previousValue) {
    clearInterval(previousValue)
  }


  get typeClass() {
    return {
      default: {
        element: 'h-96 w-[600px] flex flex-row rounded-lg items-center overflow-y-auto scroll-smooth snap-x snap-mandatory no-scrollbar',
        carouselTarget: 'flex-shrink-0 w-[300px] h-full snap-start snap-always'
      }
    }
  }


}
