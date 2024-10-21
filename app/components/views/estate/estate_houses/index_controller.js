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
    this.initMap()
    this.initCards()
    this.createEventBrige({fromElement: this.searchTarget, toElement: this.element, toAction: "listenFromSearch"})
  }

  initHTML() {
    const defaultHTML = `
      <div class="pb-24" data-controller="${this.searchControllerIdentifier()}" data-${this.identifier}-target="search"></div>
      <div class="w-5/6 h-[500px] rounded-2xl overflow-hidden" data-controller="${this.mapControllerIdentifier()}" data-${this.identifier}-target="map"></div>
      <div data-${this.identifier}-target="cards"></div>
    `
    this.mainTarget.innerHTML = defaultHTML
  }

  initHousesValue() {
    EstateHousesApi.index({params: this.queryParamsValue}).then(response => {
      let data = response.data
      this.housesValue = data
    }).catch(error => {
      console.log(error)
    })
  }

  initMap() {
    this.mapTarget.setAttribute(`data-${this.mapControllerIdentifier()}-points-value`, JSON.stringify(this.housesValue))
  }

  initCards() {
    let cardsHTML = this.housesValue.map((house) => {
      return `<div class="w-full" data-controller="${this.cardControllerIdentifier()}" data-${this.identifier}-target="card" data-${this.cardControllerIdentifier()}-house-value="${this.transferToValue(house)}"></div>`
    }).join('')
    this.cardsTarget.innerHTML = cardsHTML
  }

  housesValueChanged(value, previousValue) {
    if (value.length === 0) { return }

    this.initMap()
    this.initCards()
  }

  listenFromSearch(event) {
    this.queryParamsValue = event.detail.queryParams
  }

  queryParamsValueChanged(value, previousValue) {
    this.initHousesValue()
  }
  
  searchController() {
    return this.application.getControllerForElementAndIdentifier(this.searchTarget, this.searchControllerIdentifier())
  }

  mapController() {
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, this.mapControllerIdentifier())
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
        headerTarget: "flex flex-row w-full h-full",
        footerTarget: "flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2",
        mainTarget: "gap-y-10",
        mapTarget: "",
        searchTarget: "w-full h-full flex flex-row justify-start",
        cardsTarget: "w-full grid grid-cols-3 gap-4"
      }
    }
  }
}
