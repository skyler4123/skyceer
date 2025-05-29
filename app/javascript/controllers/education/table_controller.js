import Swal from 'sweetalert2'
import {TabulatorFull as Tabulator} from 'tabulator';

import ApplicationController from "controllers/application_controller"
import { isEmpty } from "controllers/education/helpers/data_helpers";


export default class Education_TableController extends ApplicationController {
  static values = {
    data: { type: Object, default: {} }, // Ex: { notice: "Hello World", error: "Something went wrong" }
  }

  dataValueChanged(value, previousValue) {
    if (isEmpty(value)) { return }
    this.render()
  }
  render() {
    if (!this.hasTable()) { return }
    this.table.setData(this.dataValue)
  }
  hasTable() {
    return this.hasTableTarget && this.tableTarget instanceof HTMLElement
  }
  initialize() {
    setTimeout(() => {
      if (!this.hasData()) { return }
      this.initValue()
    }, 500)
  }
  hasData() {
    return !isEmpty(ServerData.data)
  }
  initValue() {
    this.dataValue = ServerData.data
  }
  init() {
    this.initHTML()
    this.initTable()
  }
  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }
  defaultHTML() {
    return `
      <div class="table-responsive">
        <table class="table table-striped table-bordered" data-controller="education-table" data-education-table-target="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>School</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    `
  }

  initTable() {
    if (!this.hasTable()) { return }
    let tableData = this.dataValue.map((row) => {
      return {
        ...row,
        name: `<a href="/education_admins/${row.id}/edit">${row.name}</a>`,
        school_name: `<div>${row.education_school.name}</div>`,
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
        {title: "School", field: "school_name", width: 150, formatter: "html"},
      ],
    });
  }
  connect() {
    this.init()
  }
  disconnect() {
    if (this.hasTable()) {
      this.table.destroy()
      this.table = null
    }
  }
  hasTableTarget() {
    return this.hasTableTarget && this.tableTarget instanceof HTMLElement
  }
  hasContentTarget() {
    return this.hasContentTarget && this.contentTarget instanceof HTMLElement
  }
  hasDataValue() {
    return this.hasDataValue && Array.isArray(this.dataValue)
  }
  hasData() {
    return this.hasDataValue() && !isEmpty(this.dataValue)
  }
  hasContent() {
    return this.hasContentTarget() && this.contentTarget instanceof HTMLElement
  }
  hasTable() {
    return this.hasTableTarget() && this.tableTarget instanceof HTMLElement
  }
  hasDataValueChanged() {
    return this.hasDataValue() && !isEmpty(this.dataValue)
  }
  hasDataValueChanged() {
    return this.hasDataValue() && !isEmpty(this.dataValue)
  }
  hasDataValueChanged() {
    return this.hasDataValue() && !isEmpty(this.dataValue)
  }
  hasDataValueChanged() {
    return this.hasDataValue() && !isEmpty(this.dataValue)
  }
  hasDataValueChanged() {
    return this.hasDataValue() && !isEmpty(this.dataValue)
  }
  hasDataValueChanged() {
    return this.hasDataValue() && !isEmpty(this.dataValue)
  }
  hasDataValueChanged() {
    return this.hasDataValue() && !isEmpty(this.dataValue)
  }
  hasDataValueChanged() {
    return this.hasDataValue() && !isEmpty(this.dataValue)
  }
  hasDataValueChanged() {
    return this.hasDataValue() && !isEmpty(this.dataValue)
  }
}
