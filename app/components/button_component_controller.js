import morphdom from "morphdom"
import { twMerge } from 'tailwind-merge'
import { useHover, useClickOutside } from 'stimulus-use'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['content', 'button', 'hidden']
  static values = {
    options: { type: Object }
  }

  initialize() {
    this.initializeID()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  get isTest() {
    return this.optionsValue.test
  }
  get events() {
    return this.optionsValue.events
  }
  get action() {
    return this.optionsValue.actions
  }
  isPreventDefault(action) {
    return this.eventWithAction(action).prevent_default
  }
  isStopPropagation(action) {
    return this.eventWithAction(action).stop_propagation
  }

  variants() {
    return {
      primary: " bg-primary text-primary-foreground hover:bg-primary/80 ",
      secondary: " bg-secondary text-secondary-foreground hover:bg-secondary/80 ",
      outline: "  border border-input bg-background hover:bg-accent hover:text-accent-foreground ",
      ghost: " hover:bg-accent hover:text-accent-foreground  ",
      destructive: " bg-destructive text-destructive-foreground hover:bg-destructive/90 ",
    }
  }

  get variant() {
    return this.variants()[this.optionsValue.variant]
  }

  initializeClass() {
    console.log(this.variant)
    this.element.className = twMerge(this.element.className, this.optionsValue.klass)
    this.contentTarget.className = twMerge(this.contentTarget.className, this.variant, this.optionsValue.contentClass)
    this.buttonTarget.className = twMerge(this.buttonTarget.className, this.optionsValue.buttonClass)
  }

  initializeAction() {
    this.element.dataset.action = this.element.dataset.action + ' ' + this.action
    this.events.forEach((event) => {
      if (event.listener === 'hover') {
        this.element.dataset.action = this.element.dataset.action + ' ' + `mouseenter->${this.identifier}#${event.action} mouseleave->${this.identifier}#${event.action}`
        return
      }
      this.element.dataset.action = this.element.dataset.action + ' ' + `${event.listener}->${this.identifier}#${event.action}`
    })
  }

  eventWithAction(action) {
    return this.events.find(event => event.action === action)
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

  connect() {
    if (this.isTest) {
      console.log(this)
    }
  }
  
}
