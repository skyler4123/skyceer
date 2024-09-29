import ApplicationController from "../../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = [...super.targets, "form"]
  static values = {
    queryParams: Object
  }
  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = `
      <form data-action="submit->${this.identifier}#submit" data-${this.identifier}-target="form">
        <label for="fname">Price cents:</label><br>
        <input type="number" name="price_cents"<br>
        <input type="submit" value="Submit">
      </form> 
    `
  }

  submit(event) {
    event.preventDefault()
    this.queryParamsValue = this.formData({formElement: this.formTarget})
  }

  queryParamsValueChanged(value, previousValue) {
    this.dispatchGlobal({payload: { queryParams: value }})
  }

}
