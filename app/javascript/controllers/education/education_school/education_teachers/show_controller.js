import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {

  // contentHTML() {
  //   return this.serverHTML
  // }

  educationTeacher() {
    return ServerData.data.education_teacher
  }

  contentHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex">
        <div class="">
          <div>
            <p class="my-5">
              <strong class="block font-medium mb-1">Name:</strong>
              ${this.educationTeacher().name}
            </p>
            <p class="my-5">
              <strong class="block font-medium mb-1">Email:</strong>
              ${this.educationTeacher().email}
            </p>
            <div>
              <strong class="block font-medium mb-1">Schools:</strong>
              <ul>
                ${this.educationTeacher().education_schools.map(educationSchool => `
                  <li>
                    <a href="/education_schools/${educationSchool.id}">${educationSchool.name}</a>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <a class="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium" href="/education_teachers/${this.educationTeacher().id}/edit">Edit this education school</a>
        </div>
      </div>
    `
  }
}