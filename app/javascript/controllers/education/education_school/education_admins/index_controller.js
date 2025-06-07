import { createForm, createSelectTag, pluck, unique, params } from "controllers/education/helpers/data_helpers";
import { EducationAdminsApi } from "controllers/education/api/education_admins_api";
import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";
import { EditModalHTML } from "controllers/education/education_school/education_admins/edit_modal_html";
import { tableData } from "controllers/education/education_school/education_admins/table_data";

export default class Education_EducationSchool_EducationAdmins_IndexController extends Education_EducationSchool_LayoutController {
  static targets = ['content', 'table', 'search', 'pagination']
  static values = {
    educationAdmins: { type: Array, default: [] },
    editEducationAdmin: { type: Object, default: {} },
  }

  initBinding() {
    super.initBinding()
    this.educationAdminsValue = ServerData.data.education_admins
    this.selectEducationSchools = ServerData.data.select_education_schools
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
      this.getTableController().dataValue = tableData({
        educationAdmins: this.educationAdminsValue,
        identifier: this.identifier,
      })
      this.getPaginationController().dataValue = this.paginationValue
    })
  }

  openEditEducationAdminModal(event) {
    const educationAdminId = event.params.educationAdminId
    EducationAdminsApi.show(educationAdminId).then((educationAdmin) => {
      console.log("Fetched education admin:", educationAdmin)
      this.openModal({
        html: EditModalHTML({educationAdmin: educationAdmin, selectControllerIdentifier: this.selectController.identifier, educationSchools: this.selectEducationSchools}),
      })
    }).catch((error) => {
      console.error("Error fetching education admin:", error)
      this.contentTarget.innerHTML = "<p class='text-red-500'>Failed to load education admin.</p>"
    })
  }

  defaultHTML() {
    return `
      <div class="mx-auto w-4/5 mt-10 flex flex-col gap-y-4">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-medium">Admins</h2>
          <a class="rounded-lg py-2 px-5 bg-slate-800 text-white" href="/education_admins/new">New Admin</a>
        </div>
        ${createForm({
          className: "flex flex-row my-5",
          html: `
            <input 
              data-${this.identifier}-target="search"
              type="search"
              class="w-full border border-gray-200 rounded-lg p-2 focus:ring-blue-600"
              placeholder="Search"
              name="full_text_search"
              value="${params()["full_text_search"] || ""}"
            >
            ${createSelectTag({
              // className: "",
              // id: "",
              name: "education_school_id",
              dataController: this.selectController.identifier,
              options: this.selectEducationSchools.map((school) => {
                return {
                  value: school.id,
                  text: school.name,
                }
              }),
              values: params()["education_school_id"] || [],
              // required: false,
              // multiple: false, 
              // disabled: false,
              blank: true,
              blankText: "Select",
              // attributes: ""
            })}
            <input 
              type="submit"
              value="Search" 
              class="bg-slate-800 text-white rounded-lg px-4 py-2 ml-2 cursor-pointer hover:bg-slate-700">
          `
        })}
        <div data-controller="${this.tableController.identifier}" data-${this.identifier}-target="table" class="w-full"></div>
        <div data-controller="${this.paginationController.identifier}" data-${this.identifier}-target="pagination"></div>
      </div>
      `
  }

}