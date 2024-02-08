import { camelizeOptionsValue } from "./helpers"
import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus"

export default class ApplicationController extends Controller {
  initialize() {
    console.log(this)
  }
  camelizeOptionsValue(object) {
    return camelizeOptionsValue(object)
  }
  
  twMerge(...args) {
    return twMerge(...args)
  }
}