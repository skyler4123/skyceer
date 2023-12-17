import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['img']
  static values = {
    klass: { type: String, default: 'relative inline-block' },
    imgClass: { type: String, default: 'w-full h-full rounded-full' }
  }
  initialize() {
    this.initializeTarget()
    this.initializeClass()

    this.initializeComplete()
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }
  initializeTarget() {
    this.initializeImgTarget()
  }
  initializeImgTarget() {
    this.element.querySelector('img').setAttribute(`data-${this.identifier}-target`, 'img')
  }
  initializeClass() {
    this.initializeKlass()
    this.initializeImgClass()
  }
  initializeKlass() {
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
  }
  initializeImgClass() {
    if (!this.hasImgClassValue) { return }
    this.imgClassValue.split(' ').forEach((klass) => {
      this.imgTarget.classList.add(klass)
    })
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
