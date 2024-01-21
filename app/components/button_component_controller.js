import morphdom from "morphdom"
import { twMerge } from 'tailwind-merge'
import { useHover, useClickOutside } from 'stimulus-use'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['content', 'button', 'hidden']
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
  }

  initialize() {
    this.initializeID()
    this.initializeHTML()
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
  get klass() {
    return this.optionsValue.klass
  }
  get contentClass() {
    return this.optionsValue.contentClass
  }
  get buttonClass() {
    return this.optionsValue.buttonClass
  }
  get id() {
    return this.element.id
  }
  get label() {
    return this.optionsValue.label
  }
  get isTest() {
    return this.optionsValue.isTest
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
  isPreventDefault(action) {
    return this.eventWithAction(action).preventDefault
  }
  isStopPropagation(action) {
    return this.eventWithAction(action).stopPropagation
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
  initializeHTML() {
    if (this.buttonTarget.childElementCount === 0) { this.buttonTarget.textContent = this.label }
  }
  initializeClass() {
    this.element.className = twMerge(this.element.className, this.klass)
    this.contentTarget.className = twMerge(this.contentTarget.className, this.variant, this.contentClass)
    this.buttonTarget.className = twMerge(this.buttonTarget.className, this.buttonClass)
  }

  initializeAction() {
    if (!this.events) { return }

    this.element.dataset.action = (this.element.dataset.action || '') + ' ' + (this.actions || '')
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

  rotate(event) {
    if (this.isPreventDefault('rotate')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('rotate'), controller: this } } })
    if (this.isStopPropagation('rotate')) { event.stopPropagation() }
  }

  changePercentage(event) {
    if (this.isPreventDefault('changePercentage')) { event.preventDefault() }
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('changePercentage'), controller: this } } })
    if (this.isStopPropagation('changePercentage')) { event.stopPropagation() }
  }
}
