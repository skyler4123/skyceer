import { EstateHousesApi } from "../../../../javascript/controllers/api/estate/estate_houses_api";
import Views_Estate_LayoutController from "../layout_controller";

export default class extends Views_Estate_LayoutController {
  static targets = [...super.targets, "map", "search", "cards"]
  static values = {
    houses: { type: Array, default: [] }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  initMain() {
    this.initValues()
    this.initEstateHousesSearch()
    this.initEstateHousesIndexMap()
    this.initConnection()
    // this.initEstateHouseCards()
  }

  initValues() {
    EstateHousesApi.index().then(response => {
      let data = response.data
      this.housesValue = data
    }).catch(error => {
      console.log(error)
    })
  }

  housesValueChanged(value, previousValue) {
    if (value.length === 0) { return }
    this.initEstateHouseCards()
  }

  initEstateHousesSearch() {
    let searchControllerIdentifier = "views--estate--estate-houses--search"
    let openlayersHTML = `<div data-controller='${searchControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.searchTarget, openlayersHTML)
  }

  initEstateHousesIndexMap() {
    let openlayersControllerIdentifier = "views--estate--estate-houses--index-map"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.mapTarget, openlayersHTML)
  }

  initConnection() {
    this.createEventBrige({fromElement: this.searchTarget, toElement: this.mapTarget, toAction: "receiveFromSearch"})
  }

  initEstateHouseCards() {
    let cardsHTML = this.housesValue.map((house) => {
      return `<div class="w-full" data-controller="views--estate--estate-houses--card" data-views--estate--estate-houses--card-house-value="${this.transferToValue(house)}"></div>`
    }).join('')
    this.cardsTarget.innerHTML = cardsHTML
  }

  variantClass() {
    return {
      default: {
        element: '',
        mainTarget: "gap-y-10",
        mapTarget: "w-full",
        searchTarget: "",
        cardsTarget: "w-full grid grid-cols-3 gap-4"
      }
    }
  }
}
