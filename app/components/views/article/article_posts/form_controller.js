import FormController from "../../../form_controller";

export default class extends FormController {
  init() {
    this.initHTML()

    super.init()
  }
  
  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      
    `
  }
}
