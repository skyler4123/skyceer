import { identifier, transferToValue, readCSVFile, createForm } from "controllers/education/helpers/data_helpers"
import {TabulatorFull as Tabulator} from 'tabulator';
import 'read-excel-file'
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";
import Education_CsvController from "controllers/education/csv_controller";


export default class Education_EducationSchool_EducationStudents_ImportViewController extends Education_EducationSchool_LayoutController {
  static targets = ["inputContainer", "inputFile", "table", "formAndTable", "form", "payloadInput"]
  static values = {
    import: { type: Array, default: [] },
  }

  initBinding() {
    console.log(readXlsxFile)
    super.initBinding()
    this.csvController = Education_CsvController
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">

        <div 
          class="flex items-center justify-center w-full"
          data-${this.identifier}-target="inputContainer"
        >
          <label
            for="dropzone-file"
            data-action="dragover->${this.identifier}#dragover drop->${this.identifier}#drop"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">Support: CSV, XLSX</p>
            </div>
            <input
              id="dropzone-file" type="file" class="hidden"
              data-${this.identifier}-target="inputFile"
              data-action="change->${this.identifier}#uploadImportFile"
            />
          </label>
        </div> 
        <div 
          class="hidden flex flex-col items-center justify-center w-full gap-y-4"
          data-${this.identifier}-target="formAndTable"
        >
          <div class="flex flex-row items-center justify-between w-full gap-x-4">
            <div>
              Import file needs to have columns: uid, name, email, school_names, class_names
            </div>
            ${createForm({
              attributes: ` data-${this.identifier}-target="form" method="post" action="/education_students/import" `,
              html: `
                <input type="hidden" name="payload" data-${this.identifier}-target="payloadInput">
                <input type="submit" value="Import" class="rounded-lg py-2 px-5 bg-slate-800 text-white cursor-pointer">
              `
            })}
          </div>
          <div data-${this.identifier}-target="table" class="w-full"></div>
        </div>
      </div>          
    `
  }

  dragover(event) {
    event.preventDefault()
  }

  async drop(event) {
    event.preventDefault()
    const files = event.dataTransfer.files;
    const file = files[0]
    this.handleFileUpload(file)
  }

  uploadImportFile(event) {
    const file = event.target.files[0]
    this.handleFileUpload(file)
  }

  handleFileUpload(file) {
    switch (file.type) {
      case "text/csv":
        this.handleCsvFileUpload(file)
        break
      case "application/vnd.ms-excel":
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        this.handleExcelFileUpload(file)
        break
      default:
        console.error("File type not supported")
    }
  }

  async handleCsvFileUpload(file) {
    console.log("Executing handleCsvFileUpload")
    if (file) {
      try {
        const data = await readCSVFile(file)
        this.importValue = data
      } catch (error) {
        console.error("Error reading CSV file:", error)
      }
    }
  }

  async handleExcelFileUpload(file) {
    if (file) {
      try {
        // const data = await readXlsxFile(file)
        // this.importValue = data
        readXlsxFile(input.files[0]).then(function(rows) {
          // `rows` is an array of rows
          // each row being an array of cells.
          console.log(rows);
        })
      } catch (error) {
        console.error("Error reading Excel file:", error)
      }
    }
  }

  importValueChanged() {
    if (this.importValue.length < 1) { return }
    this.inputContainerTarget.classList.add("hidden")
    this.formAndTableTarget.classList.remove("hidden")
    this.initTable()
    this.payloadInputTarget.value = JSON.stringify(this.table.getData())
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
          // console.log(cell)
          this.payloadInputTarget.value = JSON.stringify(this.table.getData())
        } }
      }),
    });
  }

}