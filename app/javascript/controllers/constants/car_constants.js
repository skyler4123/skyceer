import { Honda } from "./car/honda"
import { Peugeot } from "./car/peugeot"
import { Tesla } from "./car/tesla"

export const CarConstants = {
  brands() {
    return {
      Tesla: Tesla,
      Honda: Honda,
      Peugeot: Peugeot,
    }
  },

  carBrands() {
    return Object.keys(CarConstants.brands())
  },
  carModels(carBrand) {
    return Object.keys(CarConstants.brands()[carBrand])
  },
  carVersions(carBrand, carModel) {
    return Object.keys(CarConstants.brands()[carBrand][carModel])
  },

}