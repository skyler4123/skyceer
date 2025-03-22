import { identifier, transferToValue, createForm, createSelectTag, createInputTag, pluck } from "controllers/education/helpers/data_helpers"
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {

  initBinding() {
    super.initBinding()
    this.educationClass = ServerData.data.education_class
    this.educationCourses = ServerData.data.education_courses
    this.educationCategories = ServerData.data.education_categories
    this.educationSchools = ServerData.data.education_schools
  }

  contentHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">
        <h1 class="text-2xl font-semibold">Edit Class</h1>
        ${this.editFormHTML()}
      </div>
    `
  }

  editFormHTML() {
    return createForm({
      attributes: `action="/education_classes/${this.educationClass.id}"`,
      method: "patch",
      html: `
        <div class="my-5">
          <label class="required" for="education_class_education_school_id">School</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_class[education_school_id]",
            id: "education_class_education_school_id",
            required: true,
            values: this.educationClass.education_school_id,
            options: this.educationSchools.map((school) => {
              return { value: school.id, text: school.name }
            }),
            dataController: this.choicesControllerIdentifier,
          })}
        </div>

        <div class="my-5">
          <label class="required" for="education_class_education_course_id">Course</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_class[education_course_id]",
            id: "education_class_education_course_id",
            required: true,
            values: this.educationClass.education_course_id,
            options: this.educationCourses.map((course) => {
              return { value: course.id, text: course.name }
            }),
            dataController: this.choicesControllerIdentifier,
          })}
        </div>

        <div class="my-5">
          <label class="required" for="education_class_name">Name</label>
          ${createInputTag({
            type: "text",
            name: "education_class[name]",
            id: "education_class_name",
            value: this.educationClass.name,
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            required: true,
          })}
        </div>

        <div class="my-5">
          <label for="education_class_education_category_id">Category</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_class[education_category_id][]",
            id: "education_class_education_category_id",
            values: pluck(this.educationClass.education_categories, "id"),
            options: this.educationCategories.map((category) => {
              return { value: category.id, text: category.name }
            }),
            dataController: this.choicesControllerIdentifier,
            multiple: true,
          })}
        </div>

        <div class="inline">
          <input type="submit" name="commit" value="Save" class="rounded-lg py-3 px-5 bg-slate-800 text-white inline-block font-medium cursor-pointer" data-disable-with="Save">
        </div>
      `
    }) 

  }
}