import Swal from 'sweetalert2'
import {TabulatorFull as Tabulator} from 'tabulator';

import ApplicationController from "controllers/application_controller"
import { isEmpty } from "controllers/education/helpers/data_helpers";


export default class Education_TableController extends ApplicationController {
  static values = {
    data: { type: Object, default: {} }
  }

  dataValueChanged(value, previousValue) {
    if (isEmpty(value)) { return }
    this.render()
  }
  render() {
    if (this.table) {this.table.destroy()}
    this.initTable()
  }
  
  initTable() {
    this.table = new Tabulator(this.element, {
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
      ...this.dataValue
    });
  }
}
