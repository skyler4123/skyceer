import * as Helpers from "./helpers"
import Api from "./api"
import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus"

export default class ApplicationController extends Controller {
  initialize() {
    // const demo = {calendarId: 12321, fullName: 'sdsa', isTest: true}
    // console.log(this.snakeCaseForObjectKey(demo))
  }

  initializeComplete() {
    if (this.isLastController) {
      this.element.classList.remove('hidden')
    } else {
      this.initializeNextController()
    }
  }

  camelizeOptionsValue(object) {
    return Helpers.camelizeOptionsValue(object)
  }

  camelCaseForObjectKey(object, except) {
    return Helpers.camelCaseForObjectKey(object, except)
  }

  camelCaseForObjectKeyAndValue(object, except) {
    return Helpers.camelCaseForObjectKeyAndValue(object, except)
  }

  snakeCaseForObjectKey(object, except) {
    return Helpers.snakeCaseForObjectKey(object, except)
  }

  snakeCaseForObjectKeyAndValue(object, except) {
    return Helpers.snakeCaseForObjectKeyAndValue(object, except)
  }

  toSnakeCase(string) {
    return Helpers.toSnakeCase(string)
  }

  toCamelCase(string) {
    return Helpers.toCamelCase(string)
  }

  twMerge(...args) {
    return twMerge(...args)
  }

  changeObjectKey(object, oldKey, newKey) {
    return Helpers.changeObjectKey(object, oldKey, newKey)
  }

  deleteObjectKey(object, condition) {
    return Helpers.deleteObjectKey(object, condition)
  }

  objectOnlyKeys(object, keys) {
    return Helpers.objectOnlyKeys(object, keys)
  }

  initializeNextController() {
    this.nextController.init()
  }

  get Api() {
    return Api
  }

  get controller() {
    return this.element.dataset.controller.trim().split(' ')
  }

  get controllerSize() {
    return this.controller.length
  }

  get controllerMaxIndex() {
    return this.controllerSize - 1
  }

  get controllerIndex() {
    return this.controller.indexOf(this.identifier)
  }

  get isFirstController() {
    return this.identifier === this.controller[0]
  }

  get isLastController() {
    return this.identifier === this.controller[this.controllerMaxIndex]
  }

  get nextController() {
    if (this.controllerIndex === this.controllerMaxIndex) {
      return null
    } else {
      return this.application.getControllerForElementAndIdentifier(this.element, this.controller[this.controllerIndex + 1])
    }
  }

  get previousController() {
    if (this.controllerIndex === 0) {
      return null
    } else {
      return this.application.getControllerForElementAndIdentifier(this.element, this.controller[this.controllerIndex - 1])
    }
  }
}