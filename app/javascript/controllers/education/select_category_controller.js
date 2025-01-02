// How to use:
// <%= form_with(model: education_course, class: "contents", data: { controller: "education--select-category" }) do |form| %>
//   <div class="my-5">
//     <%= form.label :education_school_id %>
//     <%= form.select :education_school_id, @education_schools.pluck(:name, :id), { include_blank: true }, { class: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full", data: {"education--select-category-target": "educationSchool"} } %>
//   </div>
//   <div class="my-5">
//     <%= form.label :parent_category_id %>
//     <%= form.select :parent_category_id, [], {}, { class: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full", data: {"education--select-category-target": "educationCategory"} } %>
//   </div>
// <% end %>

import "choices"
import ApplicationController from "../application_controller";
import { EducationCategoriesApi } from "./api/education_categories_api";
import { EducationCoursesApi } from "./api/education_courses_api";

export default class Education_SelectCategoryController extends ApplicationController {
  static targets = ["educationCategory", "educationCourse", "category", "educationSchool"]
  static values = {
    educationSchoolId: { type: String, default: "" },
    categoryId: { type: String, default: null }
  }

  initAction() {
    this.educationSchoolTarget.dataset.action += ` change->${this.identifier}#educationSchoolSelected`
    this.educationCategoryTarget.dataset.action += ` change->${this.identifier}#educationCategoryChanged`
  }

  educationSchoolSelected(event) {
    this.educationSchoolIdValue = event.target.value
    this.hideSelectTarget()
  }

  hideSelectTarget() {
    this.educationCategoryTarget.style.display = "none"
  }

  async educationSchoolIdValueChanged(value, previousValue) {
    if (value.length === 0) { return }

    const categories = await this.fetchCategoryFromEducationSchoolId(value)
    const courses = await this.fetchCourseFromEducationSchoolId(value)
    if (categories.length < 1) { return }
    this.removeAllCategory()
    this.appendSelectCategory(categories)
    this.educationCourseTarget.innerHTML = this.selectCourseHTML(courses)
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
      this.educationCategoryTarget.insertAdjacentHTML("afterend", newCategoryHTML)
    }
  }

  async fetchCategoryFromEducationSchoolId(educationSchoolId) {
    const response = await EducationCategoriesApi.education_school_id({params: {"education_school_id": educationSchoolId}})
    const responseData = response.data
    if (responseData.length < 1) { return [] }
    return responseData
  }

  async fetchCategoryFromParentCategoryId(categoryId) {
    const response = await EducationCategoriesApi.parent_category_id({params: {parent_category_id: categoryId}})
    const responseData = response.data
    if (responseData.length < 1) { return "" }
    return responseData
  }

  async fetchCourseFromEducationSchoolId(educationSchoolId) {
    const response = await EducationCoursesApi.education_school_id({params: {"education_school_id": educationSchoolId}})
    const responseData = response.data
    if (responseData.length < 1) { return "" }
    return responseData
  }

  educationCategoryChanged(event) {
    this.removeChildCategory(event)
    this.categoryIdValue = event.target.value
  }

  removeChildCategory(event) {
    const removeAfterIndex = event.params.categoryIndex
    this.categoryTargets.forEach((target, index) => {
      if (index > removeAfterIndex) { target.remove() }
    }) 
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

  selectCourseHTML(courses) {
    return `
      <option></option>
      ${courses.map((course) => {
        return `
          <option value="${course.id}">${course.name}</option>
        `
      }).join("")}
    `
  }

  categorySelected(event) {
    this.categoryIdValue = event.target.value
    this.removeChildCategory(event)

  }

  async categoryIdValueChanged(value, previousValue) {
    this.setValueForSelectTarget(value)
    this.educationCategoryTarget.value = value
    const categories = await this.fetchCategoryFromParentCategoryId(value)
    if (categories.length < 1) { return }
    this.appendSelectCategory(categories)
  }

  setValueForSelectTarget(value) {
    this.educationCategoryTarget.innerHTML = `<option value="${value}" selected></option>`
  }
}
