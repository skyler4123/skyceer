{/* <div data-controller="image-comparison" class="relative w-[1536px] h-[854px]">
  <%= ratio(event_id: id, klass: 'w-[1536px] h-[854px]') do %>
    <img class="object-cover object-left h-full w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg">
  <% end %>

  <%= ratio(dir: :rtl, event_id: id, is_reverse: true, klass: 'absolute inset-0 w-[1536px] h-[854px]') do %>
    <img class="object-cover object-left rtl:object-right h-full w-full blur-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg">
  <% end %>

  <%= input(type: :comparison) %>
</div> */}

import ApplicationController from './application_controller'
export default class ImageComparisonCOntroller extends ApplicationController {
  static targets = ['firstRatio', 'lastRatio', 'input']
  static values = {
    ratio: { type: Number }
  }

  init() {
    this.initTarget()
  }

  initTarget() {
    this.firstRatioController.element.setAttribute(`data-${this.identifier}-target`, 'firstRatio')
    this.lastRatioController.element.setAttribute(`data-${this.identifier}-target`, 'lastRatio')
    this.inputController.element.setAttribute(`data-${this.identifier}-target`, 'input')
  }

  initAction() {
    this.addAction(this.inputTarget, `input->${this.identifier}#input`)
  }

  input() {
    this.ratioValue = this.inputTarget.value
  }

  isInitializedValueChanged(value, previousValue) {
    if (this.isInitializedValue) {
      this.ratioValue = 50
    }
  }

  ratioValueChanged(value, previousValue) {
    if (!this.isInitializedValue) { return }

    this.firstRatioController.ratioValue = this.ratioValue
    this.lastRatioController.ratioValue = this.ratioValue
  }

  get ratioControllers() {
    return this.getChildrenControllersFromIdentifier('ratio')
  }
  get firstRatioController() {
    return this.ratioControllers[0]
  }
  get lastRatioController() {
    return this.ratioControllers[1]
  }
  get inputController() {
    return this.getChildrenControllerFromIdentifier('input')
  }
}