import ApplicationController from "controllers/application_controller";

export default class Education_EducationSchool_EducationAdmins_EditFormController extends ApplicationController {
  static values = {
    educationAdminId: { type: String, default: "" },
  }

  educationAdminIdValueChanged(value, previousValue) {

    this.render()
  }

  render() {
    this.element.innerHTML = this.defaultHTML()
  }

    defaultHTML() {
      return `
        <div class="p-5">
          <h2 class="text-xl font-medium mb-4">Edit Admin</h2>
          ${createForm({
            className: "flex flex-col gap-y-4",
            html: `
              <input 
                type="text" 
                name="name" 
                value="${this.editEducationAdmin.name || ""}" 
                placeholder="Name" 
                class="border border-gray-200 rounded-lg p-2 focus:ring-blue-600"
              >
              ${createSelectTag({
                name: "education_school_id",
                dataController: this.selectControllerIdentifier,
                options: this.selectEducationSchools.map((school) => {
                  return {
                    value: school.id,
                    text: school.name,
                  }
                }),
                values: [this.editEducationAdmin.education_school_id || ""],
                blank: true,
                blankText: "Select School",
              })}
              <input 
                type="submit" 
                value="Save" 
                class="bg-slate-800 text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-slate-700"
              >
            `
          })}
        </div>
      `
    }
}