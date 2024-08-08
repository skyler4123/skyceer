
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ["editor"]

  connect() {
    console.log("Hello, Stimulus!", tinymce);
    tinymce.init({
      selector: '#editor',
      plugins: 'advlist lists code',
      menubar: false,
      toolbar: 'bullist numlist code',
      advlist_bullet_styles: 'square',
      advlist_number_styles: 'lower-alpha,lower-roman,upper-alpha,upper-roman'
    });
  }
}
