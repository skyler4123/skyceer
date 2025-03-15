import ApplicationController from "controllers/application_controller"
import { openPopover, openModal } from "controllers/education/helpers/data_helpers"

export default class Education_CsvController extends ApplicationController {
  static targets = ["input"]
  static values = {
    csv: { type: Array, default: [] },
  }

  initBinding() {
    // this.csv
    openPopover
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = `
      <input type="file" accept=".csv,.xlsx" data-${this.identifier}-target="input" data-action="change->${this.identifier}#handleFileSelect">

    `
  }

  handleFileSelect(event) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const contents = e.target.result
        this.processCSV(contents)
      }
      reader.readAsText(file)
    }
  }

  processCSV(contents) {
    const rows = contents.split("\n")
    rows.forEach(row => {
      const columns = row.split(",")
      this.csvValue = [...this.csvValue, columns]
    })
    console.log(this)
  }

  // initTable() {
  //   let tableData = this.educationStudents().map((row) => {
  //     return {
  //       ...row,
  //       name: `<a href="/education_students/${row.id}/edit">${row.name}</a>`,
  //       class_names: `<div>${row.education_classes.map((klass) => `<span>${klass.name}</span>`).join(",")}</div>`,
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
  //       {title:"Schools", field:"school_names", sorter:"string", hozAlign:"center", formatter: "html"},
  //       {title:"Classes", field:"class_names", sorter:"string", hozAlign:"center", formatter: "html"}
  //     ],
  //   });
  // }

  // openPopoverProfile(event) {
  //   if (!isSignedIn()) return
  //   const target = event.currentTarget
  //   openPopover({
  //     parentElement: target,
  //     html: this.popoverProfileHTML(),
  //     position: 'bottom-left',
  //     popupClass: 'bg-white !border !border-gray-200 !w-75 -translate-x-full'
  //   })
  // }

}