import { identifier, transferToValue, createForm, createSelectTag, createInputTag, pluck, openModal } from "controllers/data_helpers"
import {TabulatorFull as Tabulator} from 'tabulator';
import Education_EducationOwner_LayoutController from "controllers/education/education_owner/layout_controller";

export default class extends Education_EducationOwner_LayoutController {
  static targets = ["subjectTable", "appointTeacherSelect"]

  initBinding() {
    super.initBinding()
    this.educationClass = JsonData.data.education_class
    this.educationCourses = JsonData.data.education_courses
    this.educationCategories = JsonData.data.education_categories
    this.educationSchools = JsonData.data.education_schools
    this.educationSubjects = JsonData.data.education_subjects
    this.educationTeachers = JsonData.data.education_teachers
    this.educationSubjectAppointments = JsonData.data.education_subject_appointments
  }

  init() {
    this.initSubjectTable()
  }

  contentHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">
        <h1 class="text-2xl font-semibold">Edit Class</h1>
        <div class="border border-gray-200 rounded-lg p-4">${this.editFormHTML()}</div>
        <div class="border border-gray-200 rounded-lg p-4" data-${this.identifier}-target="subjectTable"></div>
        <button class="rounded-lg py-3 px-5 bg-slate-800 text-white inline-block font-medium cursor-pointer" data-action="click->${this.identifier}#openAppointSubjectModal">Appoint new subject</button>
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
            dataController: this.selectController.identifier,
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
            dataController: this.selectController.identifier,
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
            dataController: this.selectController.identifier,
            multiple: true,
          })}
        </div>

        <div class="inline">
          <input type="submit" name="commit" value="Save" class="rounded-lg py-3 px-5 bg-slate-800 text-white inline-block font-medium cursor-pointer" data-disable-with="Save">
        </div>
      `
    }) 
  }

  initSubjectTable() {
    const tableData = this.educationSubjectAppointments.map((row) => {
      const subject = this.educationSubjects.find((subject) => subject.id == row.education_subject_id)
      const teacher = this.educationTeachers.find((teacher) => teacher.id == row.education_teacher_id)
      return {
        ...row,
        subject: `<div>${subject.name}</div>`,
        teacher: teacher ? teacher.name : "No Teacher",
      }
    })
    this.table = new Tabulator(this.subjectTableTarget, {
      data: tableData,           //load row data from array
      layout:"fitColumns",      //fit columns to width of table
      responsiveLayout:"hide",  //hide columns that don't fit on the table
      addRowPos:"top",          //when adding a new row, add it to the top of the table
      history:true,             //allow undo and redo actions on the table
      pagination: false,       //paginate the data
      paginationSize:10,         //allow 7 rows per page of data
      paginationCounter:"rows", //display count of paginated rows in footer
      movableColumns:true,      //allow column order to be changed
      initialSort:[             //set the initial sort order of the data
          {column:"name", dir:"asc"},
      ],
      columnDefaults:{
          tooltip:true,         //show tool tips on cells
      },
      columns:[                 //define the table columns
        {title:"Subject", field: "subject", formatter: "html"},
        {title:"Teacher", field:"teacher"},
        {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
        {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},
      ],
    });
  }

  openAppointSubjectModal(event) {
    openModal({
      html: this.appointSubjectModalHTML()
      
    })
  }

  appointSubjectModalHTML() {
    return `
      <div class="mx-auto w-3/4 mt-10 flex flex-col gap-y-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200 p-4">
        <h1 class="text-2xl font-semibold">Appoint Subject</h1>
        <div class="">
          ${createForm({
            className: "w-full flex flex-col gap-y-4",
            attributes: `action="/education_classes/${this.educationClass.id}/appoint_subject"`,
            method: "post",
            html: `
              <div class="flex flex-row gap-x-4 justify-around items-center">
                <div class="flex flex-col gap-y-4 w-1/2">
                  <label class="block w-full text-left required" for="education_subject_appointment_education_subject_id">Subject</label>
                  ${createSelectTag({
                    className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
                    name: "education_subject_appointment[education_subject_id]",
                    id: "education_subject_appointment_education_subject_id",
                    required: true,
                    options: this.educationSubjects.map((subject) => {
                      return { value: subject.id, text: subject.name }
                    }),
                    dataController: this.selectController.identifier,
                    attributes: ` data-action="change->${this.identifier}#updateAppointmentSubject"`,
                  })}
                </div>
      
                <div class="flex flex-col gap-y-4 w-1/2">
                  <label class="block w-full text-left required" for="education_subject_appointment_appoint_from_id">Teacher</label>
                  ${createSelectTag({
                    className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
                    name: "education_subject_appointment[appoint_from_id]",
                    id: "education_subject_appointment_appoint_from_id",
                    required: true,
                    options: this.educationSubjects[0].education_teachers.map((teacher) => {
                      return { value: teacher.id, text: teacher.name }
                    }),
                    // values: this.educationSubjects[0].education_teachers.map((teacher) => {
                    //   return { value: teacher.id, text: teacher.name }
                    // })[0].id,                    
                    dataController: this.selectController.identifier,
                    attributes: ` data-${this.identifier}-target="appointTeacherSelect"`,
                  })}
                </div>
              </div>
              <div class="inline">
                <input 
                  id="education_subject_appointment_education_class_id"
                  type="submit" name="commit" value="Save" class="rounded-lg py-3 px-5 bg-slate-800 text-white inline-block font-medium cursor-pointer border border-gray-200 dark:border-gray-700">
              </div>
            `
          })}
        </div>
      </div>
    `
  }

  appointTeacherSelectController() {
    return this.application.getControllerForElementAndIdentifier(this.appointTeacherSelectTarget, this.selectController.identifier)
  }

  updateAppointmentSubject(event) {
    const subjectId = event.target.value
    const subject = this.educationSubjects.find((subject) => subject.id == subjectId)
    const teachers = subject.education_teachers.map((teacher, index) => {
      const selected = index == 0 ? true : false
      return { value: teacher.id, label: teacher.name, selected: selected }
    }
    )
    const teacherChoice = this.appointTeacherSelectController().choice
    teacherChoice.clearStore();
    teacherChoice.setChoices(teachers);
  }


}