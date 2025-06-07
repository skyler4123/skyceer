import { identifier, transferToValue, createForm, createSelectTag, createInputTag, pluck, openModal, getObjectKeys } from "controllers/education/helpers/data_helpers";
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {

  initBinding() {
    super.initBinding()
    this.educationExam = ServerData.data.education_exam
    this.educationSchools = ServerData.data.education_schools
    this.educationSubjects = ServerData.data.education_subjects
    this.educationCategories = ServerData.data.education_categories
    this.educationClasses = ServerData.data.education_classes
  }

  contentHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">
        <h1 class="text-2xl font-semibold">Edit Exam</h1>
        <div class="border border-gray-200 rounded-lg p-4">${this.editFormHTML()}</div>
      </div>
    `
  }

  editFormHTML() {
    return createForm({
      attributes: `action="/education_exams/${this.educationExam.id}"`,
      method: "patch",
      html: `
        <div class="my-5">
          <label class="required" for="education_exam_name">Name</label>
          ${createInputTag({
            type: "text",
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[name]",
            id: "education_exam_name",
            value: this.educationExam.name,
            required: true,
          })}
        </div>

        <div class="my-5">
          <label for="education_exam_description">Description</label>
          ${createInputTag({
            type: "text",
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[description]",
            id: "education_exam_description",
            value: this.educationExam.description,
          })}
        </div>

        <div class="my-5">
          <label for="education_exam_status">Status</label>
          ${createSelectTag({
            type: "text",
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[status]",
            id: "education_exam_status",
            values: this.educationExam.status,
            options: Object.entries(this.educationExam.status_enums).map(([key, value]) => {
              return { value: key, text: key }
            }),
          })}
        </div>

        <div class="my-5">
          <label for="education_exam_education_school_id">School</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[education_school_id]",
            id: "education_exam_education_school_id",
            required: true,
            values: this.educationExam.education_school_id,
            options: this.educationSchools.map((school) => {
              return { value: school.id, text: school.name }
            }),
            dataController: this.selectController.identifier,
            disabled: true,
          })}
        </div>

        <div class="my-5">
          <label for="education_exam_education_subject_id">Subject</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[education_subject_id]",
            id: "education_exam_education_subject_id",
            required: true,
            values: this.educationExam.education_subject_id,
            options: this.educationSubjects.map((subject) => {
              return { value: subject.id, text: subject.name }
            }),
            dataController: this.selectController.identifier,
            disabled: true,
          })}
        </div>

        <div class="my-5">
          <label for="education_exam_education_category_id">Category</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[education_category_id][]",
            id: "education_exam_education_category_id",
            values: pluck(this.educationExam.education_categories, "id"),
            options: this.educationCategories.map((category) => {
              return { value: category.id, text: category.name }
            }),
            dataController: this.selectController.identifier,
            multiple: true,
          })}
        </div>
        
        <div class="my-5">
          <label for="education_exam_education_class_id">Class</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[education_class_id][]",
            id: "education_exam_education_class_id",
            values: pluck(this.educationExam.education_classes, "id"),
            options: this.educationClasses.map((educationClass) => {
              return { value: educationClass.id, text: educationClass.name }
            }),
            dataController: this.selectController.identifier,
            multiple: true,
          })}
        </div>

        <div class="inline">
          ${createInputTag({
            type: "submit",
            className: "rounded-lg py-3 px-5 bg-slate-800 text-white inline-block font-medium cursor-pointer",
            value: "Save",
          })}
        </div>
      `,
    })
  }
}
