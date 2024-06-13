import { Controller } from "@hotwired/stimulus"
import { CarConstants } from "./constants/car_constants"
export default class extends Controller {

  initialize() {
    console.log(CarConstants)
  }


}
