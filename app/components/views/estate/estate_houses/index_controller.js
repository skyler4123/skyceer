import { EstateHousesApi } from "../../../../javascript/controllers/api/estate/estate_houses_api";
import Views_Estate_LayoutController from "../layout_controller";

export default class extends Views_Estate_LayoutController {
  static targets = [...super.targets, "map", "search", "cards", "card"]
  static values = {
    houses: { type: Array, default: [] },
    queryParams: { type: Object, default: {} }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  initMain() {
    this.initHTML()
    this.initHousesValue()
    this.createEventBrige({fromElement: this.searchTarget, toElement: this.element, toAction: "listenFromSearch"})
  }

  initHTML() {
    const defaultHTML = `
      <div data-controller="${this.searchControllerIdentifier()}" data-${this.identifier}-target="search"></div>
      <div data-controller="${this.mapControllerIdentifier()}" data-${this.identifier}-target="map"></div>
      <div data-${this.identifier}-target="cards"></div>
    `
    this.element.innerHTML = defaultHTML
  }

  initHousesValue() {
    EstateHousesApi.index({params: this.queryParamsValue}).then(response => {
      let data = response.data
      this.housesValue = data
    }).catch(error => {
      console.log(error)
    })
  }

  listenFromSearch(event) {
    this.queryParamsValue = event.detail.queryParams
  }

  searchController() {
    return this.application.getControllerForElementAndIdentifier(this.searchTarget, this.searchControllerIdentifier())
  }

  mapController() {
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, this.mapControllerIdentifier())
  }

  housesValueChanged(value, previousValue) {
    setTimeout(() => {
      if (value.length === 0) { return }
      this.mapController().pointsValue = value
  
      let cardsHTML = value.map((house) => {
        return `<div class="w-full" data-controller="${this.cardControllerIdentifier()}" data-${this.identifier}-target="card" data-${this.cardControllerIdentifier()}-house-value="${this.transferToValue(house)}"></div>`
      }).join('')
      this.cardsTarget.innerHTML = cardsHTML
    }, 2000)

  }

  queryParamsValueChanged(value, previousValue) {
    this.initHousesValue()
  }

  searchControllerIdentifier() {
    return "views--estate--estate-houses--search"
  }

  mapControllerIdentifier() {
    return "views--estate--estate-houses--index-map"
  }

  cardControllerIdentifier() {
    return "views--estate--estate-houses--card"
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
