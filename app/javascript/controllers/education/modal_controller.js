import Swal from 'sweetalert2'

import { isEmpty } from "controllers/education/helpers/data_helpers";
import ApplicationController from "controllers/application_controller";

export default class Education_ModalController extends ApplicationController {
  static values = {
    options: { type: Object, default: {} }, // Ex: { notice: "Hello World", error: "Something went wrong" }
  }

  optionsValueChanged(value, previousValue) {
    if (isEmpty(value)) return;

    this.render();
  }

  render() {
    if (isEmpty(this.optionsValue.html)) {
      console.log("No HTML content provided for the modal.");
    }

    Swal.fire({
      html: "",
      showConfirmButton: false,
      showCloseButton: false,
      backdrop: true,
      target: document.querySelector('main'), // Default target
      customClass: {
        container: '!bg-transparent',
        popup: '!p-0 !bg-transparent !w-full',
        htmlContainer: '!p-0 !overflow-visible',
      },
      ...this.optionsValue,
    });
  }

  reset() {}

}
