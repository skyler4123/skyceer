import Education_LayoutController from "../layout_controller";
import { CookieHelpers } from '../../helpers/cookie_helpers';
import {TabulatorFull as Tabulator} from 'tabulator';

export default class extends Education_LayoutController {

  init() {
    let tableData = this.contentData().map((row) => {
      return {
        ...row,
        customer_name: `<a href="${CookieHelpers.navigationUrl()}/payment_orders/${row.id}">${row.customer_name}</a>`,
        status: this.paymentStatusHTML(row.status),
      }
    })
    var table = new Tabulator('#payment_orders', {
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
          {title:"Customer", field: "customer_name", formatter: "html"},
          {title:"Amount", field: "amount"},
          {title:"Status", field: "status", formatter: "html"},
          {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
          {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},

      ],
    });
  }

  paymentStatusHTML(status) {
    if (status === "pending") {
      return `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>`
    } else if (status === "paid") {
      return `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>`
    } else if (status === "failed") {
      return `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Failed</span>`
    } else if (status === "refunded") {
      return `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Refunded</span>`
    } else if (status === "cancelled") {
      return `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Cancelled</span>`
    }
  }

}
