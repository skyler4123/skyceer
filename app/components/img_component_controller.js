import ApplicationComponentController from './application_component_controller';

export default class ImgComponentController extends ApplicationComponentController {
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
    this.element.setAttribute('src', this.url)
    this.element.setAttribute('alt', this.alt)
  }

  initializeClass() {
    if (this.type) {
      this.element.className = this.twMerge(this.element.className , this.typeClass[this.type].klass)
    }
    this.element.className = this.twMerge(this.element.className ,this.klass)
  }

  rotate() {
    this.isOpenValue = !this.isOpenValue
  }

  get typeClass() {
    return {
      avatar: {
        klass: 'rounded-full object-cover'
      }
    }
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

}
