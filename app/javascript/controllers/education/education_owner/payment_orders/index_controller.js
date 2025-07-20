import {TabulatorFull as Tabulator} from 'tabulator';
import Education_EducationOwner_LayoutController from "controllers/education/education_owner/layout_controller";

import { identifier, transferToValue } from "controllers/education/helpers/data_helpers"

export default class Education_EducationOwner_PaymentOrders_IndexController extends Education_EducationOwner_LayoutController {
  
  initBinding() {
    super.initBinding()
    this.paymentOrders = JsonData.data.payment_orders
  }

  init() {
    this.initHTML()
    this.initTable()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  initTable() {
    let tableData = this.paymentOrders.map((row) => {
      return {
        ...row,
        payment_customerable_name: row.payment_customer.payment_customerable ? row.payment_customer.payment_customerable.name : "",
        payment_ownerable_name: row.payment_owner.payment_ownerable ? row.payment_owner.payment_ownerable.name : "",
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
          {title: "School", field: "payment_ownerable_name", width: 150, formatter: "html"},
          {title: "Status", field: "status", formatter: "html"},
          {title:"Created At", field:"created_at", width:130, sorter:"date", hozAlign:"center"},
          {title:"Updated At", field:"updated_at", width:130, sorter:"date", hozAlign:"center"},

      ],
    });
  }

  defaultHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-medium">Payments</h2>
          <a class="rounded-lg py-2 px-5 bg-slate-800 text-white" href="/payment_orders/new">New Payment</a>
        </div>
        <form class="flex flex-row my-5">
          <input data-${this.identifier}-target="search" type="search" class="w-full border border-gray-200 rounded-lg p-2 focus:ring-blue-600" placeholder="Search">
          <input type="submit" value="Search" class="bg-slate-800 text-white rounded-lg px-4 py-2 ml-2">
        </form>
        <div data-${this.identifier}-target="table" class="w-full"></div>
        <div data-controller="${identifier(this.paginationController)}" data-${identifier(this.paginationController)}-pagination-value="${transferToValue(this.paginationData)}"></div>
      </div>
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