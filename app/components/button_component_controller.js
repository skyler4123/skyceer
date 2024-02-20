import morphdom from "morphdom"
import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationComponentController from './application_component_controller';

export default class ButtonComponentController extends ApplicationComponentController {
  static targets = ['button']
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeClass()
    this.initializeAction()
    this.initializeValue()
    // Demo()
    this.initializeComplete()
  }
  connect() {
    super.connect()
    useClickOutside(this)
  }

  isPreventDefault(action) {
    return this.eventWithAction(action).isPreventDefault
  }
  isStopPropagation(action) {
    return this.eventWithAction(action).isStopPropagation
  }

  initializeHTML() {
    if (this.buttonTarget.childElementCount === 0) { this.buttonTarget.textContent = this.label }
  }
  initializeClass() {
    if (this.type === 'toggle') {
      this.element.className = this.twMerge(this.element.className, this.typeClass.toggle.klass)
      this.buttonTarget.className = this.twMerge(this.buttonTarget.className, this.typeClass.toggle.buttonClass)
    }
    this.element.className = this.twMerge(this.element.className, this.klass)
    this.buttonTarget.className = this.twMerge(this.buttonTarget.className, this.buttonClass)
  }

  initializeAction() {
    if (this.type === 'toggle') {
      this.element.dataset.action = this.dataAction + ' ' + `click->${this.identifier}#selfToggle`
    }
    if (this.actions) {
      this.actions.forEach((action) => {
        this.element.dataset.action = this.dataAction + ' ' + `${Object.values(action)[0]}->${this.identifier}#${Object.values(action)[1]}`
      })
    }
    if (this.events) {
      this.events.forEach((event) => {
        if (event.initialize) {
          setTimeout(() => {
            this.dispatch('dispatch', { detail: { event: { ...event, controller: this } } })
          }, 500)
        }
        switch(event.listener) {
          case 'hover':
            this.element.dataset.action = this.dataAction + ' ' + `mouseenter->${this.identifier}#${event.action} mouseleave->${this.identifier}#${event.action}`
            break;
          case 'clickOutside':
            this.element.dataset.action = this.dataAction + ' ' + `${this.identifier}:click:outside->${this.identifier}#${event.action}`
            break;
          default:
            this.element.dataset.action = this.dataAction + ' ' + `${event.listener}->${this.identifier}#${event.action}`
        } 
        // if (event.listener === 'hover') {
        //   this.element.dataset.action = this.element.dataset.action + ' ' + `mouseenter->${this.identifier}#${event.action} mouseleave->${this.identifier}#${event.action}`
        // } else {
        //   this.element.dataset.action = this.element.dataset.action + ' ' + `${event.listener}->${this.identifier}#${event.action}`
        // }
      })
    }
  }

  initializeValue() {
    if (typeof this.optionsValue.isOpen != "undefined") {
      this.isOpenValue = this.optionsValue.isOpen
    }
  }

  eventWithAction(action) {
    return this.events.find(event => event.action === action)
  }

  selfToggle() {
    this.isOpenValue = !this.isOpenValue
  }

  selfOpen() {
    this.isOpenValue = true
  }

  selfClose() {
    this.isOpenValue = false
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
      this.buttonTarget.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
      this.buttonTarget.removeAttribute('open')
    }
  }

  toggle(event) {
    if (this.isPreventDefault('toggle')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('toggle'), controller: this } } })
    if (this.isStopPropagation('toggle')) { event.stopPropagation() }
  }

  open(event) {
    if (this.isPreventDefault('open')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('open'), controller: this } } })
    if (this.isStopPropagation('open')) { event.stopPropagation() }
  }

  close(event) {
    if (this.isPreventDefault('close')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('close'), controller: this } } })
    if (this.isStopPropagation('close')) { event.stopPropagation() }
  }

  switch(event) {
    if (this.isPreventDefault('switch')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('switch'), controller: this } } })
    if (this.isStopPropagation('switch')) { event.stopPropagation() }
  }

  tab(event) {
    if (this.isPreventDefault('tab')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tab'), controller: this } } })
    if (this.isStopPropagation('tab')) { event.stopPropagation() }
  }

  copyLink(event) {
    if (this.isPreventDefault('copyLink')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('copyLink'), controller: this } } })
    if (this.isStopPropagation('copyLink')) { event.stopPropagation() }
  }

  copyText(event) {
    if (this.isPreventDefault('copyText')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('copyText'), controller: this } } })
    if (this.isStopPropagation('copyText')) { event.stopPropagation() }
  }

  scrollBack(event) {
    if (this.isPreventDefault('scrollBack')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('scrollBack'), controller: this } } })
    if (this.isStopPropagation('scrollBack')) { event.stopPropagation() }
  }

  scrollForward(event) {
    if (this.isPreventDefault('scrollForward')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('scrollForward'), controller: this } } })
    if (this.isStopPropagation('scrollForward')) { event.stopPropagation() }
  }

  scrollForwardAuto(event) {
    if (this.isPreventDefault('scrollForwardAuto')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('scrollForwardAuto'), controller: this } } })
    if (this.isStopPropagation('scrollForwardAuto')) { event.stopPropagation() }
  }

  rotate(event) {
    if (this.isPreventDefault('rotate')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('rotate'), controller: this } } })
    if (this.isStopPropagation('rotate')) { event.stopPropagation() }
  }

  changeRatio(event) {
    if (this.isPreventDefault('changeRatio')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('changeRatio'), controller: this } } })
    if (this.isStopPropagation('changeRatio')) { event.stopPropagation() }
  }

  tab(event) {
    if (this.isPreventDefault('tab')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tab'), controller: this } } })
    if (this.isStopPropagation('tab')) { event.stopPropagation() }
  }

  tabNext(event) {
    if (this.isPreventDefault('tabNext')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabNext'), controller: this } } })
    if (this.isMultiController) { this.runActionOnOtherControllers('tabNext') }
    if (this.isStopPropagation('tabNext')) { event.stopPropagation() }
  }

  tabBack(event) {
    if (this.isPreventDefault('tabBack')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabBack'), controller: this } } })
    if (this.isMultiController) { this.runActionOnOtherControllers('tabNext') }
    if (this.isStopPropagation('tabBack')) { event.stopPropagation() }
  }

  tabFirst(event) {
    if (this.isPreventDefault('tabFirst')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabFirst'), controller: this } } })
    if (this.isMultiController) { this.runActionOnOtherControllers('tabFirst') }
    if (this.isStopPropagation('tabFirst')) { event.stopPropagation() }
  }

  tabLast(event) {
    if (this.isPreventDefault('tabLast')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabLast'), controller: this } } })
    if (this.isMultiController) { this.runActionOnOtherControllers('tabLast') }
    if (this.isStopPropagation('tabLast')) { event.stopPropagation() }
  }

  openEditor(event) {
    if (this.isPreventDefault('openEditor')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('openEditor'), controller: this } } })
    if (this.isStopPropagation('openEditor')) { event.stopPropagation() }

    this.element.dataset.action = this.element.dataset.action + ` ${this.identifier}:click:outside->${this.identifier}#closeEditor`
  }

  closeEditor(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('openEditor'), action: 'closeEditor', controller: this } } })

    this.element.dataset.action = this.element.dataset.action.replace(`${this.identifier}:click:outside->${this.identifier}#closeEditor`, '')
  }

  toggleRememberMe(event) {
    if (this.isPreventDefault('toggleRememberMe')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('toggleRememberMe'), controller: this } } })
    if (this.isStopPropagation('toggleRememberMe')) { event.stopPropagation() }
  }

  increase(event) {
    if (this.isPreventDefault('increase')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('increase'), controller: this } } })
    if (this.isStopPropagation('increase')) { event.stopPropagation() }
  }

  decrease(event) {
    if (this.isPreventDefault('decrease')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('decrease'), controller: this } } })
    if (this.isStopPropagation('decrease')) { event.stopPropagation() }
  }

  upToTop() {
    document.scrollingElement.scrollTo(0, 0)
  }

  rating(event) {
    if (this.isPreventDefault('rating')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('rating'), controller: this } } })
    if (this.isStopPropagation('rating')) { event.stopPropagation() }
  }

  runActionOnOtherControllers(action) {
    this.controllers.forEach((controller) => {
      if (this === controller) { return }
      if (typeof controller[action] !== 'undefined') {
        controller[action]()
      }
    })
  }

  get buttonClass() {
    return this.optionsValue.buttonClass
  }
  get label() {
    return this.optionsValue.label
  }
  get events() {
    return this.optionsValue.events
  }
  get eventIds() {
    return this.events.map((event) => (event.id))
  }
  get actions() {
    return this.optionsValue.actions
  }
  get isRememberMe() {
    return this.optionsValue.isRememberMe || false
  }
  get typeClass() {
    return {
      toggle: {
        klass: 'bg-gray-200 open:bg-blue-600 relative w-11 h-6 rounded-full cursor-pointer duration-200 ease-out',
        buttonClass: 'bg-white absolute w-5 h-5 ml-0.5 rounded-full top-1/2 left-0 -translate-y-1/2 open:translate-x-full duration-200 ease-out'
      }
    }
  }
  get variants() {
    return {
      primary: " bg-primary text-primary-foreground hover:bg-primary/80 ",
      secondary: " bg-secondary text-secondary-foreground hover:bg-secondary/80 ",
      outline: "  border border-input bg-background hover:bg-accent hover:text-accent-foreground ",
      ghost: " hover:bg-accent hover:text-accent-foreground  ",
      destructive: " bg-destructive text-destructive-foreground hover:bg-destructive/90 ",
    }
  }
  get variant() {
    return this.variants[this.optionsValue.variant]
  }


}
