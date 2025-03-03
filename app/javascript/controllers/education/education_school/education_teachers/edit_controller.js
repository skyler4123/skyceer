import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";
import { openPopover } from "controllers/helpers/data_helpers";
import { isEmpty } from "controllers/helpers/data_helpers";

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
    const categories = ServerData.data.education_categories;
    return `
      <div class="p-2 border border-gray-200 bg-white rounded shadow-lg">
        <div class="text-center">Category</div>
        ${this.generateCategoryList(categories)}
      </div>
    `
  }

  generateCategoryList(categories, parentLevel = 0) {
    const filteredCategories = categories.filter(category => category.nested_level === parentLevel);
    if (filteredCategories.length === 0) return '';

    const listItems = filteredCategories.map(category => {
      const subCategories = categories.filter(subCategory => subCategory.nested_level === category.nested_level + 1);
      return `
        <li>
          ${category.name}
          ${subCategories.length > 0 ? this.generateCategoryList(categories, category.nested_level + 1) : ''}
        </li>
      `;
    }).join('');

    return `<ul>${listItems}</ul>`;
  }

}