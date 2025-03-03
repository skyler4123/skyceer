import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";
import { openPopover } from "controllers/helpers/data_helpers";
import { isEmpty } from "controllers//helpers/data_helpers";

export default class extends Education_EducationSchool_LayoutController {
  static targets = ["schoolSelect", "categorySelect"]

  contentHTML() {
    return this.serverHTML
  }

  init()  {
    this.initAction()
  }

  initAction() {
    this.categorySelectTarget.dataset.action += ` click->${this.identifier}#categoryClicked`
  }

  categoryClicked(event) {
    const schoolSelected = Array.from(this.schoolSelectTarget.options).map(option => {
      return {[option.innerText]: option.value}
    })
    

    openPopover({parentElement: this.categorySelectTarget, html: this.categoryPopoverHTML(), popupClass: "bg-slate-700", position: 'bottom-left'})
  }

  categoryPopoverHTML() {
    return `
      <div class="p-2 border border-gray-200 bg-white rounded shadow-lg">
        <div class="text-center">Category</div>
        <ul class="text-left">
        ${ServerData.data.education_categories.map(category => {

        }).join('')}
        </ul>
      </div>
    `

  }

}