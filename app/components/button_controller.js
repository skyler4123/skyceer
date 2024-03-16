import morphdom from "morphdom"
import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationController from "../javascript/controllers/application_controller";

export default class ButtonController extends ApplicationController {
  static targets = ['label', 'toggle']
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeComplete()
  }
  connect() {
    super.connect()
    useClickOutside(this)
  }

  initializeHTML() {
    if (this.label) {
      this.element.innerHTML = this.label
      return
    }
    if (Object.keys(this.typeHTML).includes(this.type)) {
      this.element.innerHTML = this.typeHTML[this.type]
    }
  }

  isOpenValueChanged(value, previousValue) {
    super.isOpenValueChanged(value, previousValue)
    if (this.type === 'toggle') {
      if (this.isOpenValue) {
        this.toggleTarget.setAttribute('open', '')
      } else {
        this.toggleTarget.removeAttribute('open')
      }
    }
  }

  runActionOnOtherControllers(action) {
    this.controllers.forEach((controller) => {
      if (this === controller) { return }
      if (typeof controller[action] !== 'undefined') {
        controller[action]()
      }
    })
  }

  darkMode() {
    this.htmlTag.classList.toggle('dark')
  }

  get isRememberMe() {
    return this.optionsValue.isRememberMe || false
  }
  get typeHTML() {
    return {
      toggle: `<div data-${this.identifier}-target='toggle'></div>`
    }
  }
  get typeClass() {
    return {
      toggle: {
        element: 'bg-gray-200 open:bg-blue-600 relative w-11 h-6 rounded-full cursor-pointer duration-200 ease-out',
        toggleTarget: 'bg-white absolute w-5 h-5 ml-0.5 rounded-full top-1/2 left-0 -translate-y-1/2 open:translate-x-full duration-200 ease-out'
      }
    }
  }
  get variantClass() {
    return {
      default: {
        element: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      },
      pill: {
        element: 'text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      },
      gradientMonochrome: {
        element: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
      },
      gradientDuotone: {
        element: 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
      },
      gradientOutline: {
        element: 'relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
      },
      coloredShadows: {
        element: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
      },
      outline: {
        element: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800',
      },
    }
  }
  
  // isPreventDefault(action) {
  //   return this.eventWithAction(action).isPreventDefault
  // }

  // isStopPropagation(action) {
  //   return this.eventWithAction(action).isStopPropagation
  // }

  // toggle(event) {
  //   if (this.isPreventDefault('toggle')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('toggle'), controller: this } } })
  //   if (this.isStopPropagation('toggle')) { event.stopPropagation() }
  // }

  // open(event) {
  //   if (this.isPreventDefault('open')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('open'), controller: this } } })
  //   if (this.isStopPropagation('open')) { event.stopPropagation() }
  // }

  // close(event) {
  //   if (this.isPreventDefault('close')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('close'), controller: this } } })
  //   if (this.isStopPropagation('close')) { event.stopPropagation() }
  // }

  // switch(event) {
  //   if (this.isPreventDefault('switch')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('switch'), controller: this } } })
  //   if (this.isStopPropagation('switch')) { event.stopPropagation() }
  // }

  // tab(event) {
  //   if (this.isPreventDefault('tab')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tab'), controller: this } } })
  //   if (this.isStopPropagation('tab')) { event.stopPropagation() }
  // }

  // copyLink(event) {
  //   if (this.isPreventDefault('copyLink')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('copyLink'), controller: this } } })
  //   if (this.isStopPropagation('copyLink')) { event.stopPropagation() }
  // }

  // copyText(event) {
  //   if (this.isPreventDefault('copyText')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('copyText'), controller: this } } })
  //   if (this.isStopPropagation('copyText')) { event.stopPropagation() }
  // }

  // scrollBack(event) {
  //   if (this.isPreventDefault('scrollBack')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('scrollBack'), controller: this } } })
  //   if (this.isStopPropagation('scrollBack')) { event.stopPropagation() }
  // }

  // scrollForward(event) {
  //   if (this.isPreventDefault('scrollForward')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('scrollForward'), controller: this } } })
  //   if (this.isStopPropagation('scrollForward')) { event.stopPropagation() }
  // }

  // scrollForwardAuto(event) {
  //   if (this.isPreventDefault('scrollForwardAuto')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('scrollForwardAuto'), controller: this } } })
  //   if (this.isStopPropagation('scrollForwardAuto')) { event.stopPropagation() }
  // }

  // rotate(event) {
  //   if (this.isPreventDefault('rotate')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('rotate'), controller: this } } })
  //   if (this.isStopPropagation('rotate')) { event.stopPropagation() }
  // }

  // changeRatio(event) {
  //   if (this.isPreventDefault('changeRatio')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('changeRatio'), controller: this } } })
  //   if (this.isStopPropagation('changeRatio')) { event.stopPropagation() }
  // }

  // tab(event) {
  //   if (this.isPreventDefault('tab')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tab'), controller: this } } })
  //   if (this.isStopPropagation('tab')) { event.stopPropagation() }
  // }

  // tabNext(event) {
  //   if (this.isPreventDefault('tabNext')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabNext'), controller: this } } })
  //   if (this.isMultiController) { this.runActionOnOtherControllers('tabNext') }
  //   if (this.isStopPropagation('tabNext')) { event.stopPropagation() }
  // }

  // tabBack(event) {
  //   if (this.isPreventDefault('tabBack')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabBack'), controller: this } } })
  //   if (this.isMultiController) { this.runActionOnOtherControllers('tabNext') }
  //   if (this.isStopPropagation('tabBack')) { event.stopPropagation() }
  // }

  // tabFirst(event) {
  //   if (this.isPreventDefault('tabFirst')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabFirst'), controller: this } } })
  //   if (this.isMultiController) { this.runActionOnOtherControllers('tabFirst') }
  //   if (this.isStopPropagation('tabFirst')) { event.stopPropagation() }
  // }

  // tabLast(event) {
  //   if (this.isPreventDefault('tabLast')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabLast'), controller: this } } })
  //   if (this.isMultiController) { this.runActionOnOtherControllers('tabLast') }
  //   if (this.isStopPropagation('tabLast')) { event.stopPropagation() }
  // }

  // openEditor(event) {
  //   if (this.isPreventDefault('openEditor')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('openEditor'), controller: this } } })
  //   if (this.isStopPropagation('openEditor')) { event.stopPropagation() }

  //   this.element.dataset.action = this.element.dataset.action + ` ${this.identifier}:click:outside->${this.identifier}#closeEditor`
  // }

  // closeEditor(event) {
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('openEditor'), action: 'closeEditor', controller: this } } })

  //   this.element.dataset.action = this.element.dataset.action.replace(`${this.identifier}:click:outside->${this.identifier}#closeEditor`, '')
  // }

  // toggleRememberMe(event) {
  //   if (this.isPreventDefault('toggleRememberMe')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('toggleRememberMe'), controller: this } } })
  //   if (this.isStopPropagation('toggleRememberMe')) { event.stopPropagation() }
  // }

  // increase(event) {
  //   if (this.isPreventDefault('increase')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('increase'), controller: this } } })
  //   if (this.isStopPropagation('increase')) { event.stopPropagation() }
  // }

  // decrease(event) {
  //   if (this.isPreventDefault('decrease')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('decrease'), controller: this } } })
  //   if (this.isStopPropagation('decrease')) { event.stopPropagation() }
  // }

  upToTop() {
    document.scrollingElement.scrollTo(0, 0)
  }

  // rating(event) {
  //   if (this.isPreventDefault('rating')) { event.preventDefault() }
  //   this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('rating'), controller: this } } })
  //   if (this.isStopPropagation('rating')) { event.stopPropagation() }
  // }

}
