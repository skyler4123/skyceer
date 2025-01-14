//  HOW TO USE
//  <form action="/">
//    <select data-controller="hello choices" name="cars" id="cars" multiple>
//      <option value="volvo">Volvo</option>
//      <option selected value="saab">Saab</option>
//      <option selected value="opel">Opel</option>
//      <option value="audi">Audi</option>
//    </select>
//    <input type="submit">
//  </form>

import "choices"

import { Controller } from "@hotwired/stimulus"


export default class ChoicesController extends Controller {
  static values = {
    options: { type: Object, default: {
      removeItemButton: true,
    } },
  }

  initialize() {
    this.choice = new Choices(this.element, {
      ...this.optionsValue,
    })
  }
}
