import Education_LayoutController from "../layout_controller";
import { CookieHelpers } from '../../helpers/cookie_helpers';
import {TabulatorFull as Tabulator} from 'tabulator';
import Education_FilterController from "../filter_controller";
import { EducationStudentsApi } from "../api/education_students_api";
import Education_PaginationController from "../pagination_controller";

export default class extends Education_LayoutController {
  static targets = ["filter", "pagination"]
  static values = {
    class: { type: Object, default: {
      element: "w-full h-full",
      content: "w-full h-full",
    } },
    table: { type: Array, default: [] },
    filterParams: { type: Object, default: {} },
  }

  init() {
    // this.initValues()
    this.initFilter()
  }

  // initValues() {
  //   this.tableValue = this.contentData()
  // }

  tableValueChanged() {
    this.initTable()
  }

  initTable() {
    let tableData = this.tableValue.map((row) => {
      return {
        ...row,
        name: `<a href="${CookieHelpers.navigationUrl()}/education_students/${row.id}">${row.name}</a>`,
      }
    })
    this.table = new Tabulator('#education_students', {
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
          {title:"School", field:"school_name", sorter:"string", hozAlign:"center"},
          {title:"Class", field:"class_names", sorter:"string", hozAlign:"center"},
          // {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
          // {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},

      ],
    });
  }

  initFilter() {
    setTimeout(() => {
      this.filterController().submitValueCallback = (value, previousValue) => {
        this.filterParamsValue = value
      }
    }, 1000)
  }

  filterController() {
    return this.application.getControllerForElementAndIdentifier(this.filterTarget, Education_FilterController.identifier)
  }

  async filterParamsValueChanged(value, previousValue) {
    const response = await EducationStudentsApi.index({params: this.filterParamsValue})
    const responseData = response.data
    this.tableValue = responseData
    this.paginationController().additionalParamsValue = value
  }

  paginationController() {
    return this.application.getControllerForElementAndIdentifier(this.paginationTarget, Education_PaginationController.identifier)
  }
}
