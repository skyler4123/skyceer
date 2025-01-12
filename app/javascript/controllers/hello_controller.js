import Swal from 'sweetalert2'
import "choices"

import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  initialize() {

    this.choice = new Choices(this.element, {
      removeItemButton: true,
    })
  }
}
