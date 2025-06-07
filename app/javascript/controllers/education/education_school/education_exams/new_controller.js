import { identifier, transferToValue, createForm, createSelectTag, createInputTag, pluck, openModal, getObjectKeys } from "controllers/education/helpers/data_helpers";
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {
  static targets = ["educationClassSelectTag", "educationSubjectSelectTag"]

  initBinding() {
    super.initBinding()
    this.educationExam = ServerData.data.education_exam
    this.educationSchools = ServerData.data.education_schools
    this.educationCategories = ServerData.data.education_categories
  }

  educationSchoolIdSelectChange(event) {
    const selectedEducationSchoolId = event.target.value
    const selectedEducationSchool = this.educationSchools.find((school) => school.id === selectedEducationSchoolId)
    const selectedEducationSubjects = selectedEducationSchool.education_subjects
    const selectedEducationSubjectsChoiceData = selectedEducationSubjects.map((educationSubject) => {
      return { value: educationSubject.id, label: educationSubject.name }
    })
    const selectedEducationSubjectsChoice = this.educationSubjectSelectTagController().choice
    selectedEducationSubjectsChoice.clearStore()
    selectedEducationSubjectsChoice.setChoices(selectedEducationSubjectsChoiceData)

    const selectedEducationClasses = selectedEducationSchool.education_classes
    const selectedEducationClassesChoiceData = selectedEducationClasses.map((educationClass) => {
      return { value: educationClass.id, label: educationClass.name }
    })
    const selectedEducationClassesChoice = this.educationClassSelectTagController().choice
    selectedEducationClassesChoice.clearStore()
    selectedEducationClassesChoice.setChoices(selectedEducationClassesChoiceData)
  }

  educationClassSelectTagController() {
    return this.application.getControllerForElementAndIdentifier(this.educationClassSelectTagTarget, this.selectControllerIdentifier)
  }

  educationSubjectSelectTagController() {
    return this.application.getControllerForElementAndIdentifier(this.educationSubjectSelectTagTarget, this.selectControllerIdentifier)
  }

  contentHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">
        <h1 class="text-2xl font-semibold">New Exam</h1>
        <div class="border border-gray-200 rounded-lg p-4">${this.editFormHTML()}</div>
      </div>
    `
  }

  editFormHTML() {
    const initialEducationSchool = this.educationSchools[0]
    const initialEducationSubjects = initialEducationSchool.education_subjects
    const initialEducationClasses = initialEducationSchool.education_classes
    return createForm({
      attributes: `action="/education_exams"`,
      method: "post",
      html: `
        <div class="my-5">
          <label class="required" for="education_exam_name">Name</label>
          ${createInputTag({
            type: "text",
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[name]",
            id: "education_exam_name",
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
            values: initialEducationSchool.id,
            options: this.educationSchools.map((educationSchool) => {
              return { value: educationSchool.id, text: educationSchool.name }
            }),
            dataController: this.selectControllerIdentifier,
            attributes: ` data-action="change->${this.identifier}#educationSchoolIdSelectChange"`,
          })}
        </div>

        <div class="my-5">
          <label for="education_exam_education_subject_id">Subject</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[education_subject_id]",
            id: "education_exam_education_subject_id",
            required: true,
            blank: true,
            options: initialEducationSubjects.map((subject) => {
              return { value: subject.id, text: subject.name }
            }),
            dataController: this.selectControllerIdentifier,
            attributes: ` data-${this.identifier}-target="educationSubjectSelectTag"`,
          })}
        </div>

        <div class="my-5">
          <label for="education_exam_education_category_id">Category</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[education_category_id][]",
            id: "education_exam_education_category_id",
            options: this.educationCategories.map((category) => {
              return { value: category.id, text: category.name }
            }),
            dataController: this.selectControllerIdentifier,
            multiple: true,
          })}
        </div>
        
        <div class="my-5">
          <label for="education_exam_education_class_id">Class</label>
          ${createSelectTag({
            className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
            name: "education_exam[education_class_id][]",
            id: "education_exam_education_class_id",
            required: true,
            options: initialEducationClasses.map((educationClass) => {
              return { value: educationClass.id, text: educationClass.name }
            }),
            dataController: this.selectControllerIdentifier,
            attributes: ` data-${this.identifier}-target="educationClassSelectTag"`,
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