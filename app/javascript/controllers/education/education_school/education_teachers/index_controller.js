import { identifier, transferToValue } from "controllers/education/helpers/data_helpers"

import {TabulatorFull as Tabulator} from 'tabulator';
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class Education_EducationSchool_EducationTeachers_IndexController extends Education_EducationSchool_LayoutController {

  initBinding() {
    super.initBinding()
    this.educationTeachers = ServerData.data.education_teachers
  }

  init() {
    this.initHTML()
    this.initTable()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  initTable() {
    let tableData = this.educationTeachers.map((row) => {
      return {
        ...row,
        name: `<a href="/education_teachers/${row.id}/edit">${row.name}</a>`,
        school_names: `<div>${row.education_schools.map((school) => `<span>${school.name}</span>`).join(",")}</div>`,
        class_names: `<ol>${row.education_classes.map((klass) => `<li>${klass.name}</li>`).join("")}</ol>`,
        subject_names: `<ol>${row.education_subjects.map((subject) => `<li>${subject.name}</li>`).join("")}</ol>`,
      }
    })
    this.table = new Tabulator(this.tableTarget, {
      data: tableData,           //load row data from array
      layout:"fitDataStretch",      //fit columns to width of table
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
        {title: "Subjects", field: "subject_names", width: 150, formatter: "html"},
      ],
    });
  }

  defaultHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10">
        <div class="flex justify-between items-center">
            <h2 class="text-xl font-medium">Teachers</h2>
            <a href="/education_teachers/new" class="rounded-lg py-2 px-4 bg-slate-800 text-white inline-block">New Teacher</a>
        </div>
        <form class="flex flex-row my-5">
          <input data-${this.identifier}-target="search" type="search" class="w-full border border-gray-200 rounded-lg p-2 focus:ring-blue-600" placeholder="Search">
          <input type="submit" value="Search" class="bg-slate-800 text-white rounded-lg px-4 py-2 ml-2">
        </form>
        <div data-${this.identifier}-target="table" class="w-full"></div>
        <div data-controller="${identifier(this.paginationController)}" data-${identifier(this.paginationController)}-pagination-value="${transferToValue(this.paginationData)}"></div>
      </div>
        `
  }

}