import {TabulatorFull as Tabulator} from 'tabulator';
import { EducationStudentsApi } from "../../api/education_students_api";
import { EducationSchoolsApi } from "../../api/education_schools_api";
import { EducationClassesApi } from "../../api/education_classes_api";
import { params } from "../../api/api_helpers";
import Education_School_LayoutController from '../layout_controller';
import PaginationController from '../../../pagination_controller';

export default class extends Education_School_LayoutController {
  static targets = ["table", "index", "select", "filter", "pagination"]
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
    console.log(this)

    this.initHTML()
    this.initValues()
    // this.initFilter()
    // this.initFilterSelect()
  }

  initHTML() {
    this.contentTarget.insertAdjacentHTML('beforeend', this.defaultHTML())
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
          {title:"School", field:"school_name", sorter:"string", hozAlign:"center"},
          {title:"Class", field:"class_names", sorter:"string", hozAlign:"center"},
          // {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
          // {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},

      ],
    });
  }

  defaultHTML() {
    return `
      <form action="/education_students">
        <input
          type="text"
          name="full_text_search"
          placeholder="Name, Email, Phone, ..."
          class="w-64"
        >
        <select
          name="education_school_id"
          class="w-64"
          data-${this.identifier}-target="select"
          data-${this.identifier}-api-function-param="EducationSchoolsApi.index()"
          data-action="mousedown->${this.identifier}#loadFilterSelectOptionsEvent"
        >
          <option value="" disabled selected>Select School</option>
        </select>
        <select
          name="education_class_id"
          class="w-64"
          data-${this.identifier}-target="select"
          data-${this.identifier}-api-function-param="EducationClassesApi.index()"
          data-action="mousedown->${this.identifier}#loadFilterSelectOptionsEvent"
        >
          <option value="" disabled selected>Select Class</option>
        </select>
        <input type="submit" value="Submit">
      </form>
      <div data-${this.identifier}-target="table" class="w-full"></div>
      <div data-controller="${PaginationController.identifier}" data-${PaginationController.identifier}-pagination-value="${this.transferToValue(this.contentPagination())}"></div>
    `
  }

  initFilterSelect() {
    this.selectTargets.forEach(async (select) => {
      if (this.hasParamsAtUrl(select)) {
        await this.loadFilterSelectOptions(select)
      }
    })
  }

  loadFilterSelectOptionsEvent(event) {
    this.loadFilterSelectOptions(event.target)
  }

  async loadFilterSelectOptions(selectElement) {
    if (selectElement.tagName != "SELECT") { return }
    if (selectElement.childElementCount > 1) { return }

    const inputName = selectElement.name
    const apiFunction = selectElement.getAttribute(`data-${this.identifier}-api-function-param`)
    const response = await eval(apiFunction)
    const responseData = response.data
    selectElement.innerHTML = `
      <option value="">Select ${inputName}</option>
      ${responseData.map((data) => {
        return `
          <option
            value="${data[this.mappingValue[inputName].value]}"
            ${params(inputName) == data[this.mappingValue[inputName].value] ? "selected" : ""}
          >
              ${data[this.mappingValue[inputName].label]}
          </option>`
      }).join("")}
    `
  }

  hasParamsAtUrl(selectElement) {
    const inputName = selectElement.name
    return !!params(inputName)
  }
}
