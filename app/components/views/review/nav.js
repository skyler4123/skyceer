import { link } from "../../../javascript/controllers/components"

export const nav = () => {
  return `
    <div>${link({label: 'Home', url: '/vehicle_cars'})}</div>
    <div>${link({label: 'Sell', url: '/vehicle_cars/new'})}</div>
  `
}