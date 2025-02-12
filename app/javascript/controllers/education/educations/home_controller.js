import Education_FooterController from "controllers/education/footer_controller"
import Education_HeaderController from "controllers/education/header_controller"
import ApplicationController from "controllers/application_controller"
import { identifier } from "controllers/helpers/data_helpers"
import Swal from 'sweetalert2';

export default class Education_Educations_HomeController extends ApplicationController {

  static targets = ['header', 'main', 'aside', 'content', 'footer', 'table']

  initLayout() {
    this.element.className = 'w-full h-full flex flex-col justify-center items-center'
    this.element.innerHTML = this.layoutHTML()
  }

  layoutHTML() {
    return `
      <header class="flex flex-row w-full h-full" data-${this.identifier}-target="header" data-controller="${identifier(Education_HeaderController)}"></header>
      <main class="relative flex flex-row w-full" data-${this.identifier}-target="main">
        <article class="w-full h-full" data-${this.identifier}-target="content">   
        </article>
      </main>
      <div data-action="click->${this.identifier}#openDialog" class="w-fit">Demo Demo Demo</div>
      <footer class="flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2" data-${this.identifier}-target="footer" data-controller="${identifier(Education_FooterController)}"></footer>
    `
  }

  contentHTML() {
    return this.serverHTML
  }

  openDialog(event) {
    const target = event.target
    this.openDialogBasedOnParent(target)
  }

  // Function to open SweetAlert2 dialog based on a parent element
  openDialogBasedOnParent(parentElement) {
    // Get the parent element's position and dimensions
    const rect = parentElement.getBoundingClientRect();
    const parentTop = rect.top + window.scrollY;
    const parentLeft = rect.left + window.scrollX;
    const parentWidth = rect.width;
    const parentHeight = rect.height;
    const parentBottom = parentTop + parentHeight;
    const parentRight = parentLeft + parentWidth;

    // Customize SweetAlert2 dialog
    Swal.fire({
      html: `<div class="border rounded-md w-24 h-24">Dialog content</div>`,
      position: 'top-start', // Use 'top-start' to position the dialog at the top-left corner
      showConfirmButton: false,
      showCloseButton: false,
      // backdrop: false,
      customClass: {
        container: '!bg-transparent',
        popup: 'swal2-container-custom !p-0 !w-fit !h-fit',
        htmlContainer: '!p-0',
      },
      didOpen: () => {
        // Adjust the dialog's position based on the parent element
        const swalContainer = document.querySelector('.swal2-container-custom');
        swalContainer.style.position = 'absolute';
        swalContainer.style.top = `${parentBottom}px`;
        swalContainer.style.left = `${parentLeft}px`;
        // swalContainer.style.width = `${parentWidth}px`;
        // swalContainer.style.height = `${parentHeight}px`;
      },
    });
  }

// // Example usage
// const parentElement = document.querySelector('#parent-element-id');
// openDialogBasedOnParent(parentElement);
}