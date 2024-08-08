
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ["editor"]

  connect() {
    console.log("Hello, Stimulus!", tinymce);
    tinymce.init({
      selector: '#editor',
    });
  }
}
