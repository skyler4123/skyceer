import "choices"
import ApplicationController from "../application_controller";
import { EducationSchools_EducationCategoryApi } from "./api/education_schools/education_category_api";

export default class Education_SelectCategoryController extends ApplicationController {
  static targets = ["label", "select", "category"]
  static values = {
    class: { type: Object, default: {
      select: " hidden"
    } },
    schoolId: { type: String, default: "" },
  }

  init() {
    this.initTarget()
    this.initHTML()
  }

  initTarget() {
    this.element.querySelector('label').setAttribute(`data-${this.identifier}-target`, 'label')
    this.element.querySelector('select').setAttribute(`data-${this.identifier}-target`, 'select')
  }

  initHTML() {
    this.selectTarget.insertAdjacentHTML("afterend", this.selectCategoryHTML())
  }

  selectCategoryHTML() {
    EducationSchools_EducationCategoryApi.select({params: {level: 1}}).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
    return `<select class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" data-${this.identifier}-target="category"></select>`
  }
}
