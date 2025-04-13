import { identifier, isEmpty, transferToValue, createSelectTag, params } from "controllers/education/helpers/data_helpers"
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";
import {TabulatorFull as Tabulator} from 'tabulator';
import Education_ChoicesController from "controllers/education/choices_controller";


export default class Education_EducationSchool_EducationScoreboards_IndexController extends Education_EducationSchool_LayoutController {
  static targets = ['classIdSelect', 'subjectIdSelect', 'table']
  static values = {
    selectionEducationSubject: {  type: Array, default: [] },
  }

  initBinding() {
    super.initBinding()
    this.educationStudents = ServerData.data.education_students
    this.educationExams = ServerData.data.education_exams
    this.educationExamToClass = ServerData.data.education_exam_to_class
    this.educationExamToStudents = ServerData.data.education_exam_to_students
    this.selectionEducationClasses = ServerData.data.selection_education_classes
  }

  init() {
    this.initTable()
  }

  handleEducationClassIdSelection(e) {
    this.choicesControllerForSubjectIdSelect().choice.clearStore()
    const educationClassId = e.target.value
    const educationClass = this.selectionEducationClasses.find((klass) => klass.id === educationClassId)
    const selectionEducationSubjects = educationClass.education_subjects
    this.choicesControllerForSubjectIdSelect().choice.clearChoices()
    this.choicesControllerForSubjectIdSelect().choice.setChoices(
      selectionEducationSubjects.map((subject) => {
        return { value: subject.id, label: subject.name }
      })
    )
  }

  choicesControllerForSubjectIdSelect() {
    return this.application.getControllerForElementAndIdentifier(this.subjectIdSelectTarget, identifier(Education_ChoicesController))
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
    return this.educationStudents.map((row) => {
      return {
        name: row.name,
        ...this.examAppointmentsData().find((data) => data.name === row.name)
      }
    })
  }

  tableColumns() {
    const examColumns = this.educationExams.map((exam) => {
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
      {title:"Student", field: "name", formatter: "html"},
      ...examColumns,
    ]
  }

  examAppointmentsData() {
    const data = []
    this.educationStudents.forEach((student) => {
      const row = {name: student.name}
      this.educationExams.forEach((exam) => {
        const appointment = this.educationExamToStudents.find((appointment) => appointment.education_exam_id === exam.id && appointment.education_student_id === student.id)
        row[exam.id] = appointment ? appointment.score : ''
      })
      data.push(row)
    })
    return data
  }

  contentHTML() {
    const initEducationClass = this.selectionEducationClasses.find((klass) => klass.id === params().education_class_id)
    const initEducationSubjects = initEducationClass ? initEducationClass.education_subjects : []
    const initEducationSubject = initEducationSubjects.find((subject) => subject.id === params().education_subject_id)
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">
        <form action="/education_scoreboards" class="flex flex-row gap-x-4 w-full justify-end items-center">
          <div class="w-1/3 flex justify-center items-center">
            ${createSelectTag({
              type: "text",
              className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
              name: "education_class_id",
              id: "education_class_id",
              blank: true,
              values: initEducationClass.id,
              options: this.selectionEducationClasses.map((klass) => {
                return { value: klass.id, text: klass.name }
              }),
              dataController: this.choicesControllerIdentifier,
              attributes: ` data-${this.identifier}-target="classIdSelect" data-action="change->${this.identifier}#handleEducationClassIdSelection"`
            })}
          </div>

          <div class="w-1/3 flex justify-center items-center">
            ${createSelectTag({
              type: "text",
              className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
              name: "education_subject_id",
              id: "education_subject_id",
              blank: true,
              values: initEducationSubject.id,
              options: initEducationSubjects.map((subject) => {
                return { value: subject.id, text: subject.name }
              }),
              dataController: this.choicesControllerIdentifier,
              attributes: ` data-${this.identifier}-target="subjectIdSelect" data-controller="${identifier(Education_ChoicesController)}"`
            })}
          </div>

          <div class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            <input type="submit" value="Submit">
          </div>
        </form>
        <div data-${this.identifier}-target="table" class="w-full"></div>
        <div data-controller="${identifier(this.paginationController)}" data-${identifier(this.paginationController)}-pagination-value="${transferToValue(this.paginationData)}"></div>
      </div>
    `
  }
}
