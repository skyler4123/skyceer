import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['content', 'carousel']
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    carouselClass: { type: String, default: "" },
    klassDefault: { type: String, default: "h-96 w-[600px]" },
    contentClassDefault: { type: String, default: "flex flex-row w-full h-full rounded-lg items-center overflow-y-auto scroll-smooth snap-x snap-mandatory no-scrollbar" },
    carouselClassDefault: { type: String, default: "flex-shrink-0 w-[300px] h-full snap-start snap-always" }
  }

  initialize() {
    this.initializeID()
    this.initializeTarget()
    this.initializeClass()

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

  initializeTarget() {
    Array.from(this.contentTarget.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, "carousel")
    })
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
    this.carouselTargets.forEach((target) => {
      target.className = target.className + ' ' + this.carouselClassDefaultValue + ' ' + this.carouselClassValue
    })
  }

  scrollBack() {
    this.sidesTarget.scrollBy(-1, 0)
  }

  scrollForward() {
    if (this.sidesTarget.scrollLeft == this.sidesTarget.scrollLeftMax) {
      this.sidesTarget.scrollTo(0, 0)
    }
    this.sidesTarget.scrollBy(1, 0)

  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
