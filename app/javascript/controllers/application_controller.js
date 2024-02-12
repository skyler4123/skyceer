import { camelizeOptionsValue, toSnakeCase, snakeCaseForObjectKey, changeObjectKey, toCamelCase, deleteObjectKey, camelCaseForObjectKey } from "./helpers"
import Api from "./api"
import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus"

export default class ApplicationController extends Controller {
  initialize() {
    console.log(this)
    // const demo = {calendarId: 12321, fullName: 'sdsa', isTest: true}
    // console.log(this.snakeCaseForObjectKey(demo))
  }

  camelizeOptionsValue(object) {
    return camelizeOptionsValue(object)
  }

  camelCaseForObjectKey(object, except) {
    return camelCaseForObjectKey(object, except)
  }

  snakeCaseForObjectKey(object, except) {
    return snakeCaseForObjectKey(object, except)
  }

  toSnakeCase(string) {
    return toSnakeCase(string)
  }

  toCamelCase(string) {
    return toCamelCase(string)
  }

  twMerge(...args) {
    return twMerge(...args)
  }

  changeObjectKey(object, oldKey, newKey) {
    return changeObjectKey(object, oldKey, newKey)
  }

  deleteObjectKey(object, condition) {
    return deleteObjectKey(object, condition)
  }

  get Api() {
    return Api
  }
}