import { identifier, transferToValue } from "controllers/education/helpers/data_helpers"
import Education_PaginationController from "controllers/education/pagination_controller";
import {TabulatorFull as Tabulator} from 'tabulator';
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {

  init() {
    this.initHTML()
    this.initTable()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  initTable() {
    let tableData = this.educationTeachers().map((row) => {
      return {
        ...row,
        name: `<a href="/education_teachers/${row.id}">${row.name}</a>`,
        school_names: `<div>${row.education_schools.map((school) => `<span>${school.name}</span>`).join(",")}</div>`,
        class_names: `<div>${row.education_classes.map((klass) => `<span>${klass.name}</span>`).join(",")}</div>`,
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
        {title: "Schools", field: "school_names", width: 150, formatter: "html"},
        {title: "Classes", field: "class_names", width: 150, formatter: "html"},
        {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
        {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},
      ],
    });
  }

  educationTeachers() {
    return ServerData.data.education_teachers
  }

  defaultHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10">
        <div class="flex justify-between items-center">
            <h2 class="text-xl font-medium">Teachers</h2>
            <a href="/education_teachers/new" class="rounded-lg py-2 px-4 bg-slate-800 text-white inline-block">New Teacher</a>
        </div>
        <div class="my-5">
            <input data-${this.identifier}-target="search" type="search" class="w-full border border-gray-200 rounded-lg p-2" placeholder="Search">
        </div>
        <div data-${this.identifier}-target="table" class="w-full"></div>
        <div data-controller="${identifier(Education_PaginationController)}" data-${identifier(Education_PaginationController)}-pagination-value="${transferToValue(ServerData.pagination)}"></div>
      </div>
        `
  }

}