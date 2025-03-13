import { identifier, transferToValue } from "controllers/education/helpers/data_helpers"
import Education_EducationSchool_EducationSchools_IndexController from "controllers/education/education_school/education_schools/index_controller";
import Education_EducationTeacher_AsideController from "controllers/education/education_teacher/aside_controller";

export default class extends Education_EducationSchool_EducationSchools_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationTeacher_AsideController
  }

  defaultHTML() {
    return `
      <div class="w-4/5 mx-auto mt-10">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-medium">Schools</h2>
        </div>
        <form class="flex flex-row my-5">
          <input data-${this.identifier}-target="search" type="search" class="w-full border border-gray-200 rounded-lg p-2 focus:ring-blue-600" placeholder="Search">
          <input type="submit" value="Search" class="bg-slate-800 text-white rounded-lg px-4 py-2 ml-2">
        </form>
        <div data-${this.identifier}-target="table" class="w-full"></div>
        <div data-controller="${identifier(this.paginationController)}" data-${identifier(this.paginationController)}-pagination-value="${transferToValue(this.paginationData)}"></div>
      </div>
    `
  }

}