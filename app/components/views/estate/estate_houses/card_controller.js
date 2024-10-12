import { EstateHousesApi } from "../../../../javascript/controllers/api/estate/estate_houses_api";
import ApplicationController from "../../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ['carousel', 'title', 'description', 'user', 'status']
  static values = {
    ...super.values,
    houseId: { type: String, default: ""},
    house: { type: Object, default: {} }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  houseIdValueChanged(value, previousValue) {
    if (value.length === 0) { return }

    EstateHousesApi.show({id: value}).then(response => {
      console.log(response.data)
      this.houseValue = response.data
    }).catch(error => {
      console.log(error)
      this.houseValue = {}
    })
  }

  houseValueChanged(value, previousValue) {
    this.cleanHTML()
    if (this.isEmpty(value)) { return }

    this.initHouse()
  }

  cleanHTML() {
    this.element.innerHTML = ""
  }
  
  initHouse() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = `
      <div>
        <div data-controller="libs--carousel--swiper--navigation" data-libs--carousel--swiper--navigation-params-value="${this.transferToValue({imageUrls: this.houseValue.image_urls})}"></div>
      </div>
      <div>
        <div>${this.houseValue.name}</div>
        <div>${this.houseValue.session.name}</div>
        <div>$${this.houseValue.price_cents/100}</div>
      </div>
    `
  }

  variantClass() {
    return {
      default: {
        element: ''
      }
    }
  }
}
