import {TabulatorFull as Tabulator} from 'tabulator';
import Education_EducationStudent_LayoutController from "controllers/education/education_student/layout_controller";
import Education_PaginationController from "controllers/education/pagination_controller";
import { identifier, transferToValue } from "controllers/helpers/data_helpers"

export default class extends Education_EducationStudent_LayoutController {
  init() {
    this.initHTML()
    this.initTable()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  initTable() {
    let tableData = this.paymentOrders().map((row) => {
      return {
        ...row,
        payment_customerable_name: row.payment_customer.payment_customerable ? row.payment_customer.payment_customerable.name : "",
        payment_userable_name: row.payment_user.payment_userable ? row.payment_user.payment_userable.name : "",
        status: this.paymentStatusHTML(row.status),
      }
    })
    var table = new Tabulator(this.tableTarget, {
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
          {title:"Customer", field: "payment_customerable_name", formatter: "html"},
          {title: "School", field: "payment_userable_name", width: 150, formatter: "html"},
          {title: "Status", field: "status", formatter: "html"},
          {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
          {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},

      ],
    });
  }

  paymentOrders() {
    return ServerData.data.payment_orders
  }

  defaultHTML() {
    return `
      <div data-${this.identifier}-target="table" class="w-full"></div>
      <div data-controller="${identifier(Education_PaginationController)}" data-${identifier(Education_PaginationController)}-pagination-value="${transferToValue(ServerData.pagination)}"></div>
    `
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