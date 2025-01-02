// How to use:
//  <div class="my-5"  data-controller="education--select-category" data-education--select-category-school-id-value="<%=@education_school.id %>" >
//    <%= form.label :education_category_id %>
//    <%= form.select :education_category_id, [], {}, { class: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" } %>
//  </div>

import "choices"
import ApplicationController from "../application_controller";
import { EducationSchools_EducationCategoryApi } from "./api/education_schools/education_category_api";

export default class Education_SelectCategoryController extends ApplicationController {
  static targets = ["select", "category", "educationSchool"]
  static values = {
    educationSchoolId: { type: String, default: "" },
    categoryId: { type: String, default: null }
  }

  initAction() {
    this.educationSchoolTarget.dataset.action += ` change->${this.identifier}#educationSchoolSelected`
    this.selectTarget.dataset.action += ` change->${this.identifier}#selectChanged`
  }

  educationSchoolSelected(event) {
    this.educationSchoolIdValue = event.target.value
    this.hideSelectTarget()
  }

  hideSelectTarget() {
    this.selectTarget.style.display = "none"
  }

  async educationSchoolIdValueChanged(value, previousValue) {
    if (value.length === 0) { return }

    const categories = await this.fetchCategoryFromEducationSchoolId(value)
    if (categories.length < 1) { return }
    this.removeAllCategory()
    this.appendSelectCategory(categories)
  }

  removeAllCategory() {
    this.categoryTargets.forEach((target) => {
      target.remove()
    })
  }

  appendSelectCategory(categories) {
    const newCategoryHTML = this.selectCategoryHTML(categories)
    if (this.hasCategoryTarget) {
      this.categoryTargets[this.categoryTargets.length - 1].insertAdjacentHTML("afterend", newCategoryHTML)
    } else {
      this.selectTarget.insertAdjacentHTML("afterend", newCategoryHTML)
    }
  }

  async fetchCategoryFromEducationSchoolId(educationSchoolId) {
    const response = await EducationSchools_EducationCategoryApi.education_school_id({params: {"education_school_id": educationSchoolId}})
    const responseData = response.data
    if (responseData.length < 1) { return [] }
    return responseData
  }

  async fetchCategoryFromParentCategoryId(categoryId) {
    const response = await EducationSchools_EducationCategoryApi.parent_category_id({params: {parent_category_id: categoryId}})
    const responseData = response.data
    if (responseData.length < 1) { return "" }
    return responseData
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

  appendSelectCategoryHTML() {
    const selectCategoryHTML = this.selectCategoryHTML()
    if (selectCategoryHTML.length === 0) { return }
    const last = this.selectTargets.length - 1
    this.selectTargets[last].insertAdjacentHTML("afterend", selectCategoryHTML)
  }

  selectCategoryHTML(categories) {
    return `
      <select
        class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
        data-${this.identifier}-target="category"
        data-action="change->${this.identifier}#categorySelected"
        data-${this.identifier}-category-index-param="${this.categoryTargets.length}"
      >
        <option></option>
        ${categories.map((category) => {
          return `
            <option value="${category.id}">${category.name}</option>
          `
        }).join("")}
      </select>
    `
  }

  categorySelected(event) {
    this.categoryIdValue = event.target.value
    this.removeChildCategory(event)

  }

  async categoryIdValueChanged(value, previousValue) {
    this.setValueForSelectTarget(value)
    this.selectTarget.value = value
    const categories = await this.fetchCategoryFromParentCategoryId(value)
    if (categories.length < 1) { return }
    this.appendSelectCategory(categories)
  }

  setValueForSelectTarget(value) {
    this.selectTarget.innerHTML = `<option value="${value}" selected></option>`
  }
}
