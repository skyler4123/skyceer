import PaginationController from '../../../pagination_controller';
import { EducationSubjectsApi } from '../../api/education_subjects_api';
import Education_EducationSchool_LayoutController from '../layout_controller';
import {TabulatorFull as Tabulator} from 'tabulator';


export default class extends Education_EducationSchool_LayoutController {
  static targets = ['classIdSelect', 'subjectIdSelect', 'table']
  static values = {
    classId: { type: String, default: '' }, // fetch, re-render
  }

  init() {
    console.log(this)
    this.initTable()
  }

  classIdSelectEvent(e) {
    this.classIdValue = e.target.value
  }

  async classIdValueChanged(value, previousValue) {
    if (this.isEmpty(value)) return

    const subjectsJson = await this.fetchSubjectsFromClassId()
    const subjects = subjectsJson.data
    this.choicesControllerForSubjectIdSelect().choice.clearChoices()
    this.choicesControllerForSubjectIdSelect().choice.setChoices(
      subjects.map((subject) => {
        return { value: subject.id, label: subject.name }
      })
    )
  }

  async fetchSubjectsFromClassId() {
    const response = await EducationSubjectsApi.index({params: { education_class_id: this.classIdValue }})
    const responseData = response.data
    if (responseData.length < 1) { return [] }
    return responseData
  }

  contentClasses() {
    return this.contentData().education_classes
  }

  contentClassesForSelect() {
    return this.contentData().education_classes_for_select
  }

  choicesControllerForSubjectIdSelect() {
    return this.application.getControllerForElementAndIdentifier(this.subjectIdSelectTarget, 'choices')
  }

  initTable() {
      this.table = new Tabulator(this.tableTarget, {
        data: this.tableData(),           //load row data from array
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
        columns: this.tableColumns(),
      }
    );
  }

  tableData() {
    return this.educationStudents().map((row) => {
      return {
        ...row,
        name: row.name,
        ...this.examAppointmentsData().find((data) => data.name === row.name)
      }
    })
  }

  educationStudents() {
    return this.contentData().education_students
  }

  educationExams() {
    return this.contentData().education_exams
  }

  educationExamAppointments() {
    return this.contentData().education_exam_appointments
  }

  tableColumns() {
    const examColumns = this.educationExams().map((exam) => {
      return {
        title: exam.name,
        field: exam.id,
        formatter: "html",
        hozAlign: "center",
        sorter: "number",
        editor: "input",
      }
    })
    return [
      {title:"Name", field: "name", formatter: "html"},
      {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
      {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},
      ...examColumns
    ]
  }

  // education_exam_appointments = [{id, education_exam_id, education_exam_appointmentable_type, education_exam_appointmentable_id, score, status, created_at, updated_at}]
  // education_exam_appointmentable_id is education_student_id
  // education_student_id is education_students[].id
  // loop through education_students[].id and get education_exam_appointments[].score
  examAppointmentsData() {
    const data = []
    this.educationStudents().forEach((student) => {
      const row = {name: student.name}
      this.educationExams().forEach((exam) => {
        const appointment = this.educationExamAppointments().find((appointment) => appointment.education_exam_id === exam.id && appointment.education_exam_appointmentable_id === student.id)
        row[exam.id] = appointment ? appointment.score : ''
      })
      data.push(row)
    })
    return data
  }

  contentHTML() {
    return `
      <form action="/education_scoreboards" class="flex flex-row gap-x-4">
        <div class="w-1/4 flex justify-center items-center">
          <select
            name="education_class_id"
            data-${this.identifier}-target="classIdSelect"
            data-action="change->${this.identifier}#classIdSelectEvent"
            data-controller="choices"
          >
            <option value="" disabled selected>Select Class</option>
            ${this.contentClassesForSelect().map((row) => {
              return `<option value="${row.id}">${row.name}</option>`
            }).join('')}
          </select>
        </div>
        <div class="w-1/4 flex justify-center items-center">
          <select
            name="education_subject_id"
            data-${this.identifier}-target="subjectIdSelect"
            data-controller="choices"
          >
            <option value="" disabled selected>Select Subject</option>
          </select>
        </div>
        <div class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          <input type="submit" value="Submit">
        </div>
      </form>
      <div data-${this.identifier}-target="table" class="w-full"></div>
      <div data-controller="${PaginationController.identifier}" data-${PaginationController.identifier}-pagination-value="${this.transferToValue(this.contentPagination())}"></div>
    `
  }
}
