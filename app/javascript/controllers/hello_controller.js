import "choices"
import country from 'country-list-js';
import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static targets = ["element"]

  initialize() {
    console.log(country)
  }
}
