import { EstateHousesApi } from "../../api/estate/estate_houses_api";
import ApplicationController from "../../application_controller";
import { Link } from "../../elements/components";

export default class extends ApplicationController {
  static targets = ['carousel', 'title', 'description', 'user', 'status']
  static values = {
    ...super.values,
    houseId: { type: String, default: ""},
    house: { type: Object, default: {} }
  }

  houseIdValueChanged(value, previousValue) {
    if (value.length === 0) { return }

    EstateHousesApi.show({id: value}).then(response => {
      console.log(response.data)
      this.houseValue = response.data
    }).catch(error => {
      this.houseValue = {}
      console.log(error.message)
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
      <div class="w-full h-5/6 rounded-xl overflow-hidden">
        <div
          data-controller="libs--carousel--swiper--navigation" data-libs--carousel--swiper--navigation-params-value="${this.transferToValue({imageUrls: this.houseValue.image_urls})}"
        >
        </div>
      </div>
      <div class="h-1/6">
        <div>${Link({label: this.houseValue.name, url: `/estate_houses/${this.houseValue.id}`})}</div>
        <div>${Link({label: this.houseValue.user.name, url: `/users/${this.houseValue.user.id}`})}</div>
        <div>$${this.houseValue.price_cents/100}</div>
      </div>
    `
  }

}
