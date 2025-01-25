import {TabulatorFull as Tabulator} from 'tabulator';
import { EducationStudentsApi } from "../../api/education_students_api";
import { EducationSchoolsApi } from "../../api/education_schools_api";
import { EducationClassesApi } from "../../api/education_classes_api";
import { params } from "../../api/api_helpers";
import Education_EducationSchool_LayoutController from '../layout_controller';
import PaginationController from '../../../pagination_controller';

export default class extends Education_EducationSchool_LayoutController {
  static targets = ["table", "classIdSelect"]
  static values = {
    class: { type: Object, default: {
      element: "w-full h-full",
      content: "w-full h-full",
    } },
    table: { type: Array, default: [] },
    filterParams: { type: Object, default: {} },
    mapping: { type: Object, default: {
      education_school_id: {value: "id", label: "name"},
      education_class_id: {value: "id", label: "name"}

    } },
  }

  init() {
    this.initHTML()
    this.initValues()
    this.initClassIdSelect()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  initValues() {
    this.tableValue = this.contentData()
  }

  tableValueChanged() {
    this.initTable()
  }

  initTable() {
    let tableData = this.tableValue.map((row) => {
      return {
        ...row,
        name: `<a href="/education_students/${row.id}">${row.name}</a>`,
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
          // {title:"Name", field:"name", editor:"input"},
          {title:"Name", field: "name", formatter: "html"},
          {title:"School", field:"school_names", sorter:"string", hozAlign:"center", formatter: "html"},
          {title:"Class", field:"class_names", sorter:"string", hozAlign:"center", formatter: "html"},
          // {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
          // {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},

      ],
    });
  }

  async initClassIdSelect() {
    const classes = await this.fetchClasses()
    this.classIdSelectTarget.innerHTML = `
      <option value="" disabled selected>Select Class</option>
      ${classes.map((row) => {
        return `<option value="${row.id}">${row.name}</option>`
      }).join('')}
    `
    this.classIdSelectTarget.setAttribute("data-controller", "choices")
  }

  async fetchClasses() {
    const response = await EducationClassesApi.index()
    return response.data
  }

  defaultHTML() {
    return `
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
            data-${this.identifier}-target="classIdSelect"
          >
            <option value="" disabled selected>Select Class</option>
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
