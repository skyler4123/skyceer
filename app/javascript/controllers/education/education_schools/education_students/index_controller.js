import {TabulatorFull as Tabulator} from 'tabulator';
import Education_LayoutController from "../../layout_controller";
import { CookieHelpers } from '../../../helpers/cookie_helpers';

export default class extends Education_LayoutController {

  init() {
    let tableData = this.contentData().map((row) => {
      return {
        ...row,
        name: `<a href="/${CookieHelpers.navigationName()}/${CookieHelpers.navigationId()}/education_students/${row.id}">${row.name}</a>`,
      }
    })
    var table = new Tabulator('#education_students', {
      data: tableData,           //load row data from array
      layout:"fitColumns",      //fit columns to width of table
      responsiveLayout:"hide",  //hide columns that don't fit on the table
      addRowPos:"top",          //when adding a new row, add it to the top of the table
      history:true,             //allow undo and redo actions on the table
      pagination:"local",       //paginate the data
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
          {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
          {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},

      ],
    });
  }

  // connect() {
  //   // console.log("Hello, Stimulus!", this);
  // }
}
