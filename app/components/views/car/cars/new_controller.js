// import { Controller } from "@hotwired/stimulus";
import { CarBrandsApi } from "../../../../javascript/controllers/api/car/car_brands_api";
import { CarStoresApi } from "../../../../javascript/controllers/api/car/car_stores_api";
import ApplicationController from "../../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ['coordinateInput', 'brandInput', 'storeInput', 'map']

  init() {
    this.addClass(this.brandInputTarget, "block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full")
    CarBrandsApi.index().then(response => {
      const brandsData = response.data
      brandsData.forEach(brand => {
        this.appendChildFromHTML({element: this.brandInputTarget, html: `<option value='${brand.id}'>${brand.name}</option>`})
      })
    })

    this.addClass(this.storeInputTarget, "block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full")
    CarStoresApi.index().then(response => {
      const storesData = response.data
      storesData.forEach(store => {
        this.appendChildFromHTML({element: this.storeInputTarget, html: `<option value='${store.id}'>${store.name}</option>`})
      })
    })
  }

  initAction() {
    this.addAction(this.mapTarget, `click->${this.identifier}#sync`)
  }

  sync() {
    setTimeout(() => {
      this.coordinateInputTarget.value = this.mapController().pointValue.coordinates
    }, 300)
  }

  mapController() {
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, 'libs--openlayers--point')
  }
}
