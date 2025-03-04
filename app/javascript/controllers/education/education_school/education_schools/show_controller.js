import { csrfToken } from "controllers/education/helpers/data_helpers"
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {

  educationSchool() {
    return ServerData.data.education_school
  }

  contentHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex">
        <div class="">
          <div id="education_school_23b9d0e0-e5dc-413f-b5bd-5db7219bd31d">
            <p class="my-5">
              <strong class="block font-medium mb-1">User:</strong>
              ${this.educationSchool().user.name}
            </p>
            <p class="my-5">
              <strong class="block font-medium mb-1">Address:</strong>
              ${this.educationSchool().address?.id}
            </p>
            <p class="my-5">
              <strong class="block font-medium mb-1">Name:</strong>
              ${this.educationSchool().name}
            </p>
            <p class="my-5">
              <strong class="block font-medium mb-1">Email:</strong>
              ${this.educationSchool().email}
            </p>

          </div>

          <a class="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium" href="/education_schools/${this.educationSchool().id}/edit">Edit this education school</a>
        </div>
      </div>
    `
  }

}