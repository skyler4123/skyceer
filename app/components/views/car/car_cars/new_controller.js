// import { Controller } from "@hotwired/stimulus";
import { CarBrandsApi } from "../../../../javascript/controllers/api/car/car_brands_api";
import { CarCarsApi } from "../../../../javascript/controllers/api/car/car_cars_api";
import { CarStoresApi } from "../../../../javascript/controllers/api/car/car_stores_api";
import ApplicationController from "../../../../javascript/controllers/application_controller";
import { link } from "../../../../javascript/controllers/components";
import { footer } from "../footer";
import { form } from "../form";
import { header } from "../header";

export default class extends ApplicationController {
  static targets = ['header', 'main', 'footer', 'form', 'coordinateInput', 'brandInput', 'storeInput', 'map']

  init() {
    this.parentElement.className = 'w-full h-full'
    this.initHeader()
    this.initMain()
    this.initFooter()
  }

  initHeader() { this.headerTarget.innerHTML = header() }
  initFooter() { this.footerTarget.innerHTML = footer() }

  initMain() {
    this.mainTarget.innerHTML = `
      <div class="mx-auto md:w-2/3 w-full">
        <h1 class="font-bold text-4xl">New car car</h1>
        <div>
          ${form(this.identifier)}
          <div data-${this.identifier}-target="map" data-controller="libs--openlayers--point"></div>
        </div>
        ${link({label: 'Back to car cars', url: '/car_cars', klass: 'ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium'})}
      </div>

    `
    this.initForm()
  }

  initForm() {
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
    this.addAction(this.formTarget, `submit->${this.identifier}#submit`)
  }

  async submit(event) {
    event.preventDefault()
    let formData = new FormData(this.formTarget)
    const response = await CarCarsApi.create({params: formData})
    if (this.isSuccess(response)) {
      const id = response.data.id
      this.redirect(`/car_cars/${id}`)
    }
  }

  sync() {
    setTimeout(() => {
      this.coordinateInputTarget.value = this.mapController().pointValue.coordinates
    }, 300)
  }
  // initAction() {
  //   const observer = new MutationObserver(this.sync);
  //   observer.observe(this.mapTarget, { attributes: true });
  // }
  // sync(mutationList, observer) {
  //   for (const mutation of mutationList) {
  //    if (mutation.type === "attributes") {
  //       const { target, attributeName } = mutation
  //       try {
  //         const newCoordinates = JSON.parse(target.getAttribute(attributeName)).coordinates
  //         console.log(this)
  //       } catch(error) {}
  //     }
  //   }
  // };


  mapController() {
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, 'libs--openlayers--point')
  }


}
