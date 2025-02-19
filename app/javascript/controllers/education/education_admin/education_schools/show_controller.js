import { csrfToken } from "controllers/helpers/data_helpers"
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {

  educationSchool() {
    return ServerData.data.education_school
  }

  contentHTML() {
    return `
      <div class="mx-auto md:w-2/3 w-full flex">
        <div class="mx-auto">
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
          <a class="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium" href="/education_schools">Back to education schools</a>
          <div class="inline-block ml-2">
            <form method="post" action="/education_schools/${this.educationSchool().id}">
              <input type="hidden" name="_method" value="delete" autocomplete="off" />
              <button class="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium" type="submit">Destroy this education school</button>
              <input type="hidden" name="authenticity_token" value="${csrfToken()}" autocomplete="off" />
            </form>
          </div>
        </div>
      </div>
    `
  }

}