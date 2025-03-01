import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {

  educationAdmin() {
    return ServerData.data.education_admin
  }

  contentHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex">
        <div class="">
          <div>
            <p class="my-5">
              <strong class="block font-medium mb-1">Name:</strong>
              ${this.educationAdmin().name}
            </p>
            <p class="my-5">
              <strong class="block font-medium mb-1">Email:</strong>
              ${this.educationAdmin().email}
            </p>

          </div>

          <a class="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium" href="/education_admins/${this.educationAdmin().id}/edit">Edit this education school</a>
        </div>
      </div>
    `
  }

}