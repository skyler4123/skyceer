import { pluck, createForm, createSelectTag, createInputTag, createSubmitTag } from "controllers/education/helpers/data_helpers"
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {

  initBinding() {
    super.initBinding()
    this.educationTeacher = ServerData.data.education_teacher
    this.educationSchools = ServerData.data.education_schools
    this.educationCategories = ServerData.data.education_categories
    this.educationClasses = ServerData.data.education_classes
  }

  contentHTML() {
    console.log(this.educationTeacher)
    return `
      <div class="mx-auto w-4/5 mt-10">
        <h1 class="font-bold text-2xl">Editing teacher</h1>
        ${this.teacherFormHTML()}
      </div>
    `
  }

  teacherFormHTML() {
    return createForm({
      // attributes: `action="/education_teachers/${this.educationTeacher.id}"`,
      action: `/education_teachers/${this.educationTeacher.id}`,
      method: "patch",
      html: `
        <div class="my-5">
          <label class="required" for="education_teacher_education_school_id">School</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_teacher[education_school_id][]",
            id: "education_teacher_education_school_id",
            required: true,
            multiple: true,
            values: pluck(this.educationTeacher.education_schools, "id"),
            options: this.educationSchools.map((school) => {
              return { value: school.id, text: school.name }
            }),
            dataController: this.choicesControllerIdentifier,
          })}
        </div>

        <div class="my-5">
          <label class="required" for="education_teacher_education_category_id">Category</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_teacher[education_category_id][]",
            id: "education_teacher_education_category_id",
            multiple: true,
            values: pluck(this.educationTeacher.education_categories, "id"),
            options: this.educationCategories.map((category) => {
              return { value: category.id, text: category.name }
            }),
            dataController: this.choicesControllerIdentifier,
          })}
        </div>

        <div class="my-5">
          <label class="required" for="education_teacher_name">Name</label>
          ${createInputTag({
            type: "text",
            name: "education_teacher[name]",
            id: "education_teacher_name",
            value: this.educationTeacher.name,
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            required: true,
          })}
        </div>

        <div class="my-5">
          <label class="required" for="education_teacher_email">Email</label>
          ${createInputTag({
            type: "text",
            name: "education_teacher[email]",
            id: "education_teacher_email",
            value: this.educationTeacher.email,
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            required: true,
          })}
        </div>

        <div class="inline">
          ${createSubmitTag({
            value: "Save",
            className: "rounded-lg py-3 px-5 bg-slate-800 text-white inline-block font-medium cursor-pointer",
          })}
        </div>
      `
    })
  }
}
