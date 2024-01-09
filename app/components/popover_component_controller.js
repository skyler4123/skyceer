import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"]
  static values = {
    isOpen: { type: Boolean, default: false },
    position: { type: String, default: 'bottom_center' },

    klass: { type: String },
    contentClass: { type: String, default: "duration-200" },
  
    klassDefault: { type: String, default: "" },
    contentClassDefault: { type: String, default: "w-fit h-fit text-center opacity-0 open:opacity-100 ease-in-out" }
  }

  initialize() {
    this.initializeID()
    this.initializeClass()
    this.initializeAction()
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }

  initializeClass() {
    this.klassDefaultValue = this.positionClass()[this.positionValue]

    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
  }

  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
  }

  positionClass() {
    return {
      'bottom_left': 'absolute justify-center items-center left-0 -bottom-2 translate-y-full',
      'bottom_center': 'absolute justify-center items-center right-1/2 -bottom-2 translate-y-full translate-x-1/2',
      'bottom_right': 'absolute justify-center items-center right-0 -bottom-2 translate-y-full',
      'top_right': 'absolute -justify-center items-center top-2 right-0 -translate-y-full',
      'top_left': 'absolute -justify-center items-center top-2 left-0 -translate-y-full',
      'top_center': 'absolute -justify-center items-center top-2 left-1/2 -translate-y-full -translate-x-1/2',
      'left_top': 'absolute -justify-center items-center left-2 top-0 -translate-x-full',
      'left_bottom': 'absolute -justify-center items-center left-2 bottom-0 -translate-x-full',
      'left_center': 'absolute -justify-center items-center left-2 top-1/2 -translate-x-full -translate-y-1/2',
      'right_top': 'absolute -justify-center items-center right-2 top-0 translate-x-full',
      'right_bottom': 'absolute -justify-center items-center right-2 bottom-0 translate-x-full',
      'right_center': 'absolute -justify-center items-center right-2 top-1/2 translate-x-full -translate-y-1/2'
    }
  }

  globalDispatch({ detail: { payload } }) {
    if (this.element.id != payload.id) { return }
    eval(`this.${payload.action}()`)
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

  isOpenValueChanged() {
    if (this.isOpenValue) {
      this.element.classList.remove('hidden')
      this.element.classList.add('flex')
      this.contentTarget.setAttribute('open', '')
    } else {
      this.element.classList.add('hidden')
      this.element.classList.remove('flex')
      this.contentTarget.removeAttribute('open')
    }
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
