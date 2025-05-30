import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";
import { EducationAdminsApi } from "controllers/education/api/education_admins_api";
export default class Education_EducationSchool_EducationAdmins_IndexController extends Education_EducationSchool_LayoutController {
  static targets = ['content', 'table', 'search', 'pagination']
  static values = {
    educationAdmins: { type: Array, default: [] },
  }

  initBinding() {
    super.initBinding()
    this.educationAdminsValue = ServerData.data.education_admins
    EducationAdminsApi.index({ params: { page: 1, per_page: 10 } }).then((data) => {
      // this.educationAdminsValue = data
      // this.render()
      console.log("Fetched education admins:", data)
    }).catch((error) => {
      console.error("Error fetching education admins:", error)
      // this.contentTarget.innerHTML = "<p class='text-red-500'>Failed to load education admins.</p>"
    })
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    this.contentTarget.innerHTML = this.defaultHTML()
  }

  educationAdminsValueChanged(value, previousValue) {
    this.render()
  }

  paginationValueChanged(value, previousValue) {
    this.render()
  }

  render() {
    Promise.resolve().then(() => {
      this.getTableController().dataValue = this.tableData()
      this.getPaginationController().dataValue = this.paginationValue
    })
  }

  getTableController() {
    return this.application.getControllerForElementAndIdentifier(this.tableTarget, this.tableController.identifier)
  }

  getPaginationController() {
    return this.application.getControllerForElementAndIdentifier(this.paginationTarget, this.paginationController.identifier)
  }

  tableData() {
    // Tabulator expects an options object with data and columns
    return {
      data: this.educationAdminsValue.map((row) => {
        return {
          ...row,
          name: `<a href="/education_admins/${row.id}/edit">${row.name}</a>`,
          school_name: `<div>${row.education_school.name}</div>`,
        }
      }),
      columns: [
        {title:"Name", field: "name", formatter: "html"},
        {title: "School", field: "school_name", width: 150, formatter: "html"},
      ],
    }
  }

  defaultHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-medium">Admins</h2>
          <a class="rounded-lg py-2 px-5 bg-slate-800 text-white" href="/education_admins/new">New Admin</a>
        </div>
        <form class="flex flex-row my-5">
          <input data-${this.identifier}-target="search" type="search" class="w-full border border-gray-200 rounded-lg p-2 focus:ring-blue-600" placeholder="Search">
          <input type="submit" value="Search" class="bg-slate-800 text-white rounded-lg px-4 py-2 ml-2">
        </form>
        <div data-controller="${this.tableController.identifier}" data-${this.identifier}-target="table" class="w-full"></div>
        <div data-controller="${this.paginationController.identifier}" data-${this.identifier}-target="pagination"></div>
      </div>
      `
  }

}