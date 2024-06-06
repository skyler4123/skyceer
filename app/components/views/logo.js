import { icon } from "../../javascript/controllers/components"

export const logo = () => {
  return `
    <div>${icon({variant: ['outline', 'truck']})}</div>
    <div>Skycarr</div>
  `
}