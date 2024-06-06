import { link } from "../../../javascript/controllers/components"

export const nav = () => {
  return `
    <div>${link({label: 'Home', url: '/car_cars'})}</div>
    <div>${link({label: 'Sell', url: '/car_cars/new'})}</div>
  `
}