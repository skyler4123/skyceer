import { icon } from "../../../javascript/controllers/components"


export const Application_Logo = () => {
  return `
    <div>
      ${icon({variant: ["solid", "sparkles"], klass: "h-10 w-10 bg-red-500 text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"})}
    </div>
  `
}