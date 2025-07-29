import { identifier, isEmpty, transferToValue, createSelectTag, params, openModal, createForm, createInputTag, sortByField } from "controllers/data_helpers"
import Education_EducationOwner_LayoutController from "controllers/education/education_owner/layout_controller";
import {TabulatorFull as Tabulator} from 'tabulator';
import ChoicesController from "controllers/choices_controller";


export default class Education_EducationOwner_EducationScoreboards_IndexController extends Education_EducationOwner_LayoutController {
  static targets = ['classIdSelect', 'subjectIdSelect', 'table']
  static values = {
    selectionEducationSubject: {  type: Array, default: [] },
  }

  initBinding() {
    super.initBinding()
    this.educationStudents = sortByField(JsonData.data.education_students, 'name')
    this.educationExams = JsonData.data.education_exams
    this.educationExamToClass = JsonData.data.education_exam_to_class
    this.educationExamToStudents = JsonData.data.education_exam_to_students
    this.selectionEducationClasses = JsonData.data.selection_education_classes
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
    return this.application.getControllerForElementAndIdentifier(this.subjectIdSelectTarget, identifier(ChoicesController))
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
        // name: row.name,
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
        // editor: "input",
      }
    })
    return [
      {title:"Student", field: "name", formatter: "html"},
      ...examColumns,
    ]
  }

  examAppointmentsData() {
    const data = []
    this.educationStudents.forEach((educationStudent) => {
      const row = {name: educationStudent.name}
      this.educationExams.forEach((educationExam) => {
        const educationExamToStudent = this.educationExamToStudents.find((educationExamToStudent) => educationExamToStudent.education_exam_id === educationExam.id && educationExamToStudent.education_student_id === educationStudent.id)
        // row[educationExam.id] = educationExamToStudent ? educationExamToStudent.score : ''
        row[educationExam.id] = `
          <div>
            ${educationExamToStudent.score ? 
              `<div data-action="dblclick->${this.identifier}#openModalUpdateExam" data-${this.identifier}-education-exam-to-class-id-param="${educationExamToStudent.education_exam_to_class_id}" data-${this.identifier}-education-exam-id-param="${educationExam.id}">
                ${educationExamToStudent.score}
              </div>`
              :
              `<div class="text-red-500 cursor-copy" data-action="click->${this.identifier}#openModalUpdateExam" data-${this.identifier}-education-exam-to-class-id-param="${educationExamToStudent.education_exam_to_class_id}" data-${this.identifier}-education-exam-id-param="${educationExam.id}">
                <svg class="w-6 h-6 stroke-gray-800 dark:stroke-slate-200 fill-gray-100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke-width="1.5"/>
                  <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>`}
          </div>`
      })
      data.push(row)
    })
    return data
  }

  openModalUpdateExam(e) {
    openModal({
      html: this.updateExamModalHTML(e),
      customClass: {
        popup: '!p-0 !w-1/2 dark:!bg-gray-700 dark:!text-gray-200',
      },
      options: {
        showCloseButton: true,
        backdrop: false,
      },
    })
  }

  updateExamModalHTML(e) {
    const educationExamToClassId = e.params.educationExamToClassId
    const educationExamId = e.params.educationExamId
    const educationExam = this.educationExams.find((educationExam) => educationExam.id === educationExamId)
    return `
      <div class="w-4/5 mt-10 mx-auto">
        ${createForm({
          action: `/education_scoreboards/import`,
          method: "patch",
          html: `
            ${createInputTag({
              type: "hidden",
              name: "education_exam_to_class_id",
              value: educationExamToClassId,
            })}
            <div class="w-full grid grid-cols-1 gap-y-4 justify-between items-center">
              <div class="flex flex-row gap-x-4 justify-between items-center">
                <div class="w-3/4">${educationExam.name}</div>
                <div class="w-1/4">Score</div>
              </div>
              ${this.educationStudents.map((educationStudent) => {
                const educationExamToStudent = this.educationExamToStudents.find((educationExamToStudent) => educationExamToStudent.education_exam_id === educationExamId && educationExamToStudent.education_student_id === educationStudent.id)
                return `
                  <div class="flex flex-row gap-x-4 justify-between items-center">
                    <div class="w-3/4 my-5">
                      ${createSelectTag({
                        type: "text",
                        className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
                        name: "education_exam_to_student[ids][]",
                        values: educationExamToStudent.id,
                        options: [{ value: educationExamToStudent.id, text: educationStudent.name }],
                      })}
                    </div>
                    <div class="w-1/4 my-5">
                      ${createInputTag({
                        type: "number",
                        className: "block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full",
                        name: "education_exam_to_student[scores][]",
                        id: "education_exam_to_student[scores][]",
                        value: educationExamToStudent.score,
                      })}
                    </div>
                  </div>
                `
              }).join('')}
              <div class="my-5">
                <input type="submit" value="Save" class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              </div>
            </div>
          `
          })
        }
      </div>`
  }

  contentHTML() {
    let initEducationClass = {}
    let initEducationSubjects = []
    let initEducationSubject = {}

    if (params().education_class_id) {
      initEducationClass = this.selectionEducationClasses.find((klass) => klass.id === params().education_class_id)
      initEducationSubjects = initEducationClass ? initEducationClass.education_subjects : []
      initEducationSubject = initEducationSubjects.find((subject) => subject.id === params().education_subject_id)
    }
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
              dataController: this.selectController.identifier,
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
              dataController: this.selectController.identifier,
              attributes: ` data-${this.identifier}-target="subjectIdSelect" data-controller="${identifier(ChoicesController)}"`
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
