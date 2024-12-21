// How to use:
//  <div class="my-5"  data-controller="education--select-category" data-education--select-category-school-id-value="<%=@education_school.id %>" >
//    <%= form.label :education_category_id %>
//    <%= form.select :education_category_id, [], {}, { class: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" } %>
//  </div>

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
    categoryId: { type: String, default: null }
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
    this.addNewSelectHTML()
  }

  async addNewSelectHTML() {
    const selectCategoryHTML = await this.selectCategoryHTML()
    if (selectCategoryHTML.length === 0) { return }
    this.element.insertAdjacentHTML("beforeend", selectCategoryHTML)
  }

  selectChanged(event) {
    this.removeChildCategory(event)
    this.categoryIdValue = event.target.value
  }

  removeChildCategory(event) {
    const removeAfterIndex = event.params.categoryIndex
    this.categoryTargets.forEach((target, index) => {
      if (index > removeAfterIndex) { target.remove() }
    }) 
  }

  categoryIdValueChanged(value, previousValue) {
    this.selectTarget.innerHTML = `<option value="${value}"></option>`
    this.addNewSelectHTML()
  }

  async selectCategoryHTML() {
    const response = await EducationSchools_EducationCategoryApi.select({params: {parent_category_id: this.categoryIdValue}})
    const responseData = response.data
    if (responseData.length < 1) { return "" }
    return `
    <select
      class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
      data-${this.identifier}-target="category"
      data-action="change->${this.identifier}#selectChanged"
      data-${this.identifier}-category-index-param="${this.categoryTargets.length}"
    >
      <option></option>
      ${responseData.map((category) => {
        return `
          <option value="${category.id}">${category.name}</option>
        `
      }).join("")}
    </select>`
    
  }
}
