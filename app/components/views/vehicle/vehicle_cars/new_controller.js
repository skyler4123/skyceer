import { VehicleCarsApi } from "../../../../javascript/controllers/api/vehicle/vehicle_cars_api";
import { VehicleStoresApi } from "../../../../javascript/controllers/api/vehicle/vehicle_stores_api";
import ApplicationController from "../../../../javascript/controllers/application_controller";
import { Link } from "../../../../javascript/controllers/components";
import { CarConstants } from "../../../../javascript/controllers/constants/vehicle/car_constants";
import { footer } from "../footer";
import { form } from "../form";
import { header } from "../header";

export default class extends ApplicationController {
  static targets = ['header', 'main', 'footer', 'form', 'coordinateInput', 'brandInput', 'modelInput', 'versionInput', 'storeInput', 'map']
  static values = {
    ...super.values,
    brand: { type: String },
    model: { type: String },
    coordinates: { type: Array }
  }

  init() {
    this.element.className = 'w-full h-full'
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
          ${Form(this.identifier)}
          <div data-${this.identifier}-target="map" data-controller="libs--openlayers--point"></div>
        </div>
        ${Link({label: 'Back to car cars', url: '/vehicle_cars', klass: 'ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium'})}
      </div>
    `
    this.initForm()
  }

  initForm() {
    CarConstants.carBrands().forEach(brand => {
      this.appendChildFromHTML({element: this.brandInputTarget, html: `<option value='${brand}'>${brand}</option>`})
    })
    this.brandValue = this.brandInputTarget.value

    VehicleStoresApi.index().then(response => {
      const storesData = response.data
      storesData.forEach(store => {
        this.appendChildFromHTML({element: this.storeInputTarget, html: `<option data-${this.identifier}-coordinates-param='${JSON.stringify(store.coordinates)}' data-action='click->${this.identifier}#changeStore' value='${store.id}'>${store.name}</option>`})
      })
    })
  }

  initAction() {
    this.addAction(this.mapTarget, `click->${this.identifier}#setCoordinates`)
    this.addAction(this.formTarget, `submit->${this.identifier}#submit`)
    this.addAction(this.brandInputTarget, `change->${this.identifier}#changeBrand`)
    this.addAction(this.modelInputTarget, `change->${this.identifier}#changeModel`)
  }

  changeStore(event) {
    console.log('jashkjaf')
    const coordinates = event.params.coordinates
    this.coordinateInputTarget.value = coordinates
    this.mapController().pointValue = [parseInt(coordinates[0]), parseInt(coordinates[1])]
  }

  changeBrand(event) {
    this.brandValue = this.brandInputTarget.value
  }

  changeModel(event) {
    this.modelValue = this.modelInputTarget.value
  }

  brandValueChanged(value, previousValue) {
    if (!this.isInitializedValue) { return }
    this.modelInputTarget.innerHTML = ''
    CarConstants.carModels(this.brandValue).forEach(model => {
      this.appendChildFromHTML({element: this.modelInputTarget, html: `<option value='${model}'>${model}</option>`})
    })
    this.modelValue = this.modelInputTarget.value              
  }

  modelValueChanged(value, previousValue) {
    if (!this.isInitializedValue) { return }
    this.versionInputTarget.innerHTML = ''
    CarConstants.carVersions(this.brandValue, this.modelValue).forEach(version => {
      this.appendChildFromHTML({element: this.versionInputTarget, html: `<option value='${version}'>${version}</option>`})
    })               
  }

  async submit(event) {
    event.preventDefault()
    let formData = new FormData(this.formTarget)
    const response = await VehicleCarsApi.create({params: formData})
    if (this.isSuccess(response)) {
      const id = response.data.id
      this.redirectTo(`/vehicle_cars/${id}`)
    }
  }

  setCoordinates() {
    setTimeout(() => {
      this.coordinateInputTarget.value = this.mapController().pointValue
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
