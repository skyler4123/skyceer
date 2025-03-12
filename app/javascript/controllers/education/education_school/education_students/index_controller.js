import { identifier, transferToValue } from "controllers/education/helpers/data_helpers"

import {TabulatorFull as Tabulator} from 'tabulator';
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";


export default class Education_EducationSchool_EducationStudents_IndexController extends Education_EducationSchool_LayoutController {

  init() {
    console.log(this)
    this.initHTML()
    this.initTable()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  initTable() {
    let tableData = this.educationStudents().map((row) => {
      return {
        ...row,
        name: `<a href="/education_students/${row.id}/edit">${row.name}</a>`,
        class_names: `<div>${row.education_classes.map((klass) => `<span>${klass.name}</span>`).join(",")}</div>`,
        school_names: `<div>${row.education_schools.map((school) => `<span>${school.name}</span>`).join(",")}</div>`,
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

  educationStudents() {
    return ServerData.data.education_students
  }

  educationClasses() {
    return ServerData.data.education_classes
  }

  defaultHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-medium">Students</h2>
          <a class="rounded-lg py-2 px-5 bg-slate-800 text-white" href="/education_students/new">New Student</a>
        </div>
        <form action="/education_students" class="flex flex-row gap-x-4">
          <div class="w-1/4">
            <input
              type="text"
              name="full_text_search"
              placeholder="Name, Email, Phone, ..."
              class="h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
            >
          </div>
          <div class="w-1/4 flex justify-center items-center">
            <select
              name="education_class_id"
              data-controller="${identifier(this.choicesController)}"
            >
              <option value="" disabled selected>Select Class</option>
              ${this.educationClasses().map((klass) => {
                return `<option value="${klass.id}">${klass.name}</option>`
              }).join("")}
            </select>
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