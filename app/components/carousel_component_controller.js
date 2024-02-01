import { twMerge } from 'tailwind-merge'
import { Camelize } from "./helpers";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['carousel']
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    intervalId: { type: Number }
  }

  initialize() {
    this.optionsValue = Camelize(this.optionsValue)
    this.initializeID()
    this.initializeTarget()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }
  connect() {
    if (this.isTest) { console.log(this) }
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, "carousel")
    })
  }
  initializeClass() {
    this.element.className = twMerge(this.element.className , "h-96 w-[600px] flex flex-row rounded-lg items-center overflow-y-auto scroll-smooth snap-x snap-mandatory no-scrollbar", this.klass)
    this.carouselTargets.forEach((target) => {
      target.className = twMerge("flex-shrink-0 w-[300px] h-full snap-start snap-always", this.carouselClass)
    })
  }

  initializeAction() {
    if (this.eventId) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
    this.element.dataset.action = (this.element.dataset.action || "") + ` wheel->${this.identifier}#scroll`
    if (this.timeInterval) {
      this.intervalIdValue = setInterval(() => { this.scrollForward() }, this.timeInterval)
    }
  }

  globalDispatch({ detail: { event } }) {
    if (this.eventId === event.id && this.id !== event.controller.id) {
      eval(`this.${event.action}(event)`)
    }
  }

  toggle() {
    this.isOpenValue = !this.isOpenValue
  }

  open() {
    this.isOpenValue = true
  }

  close() {
    this.isOpenValue = false
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
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

  get dir() {
    return this.optionsValue.dir || false
  }
  get klass() {
    return this.optionsValue.klass
  }
  get carouselClass() {
    return this.optionsValue.carouselClass
  }
  get id() {
    return this.element.id
  }
  get isTest() {
    return this.optionsValue.isTest
  }
  get event() {
    return this.optionsValue.event
  }
  get eventId() {
    return this.event?.id || this.optionsValue.eventId || this.parentButtonEventId
  }
  get parentButtonController() {
    if (this.element.parentNode.closest('[data-controller]').dataset.controller.includes('button-component')) {
      return this.element.parentNode.closest('[data-controller*="button-component"]')
    } else {
      return false
    }
  }
  get parentButtonEventId() {
    if (this.parentButtonController) {
      return JSON.parse(this.parentButtonController.dataset.buttonComponentOptionsValue).events[0].id
    }
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
