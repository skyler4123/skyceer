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
    let tableData = this.educationCategories().map((row) => {
      return {
        ...row,
        name: `<a href="/education_categories/${row.id}/edit">${row.name}</a>`,
        school_name: row.education_school.name,
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
        {title: "Schools", field: "school_name", width: 150, formatter: "html"},
        {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
        {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},
      ],
    });
  }

  educationCategories() {
    return ServerData.data.education_categories
  }

  defaultHTML() {
    return `
      <div data-${this.identifier}-target="table" class="w-full"></div>
      <div data-controller="${identifier(Education_PaginationController)}" data-${identifier(Education_PaginationController)}-pagination-value="${transferToValue(ServerData.pagination)}"></div>
    `
  }

}