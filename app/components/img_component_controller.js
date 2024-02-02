import { twMerge } from 'tailwind-merge'
import ApplicationComponentController from './application_component_controller';

export default class extends ApplicationComponentController {
  static targets = ['img']
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeHTML() {
    if (this.dir) {
      this.element.setAttribute('dir', this.dir)
    }
    this.element.innerHTML = this.initHTML
  }

  initializeClass() {
    if (this.type) {
      this.element.className = twMerge(this.element.className , this.typeClass[this.type].klass)
      this.imgTarget.className = twMerge(this.imgTarget.className, this.typeClass[this.type].imgClass)
    }
    this.element.className = twMerge(this.element.className ,this.klass)
    this.imgTarget.className = twMerge(this.imgTarget.className, this.imgClass)
  }

  isOpenValueChanged(value, previousValue) {
    super.isOpenValueChanged(value, previousValue)
    if (this.isOpenValue) {
      this.imgTarget.setAttribute('open', '')
    } else {
      this.imgTarget.removeAttribute('open')
    }
  }

  rotate() {
    this.isOpenValue = !this.isOpenValue
  }

  get typeClass() {
    return {
      avatar: {
        klass: '',
        imgClass: 'rounded-full object-cover'
      }
    }
  }
  get imgClass() {
    return this.optionsValue.imgClass
  }
  get src() {
    return this.optionsValue.src
  }
  get url() {
    return this.optionsValue.url || this.src || 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg'
  }
  get alt() {
    return this.optionsValue.alt
  }
  get initHTML() {
    return `
      <img data-${this.identifier}-target="img" src="${this.url}" alt="${this.alt}">
    `
  }


}
