import { createForm, createSelectTag, pluck, unique, params } from "controllers/education/helpers/data_helpers";

export function editModalHTML({educationAdmin, selectControllerIdentifier, educationSchools} = {}) {
  return `
    <div class="p-5">
      <h2 class="text-xl font-medium mb-4">Edit Admin</h2>
      ${createForm({
        className: "flex flex-col gap-y-4",
        html: `
          <input 
            type="text" 
            name="name" 
            value="${educationAdmin.name || ""}" 
            placeholder="Name" 
            class="border border-gray-200 rounded-lg p-2 focus:ring-blue-600"
          >
          ${createSelectTag({
            name: "education_school_id",
            dataController: selectControllerIdentifier,
            options: educationSchools.map((school) => {
              return {
                value: school.id,
                text: school.name,
              }
            }),
            values: [educationAdmin.education_school_id || ""],
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