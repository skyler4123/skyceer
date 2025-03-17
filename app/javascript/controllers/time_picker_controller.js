import flatpickr from "flatpickr";
import { Controller } from "@hotwired/stimulus"


export default class TimePickerController extends Controller {

  initialize() {
    this.timePicker = flatpickr(this.element, {
      enableTime: true,
    })
  }
}
