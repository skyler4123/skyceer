import { createForm, createInputTag, createSelectTag } from "controllers/data_helpers";

export function EditModalHTML({educationAdmin, selectControllerIdentifier, educationSchools, identifier} = {}) {
  return `
    <div class="flex items-center justify-center">
      <div class="w-4/5 bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-medium mb-4">Edit Admin</h2>
        ${createForm({
          action: `/education_admins/${educationAdmin.id}`,
          method: "PATCH",
          className: "flex flex-col gap-y-4",
          html: `
            ${createInputTag({
              type: "text",
              name: "education_admin[name]",
              value: educationAdmin.name || "",
              placeholder: "Name",
              className: "border border-gray-200 rounded-lg p-2 focus:ring-blue-600" 
            })}
            ${createInputTag({
              type: "email",
              name: "education_admin[email]",
              value: educationAdmin.email || "",
              placeholder: "Email",
              className: "border border-gray-200 rounded-lg p-2 focus:ring-blue-600"
            })}
            ${createSelectTag({
              name: "education_admin[education_school_id]",
              dataController: selectControllerIdentifier,
              options: educationSchools.map((school) => {
                return {
                  value: school.id,
                  text: school.name,
                }
              }),
              values: [educationAdmin.education_school.id || ""],
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
    </div>
  `
}