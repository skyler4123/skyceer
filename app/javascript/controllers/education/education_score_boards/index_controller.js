import Education_LayoutController from "../layout_controller";
import { CookieHelpers } from '../../helpers/cookie_helpers';
import {TabulatorFull as Tabulator} from 'tabulator';
import { EducationStudentsApi } from "../api/education_students_api";
import { EducationSubjectsApi } from "../api/education_subjects_api";
import { EducationScoreBoardsApi } from "../api/education_score_boards_api";

export default class extends Education_LayoutController {
  static targets = ['classSelect', 'subjectSelect', 'table']
  static values = {
    classes: { type: Array, default: [] }, // SSR
    classId: { type: String, default: '' }, // fetch, re-render
    subjectId: { type: String, default: '' }, // fetch, re-render
    scoreBoards: { type: Object, default: {} }, // fetch, re-render
  }

  init() {
    this.initValue()
    this.initHTML()
    console.log(this)
  }

  initValue() {
    this.classesValue = this.contentData()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  classSelected(e) {
    this.classIdValue = e.target.value
  }

  subjectSelected(e) {
    this.subjectIdValue = e.target.value
  }

  async classIdValueChanged(value, previousValue) {
    // return if value empty
    if (this.isEmpty(value)) return

    if (this.table) { this.table.destroy() }
    
    const subjects = await this.fetchSubjectsFromClassId()
    this.subjectSelectTarget.innerHTML = `
      <option>Select Subject</option>
      ${subjects.map(s =>
        `
          <option value="${s.id}">${s.name}</option>
        `
      ).join('')}
    `
  }

  async subjectIdValueChanged(value, previousValue) {
    // return if value empty
    if (this.isEmpty(value)) return
    const scoreBoards = await this.fetchScoreBoards()
    this.scoreBoardsValue = scoreBoards
  }

  scoreBoardsValueChanged(value, previousValue) {
    // return if value empty
    if (this.isEmpty(value)) return
    this.initTable()
  }

  async fetchStudentsFromClassId() {
    const response = await EducationStudentsApi.education_class_id({params: { education_class_id: this.classIdValue }})
    const responseData = response.data
    if (responseData.length < 1) { return [] }
    return responseData
  }

  async fetchSubjectsFromClassId() {
    const response = await EducationSubjectsApi.education_class_id({params: { education_class_id: this.classIdValue }})
    const responseData = response.data
    if (responseData.length < 1) { return [] }
    return responseData
  }

  async fetchScoreBoards() {
    const response = await EducationScoreBoardsApi.index({params: { education_class_id: this.classIdValue, education_subject_id: this.subjectIdValue }})
    const responseData = response.data
    if (responseData.length < 1) { return [] }
    return responseData
  }

  defaultHTML() {
    return `
      <div>
        <form>
          <select
            data-${this.identifier}-target="classSelect"
            data-action="change->${this.identifier}#classSelected"
          >
            <option>Select Class</option>
            ${this.classesValue.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
          </select>
          <select
            data-${this.identifier}-target="subjectSelect"
            data-action="change->${this.identifier}#subjectSelected"
          >
          </select>
        </form>
        <div data-${this.identifier}-target="table"></div>
      </div>
    `
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
    return this.scoreBoardsValue.education_students.map((row) => {
      return {
        ...row,
        name: `<a href="${CookieHelpers.navigationUrl()}/education_classes/${row.id}">${row.name}</a>`,
        ...this.examAppointmentsData().find((data) => data.name === row.name)
      }
    })
  }

  tableColumns() {
    const examColumns = this.scoreBoardsValue.education_exams.map((exam) => {
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
    const examAppointments = this.scoreBoardsValue.education_exam_appointments
    const educationStudents = this.scoreBoardsValue.education_students
    const educationExams = this.scoreBoardsValue.education_exams
    const data = []
    educationStudents.forEach((student) => {
      const row = {name: student.name}
      educationExams.forEach((exam) => {
        const appointment = examAppointments.find((appointment) => appointment.education_exam_id === exam.id && appointment.education_exam_appointmentable_id === student.id)
        row[exam.id] = appointment ? appointment.score : ''
      })
      data.push(row)
    })
    return data
  }
}
