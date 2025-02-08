import Swal from 'sweetalert2'

import { Controller } from "@hotwired/stimulus"
import { isEmpty } from '../helpers/data_helpers';


export default class Education_FlashController extends Controller {
  
  initialize() {
    setTimeout(() => {
      if (!this.hasFlash()) { return }
      this.initFlash()
    }, 2000)
  }

  hasFlash() {
    return !isEmpty(ServerData.flash)
  }

  initFlash() {
    const flashMessages = ServerData.flash;
    Object.entries(flashMessages).forEach(([type, message], index) => {
      setTimeout(() => {
        Swal.fire({
          position: "top",
          html: this.flashHTML(type, message),
          showConfirmButton: false,
          timer: 3000,
          backdrop: false,
          customClass: {
            container: '...1',
            popup: '!p-0',
            header: '...2',
            title: '...3',
            closeButton: '...',
            icon: '...',
            image: '...',
            htmlContainer: '!p-0',
            input: '...',
            inputLabel: '...',
            validationMessage: '...',
            actions: '...',
            confirmButton: '...',
            denyButton: '...',
            cancelButton: '...',
            loader: '...5',
            footer: '....6',
            timerProgressBar: '....7',
          }
        });
      }, 3000 * index)

    });
  }

  flashHTML(type = "notice", message) {
    switch (type) {
      case "error":
        return `<div class='w-full text-center py-2 px-3 bg-red-50 text-red-500 font-medium rounded-lg inline-block' id='error'>${message}</div>`
      case "info":
        return `<div class='w-full text-center py-2 px-3 bg-blue-50 text-blue-500 font-medium rounded-lg inline-block' id='info'>${message}</div>`
      case "alert":
        return `<div class='w-full text-center py-2 px-3 bg-red-50 text-red-500 font-medium rounded-lg inline-block' id='alert'>${message}</div>`
      case "warning":
        return `<div class='w-full text-center py-2 px-3 bg-yellow-50 text-yellow-500 font-medium rounded-lg inline-block' id='warning'>${message}</div>`
      case "notice":
        return `<div class='w-full text-center py-2 px-3 bg-green-50 text-green-500 font-medium rounded-lg inline-block' id='notice'>${message}</div>`
    }
  }
}
