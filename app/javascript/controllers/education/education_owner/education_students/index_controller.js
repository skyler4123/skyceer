import { identifier, transferToValue } from "controllers/education/helpers/data_helpers"

import {TabulatorFull as Tabulator} from 'tabulator';
import Education_EducationOwner_LayoutController from "controllers/education/education_owner/layout_controller";

export default class Education_EducationOwner_EducationStudents_IndexController extends Education_EducationOwner_LayoutController {

  initBinding() {
    super.initBinding()
    this.selectionEducationClasses = JsonData.data.selection_education_classes
    this.selectionEducationSchools = JsonData.data.selection_education_schools
    this.educationStudents = JsonData.data.education_students
  }

  init() {
    this.initHTML()
    this.initTable()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  initTable() {
    let tableData = this.educationStudents.map((row) => {
      return {
        ...row,
        name: `<a href="/education_students/${row.id}/edit">${row.name}</a>`,
        class_names: `<div>${row.education_classes.map((klass) => `<span>${klass.name}</span>`).join(",")}</div>`,
        school_names: `<div>${row.education_school.id}</div>`,
      }
    })
    this.table = new Tabulator(this.tableTarget, {
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
        {title:"Name", field: "name", formatter: "html"},
        {title:"Schools", field:"school_names", sorter:"string", hozAlign:"center", formatter: "html"},
        {title:"Classes", field:"class_names", sorter:"string", hozAlign:"center", formatter: "html"}
      ],
    });
  }

  defaultHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-medium">Students</h2>
          <div>
            <a class="rounded-lg py-2 px-5 bg-slate-800 text-white" href="/education_students/new">New Student</a>
            <a class="rounded-lg py-2 px-5 bg-slate-800 text-white" href="/education_students/import_view"">Import</a>
          </div>
        </div>
        <form action="/education_students" class="w-full h-full flex flex-row gap-x-4 justify-end items-center">
          <div class="w-full h-full bg-white dark:bg-gray-800 dark:text-white flex items-center border border-gray-200 rounded-lg">
            <input
              type="text"
              name="full_text_search"
              placeholder="Name, Email, Phone, ..."
              class="p-2.5"
            >
          </div>
          <div class="min-w-1/4 h-full bg-white dark:bg-gray-800 dark:text-white flex items-center border border-gray-200 rounded-lg">
            <select
              name="education_school_id"
              data-controller="${this.selectController.identifier}"
            >
              <option value="" disabled selected>Select School</option>
              ${this.selectionEducationSchools.map((school) => {
                return `<option value="${school.id}">${school.name}</option>`
              }).join("")}
            </select>
          </div>
          <div class="min-w-1/4 h-full bg-white dark:bg-gray-800 dark:text-white flex items-center border border-gray-200 rounded-lg">
            <select
              name="education_class_id"
              data-controller="${this.selectController.identifier}"
            >
              <option value="" disabled selected>Select Class</option>
              ${this.selectionEducationClasses.map((klass) => {
                return `<option value="${klass.id}">${klass.name}</option>`
              }).join("")}
            </select>
          </div>
          <div class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            <input class="cursor-pointer" type="submit" value="Search">
          </div>
        </form>
        <div data-${this.identifier}-target="table" class="w-full"></div>
        <div data-controller="${identifier(this.paginationController)}" data-${identifier(this.paginationController)}-pagination-value="${transferToValue(this.paginationData)}"></div>
      </div>          
    `
  }

}