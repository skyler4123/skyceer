import { Camelize } from "./helpers"
import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus"

export default class ApplicationController extends Controller {
  initialize() {
    console.log(this)
  }
  camelizeForObject(object) {
    return Camelize(object)
  }
  twMerge(...args) {
    return twMerge(...args)
  }
}