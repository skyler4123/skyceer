import { Link } from "../../../javascript/controllers/components"

export const nav = () => {
  return `
    <div>${Link({label: 'Home', url: '/vehicle_cars'})}</div>
    <div>${Link({label: 'Sell', url: '/vehicle_cars/new'})}</div>
  `
}