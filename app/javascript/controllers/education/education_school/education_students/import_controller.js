import { identifier, transferToValue, readCSVFile, createForm } from "controllers/education/helpers/data_helpers"
import {TabulatorFull as Tabulator} from 'tabulator';
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";
import Education_CsvController from "controllers/education/csv_controller";


export default class Education_EducationSchool_EducationStudents_ImportController extends Education_EducationSchool_LayoutController {
  static targets = ["input", "table", "formAndTable"]
  static values = {
    import: { type: Array, default: [] },
  }

  initBinding() {
    super.initBinding()
    this.csvController = Education_CsvController
  }

  init() {
    console.log(this)
    this.initHTML()
    // this.initTable()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">

        <div 
          class="flex items-center justify-center w-full"
          data-${this.identifier}-target="input"
        >
          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" 
              data-action="change->${this.identifier}#uploadCsvFile"
            />
          </label>
        </div> 
        <div 
          class="hidden flex flex-col items-center justify-center w-full gap-y-4"
          data-${this.identifier}-target="formAndTable"
        >
          ${createForm({
            html: `
              <input type="submit" value="Import" class="rounded-lg py-2 px-5 bg-slate-800 text-white cursor-pointer">
            `
          })}
          <div data-${this.identifier}-target="table" class="w-full"></div>
        </div>
      </div>          
    `
  }

  async uploadCsvFile(event) {
    const file = event.target.files[0]
    if (file) {
      try {
        const data = await readCSVFile(file)
        console.log(data)
        this.importValue = data
      } catch (error) {
        console.error("Error reading CSV file:", error)
      }
    }
  }

  importValueChanged() {
    if (this.importValue.length < 1) { return }
    // hide the input
    this.inputTarget.classList.add("hidden")
    this.formAndTableTarget.classList.remove("hidden")
    this.initTable()
  }
  
  importFields() {
    return Object.keys(this.importValue[0])
  }

  initTable() {
    let tableData = this.importValue
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
      // columns:[                 //define the table columns
      //   {title:"Name", field: "name", formatter: "html"},
      //   {title:"Schools", field:"school_names", sorter:"string", hozAlign:"center", formatter: "html"},
      //   {title:"Classes", field:"class_names", sorter:"string", hozAlign:"center", formatter: "html"}
      // ],
      columns: this.importFields().map((field) => {
        return {title: field, field: field, sorter: "string", hozAlign: "center", formatter: "html", editor: "input", cellEdited: (cell) => {
          console.log(cell)
        } }
      }),
    });
  }

}