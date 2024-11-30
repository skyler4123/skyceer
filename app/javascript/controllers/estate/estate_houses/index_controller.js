import { EstateHousesApi } from "../../api/estate/estate_houses_api";
import Estate_LayoutController from "../layout_controller";

export default class extends Estate_LayoutController {
  static targets = [...super.targets, "map", "search", "cards", "card"]
  static values = {
    houses: { type: Array, default: [] },
    queryParams: { type: Object, default: {} }
  }

  initMain() {
    this.initHTML()
    this.initMap()
    this.initCards()
    this.initConnectionBetweenController()
    this.initHousesValue()
  }

  initHTML() {
    const defaultHTML = `
      <form class="w-full h-full flex flex-col px-10" data-controller="${this.searchControllerIdentifier()}" data-${this.identifier}-target="search"></form>
      <div class="w-5/6 h-[500px] rounded-2xl overflow-hidden" data-controller="${this.mapControllerIdentifier()}" data-${this.identifier}-target="map"></div>
      <div class="w-5/6 grid grid-cols-3 gap-4" data-${this.identifier}-target="cards"></div>
    `
    this.mainTarget.innerHTML = defaultHTML
  }

  initHousesValue() {
    EstateHousesApi.index({params: this.queryParamsValue}).then(response => {
      let data = response.data
      let dataWithCoordinates = data.map((house) => ({...house, longitude: house.address.longitude, latitude: house.address.latitude}))
      this.housesValue = dataWithCoordinates
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

  initConnectionBetweenController() {
    setTimeout(() => {
      this.searchController().submitValueCallback = (value, previousValue) => {
        this.queryParamsValue = value
      }
    }, 1000)
  }

  housesValueChanged(value, previousValue) {
    if (this.isUndefined(previousValue)) { return }

    this.initMap()
    this.initCards()
  }

  queryParamsValueChanged(value, previousValue) {
    if (this.isUndefined(previousValue)) { return }
    this.initHousesValue()
  }
  
  searchController() {
    return this.application.getControllerForElementAndIdentifier(this.searchTarget, this.searchControllerIdentifier())
  }

  mapController() {
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, this.mapControllerIdentifier())
  }

  searchControllerIdentifier() {
    return "estate--estate-houses--search"
  }

  mapControllerIdentifier() {
    return "estate--estate-houses--index-map"
  }

  cardControllerIdentifier() {
    return "estate--estate-houses--card"
  }

}
