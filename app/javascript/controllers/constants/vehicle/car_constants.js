import { Honda } from "./honda"
import { Peugeot } from "./peugeot"
import { Tesla } from "./tesla"

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