import { camelizeOptionsValue, toSnakeCase, snakeCaseForObjectKey } from "./helpers"
import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus"

export default class ApplicationController extends Controller {
  initialize() {
    // console.log(this)
    const demo = {calendarId: 12321, fullName: 'sdsa', isTest: true}
    console.log(this.snakeCaseForObjectKey(demo))
  }

  camelizeOptionsValue(object) {
    return camelizeOptionsValue(object)
  }

  snakeCaseForObjectKey(object) {
    return snakeCaseForObjectKey(object)
  }

  toSnakeCase(string) {
    return toSnakeCase(string)
  }

  twMerge(...args) {
    return twMerge(...args)
  }
}