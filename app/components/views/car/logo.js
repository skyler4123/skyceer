import { icon } from "../../../javascript/controllers/components"

export const carLogo = () => {
  return `
    <div>${icon({variant: ['outline', 'truck']})}</div>
    <div>Skycarr</div>
  `
}