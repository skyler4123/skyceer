import { identifier, transferToValue, createForm, createSelectTag, createInputTag, pluck } from "controllers/education/helpers/data_helpers"
import {TabulatorFull as Tabulator} from 'tabulator';
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {
  static targets = ["subjectTable"]

  initBinding() {
    super.initBinding()
    this.educationClass = ServerData.data.education_class
    this.educationCourses = ServerData.data.education_courses
    this.educationCategories = ServerData.data.education_categories
    this.educationSchools = ServerData.data.education_schools
    this.educationSubjects = ServerData.data.education_subjects
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

  initSubjectTable() {
    const tableData = this.educationSubjects.map((row) => {
      return {
        ...row,
        subject: `<a href="/education_subjects/${row.id}/edit">${row.name}</a>`,
        teacher: row.teacher ? row.teacher.name : "No Teacher",
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
}