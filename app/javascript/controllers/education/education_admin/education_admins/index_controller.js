import { identifier, transferToValue } from "controllers/education/helpers/data_helpers"

import {TabulatorFull as Tabulator} from 'tabulator';
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";

export default class extends Education_EducationSchool_LayoutController {

  // init() {
  //   this.initHTML()
  //   this.initTable()
  // }

  // initHTML() {
  //   this.contentTarget.innerHTML = this.defaultHTML()
  // }

  // initTable() {
  //   let tableData = this.educationAdmins().map((row) => {
  //     return {
  //       ...row,
  //       name: `<a href="/education_admins/${row.id}/edit">${row.name}</a>`,
  //       school_names: `<div>${row.education_schools.map((school) => `<span>${school.name}</span>`).join(",")}</div>`,
  //     }
  //   })
  //   this.table = new Tabulator(this.tableTarget, {
  //     data: tableData,           //load row data from array
  //     layout:"fitColumns",      //fit columns to width of table
  //     responsiveLayout:"hide",  //hide columns that don't fit on the table
  //     addRowPos:"top",          //when adding a new row, add it to the top of the table
  //     history:true,             //allow undo and redo actions on the table
  //     pagination: false,       //paginate the data
  //     paginationSize:10,         //allow 7 rows per page of data
  //     paginationCounter:"rows", //display count of paginated rows in footer
  //     movableColumns:true,      //allow column order to be changed
  //     initialSort:[             //set the initial sort order of the data
  //         {column:"name", dir:"asc"},
  //     ],
  //     columnDefaults:{
  //         tooltip:true,         //show tool tips on cells
  //     },
  //     columns:[                 //define the table columns
  //       {title:"Name", field: "name", formatter: "html"},
  //       {title: "Schools", field: "school_names", width: 150, formatter: "html"},
  //       {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
  //       {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},
  //     ],
  //   });
  // }

  // educationAdmins() {
  //   return JsonData.data.education_admins
  // }

  // defaultHTML() {
  //   return `
  //     <div data-${this.identifier}-target="table" class="w-full"></div>
  //     <div data-controller="${identifier(this.paginationController)}" data-${identifier(this.paginationController)}-pagination-value="${transferToValue(this.paginationData)}"></div>
  //   `
  // }

}