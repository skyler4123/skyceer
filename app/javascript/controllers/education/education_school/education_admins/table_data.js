export function tableData({educationAdmins, identifier} = {}) {
  // Tabulator expects an options object with data and columns
  return {
    data: educationAdmins.map((educationAdmin) => {
      return {
        ...educationAdmin,
        name: `
          <div
            class="cursor-pointer"
            data-action="click->${identifier}#openEditEducationAdminModal"
            data-${identifier}-education-admin-id-param="${educationAdmin.id}" 
          >
            ${educationAdmin.name}
          </div>
        `,
        school_name: `<div>${educationAdmin.education_school.name}</div>`,
      }
    }),
    columns: [
      {title:"Name", field: "name", formatter: "html"},
      {title: "School", field: "school_name", width: 150, formatter: "html"},
    ],
  }
}