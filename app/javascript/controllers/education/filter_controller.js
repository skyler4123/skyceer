import FormController from "../elements/form_controller";
import { EducationClassesApi } from "./api/education_classes_api";
import { EducationSchoolsApi } from "./api/education_schools_api";

// Connects to data-controller="education--user-profile-dropdown"
export default class Education_FilterController extends FormController {
  static targets = ["select"]
  static values = {
    mapping: { type: Object, default: {
      education_school_id: {value: "id", label: "name"},
      education_class_id: {value: "id", label: "name"}

    } }
  }
  init() {
    this.initHTML()
    super.init()
  }

  initHTML() {
    // const response = await EducationSchoolsApi.index()
    // const schools = response.data
    this.element.innerHTML = `
      <select
        name="education_school_id"
        class="w-64"
        data-${this.identifier}-target="select"
        data-action="mousedown->${this.identifier}#initSelect"
        data-${this.identifier}-api-function-param="EducationSchoolsApi.index()"
      >
      </select>
      <select
        name="education_class_id"
        class="w-64"
        data-${this.identifier}-target="select"
        data-action="mousedown->${this.identifier}#initSelect"
        data-${this.identifier}-api-function-param="EducationClassesApi.index()"
      >
      </select>
      <input type="submit" value="Submit">
    `
  }

  async initSelect(event) {
    // event.preventDefault()
    if (event.target.childElementCount > 0) { return }
    const inputName = event.target.name
    const response = await eval(event.params.apiFunction)
    const responseData = response.data
    event.target.innerHTML = `
      ${responseData.map((data) => {
        return `<option value="${data[this.mappingValue[inputName].value]}">${data[this.mappingValue[inputName].label]}</option>`
      }).join("")}
    `
    event.target.click()
  }

}


