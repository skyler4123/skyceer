import "axios";
import { EstateHousesApi } from "../../../../javascript/controllers/api/estate/estate_houses_api";
import ApplicationController from "../../../../javascript/controllers/application_controller";
import { defaultHeaders, origin } from "../../../../javascript/controllers/api/api_helpers";

export default class extends ApplicationController {
  static targets = ["form", "longitudeInput", "latitudeInput"]

  init() {
    this.initForm()
  }

  initForm() {
    this.element.innerHTML = this.formHTML()
  }

  async submit(event) {
    event.preventDefault()
    let formData = this.formData({formElement: this.formTarget})
    let response = await EstateHousesApi.create({params: formData})
    this.handleResponse({response: response, resource: "estate_houses"})
  }
  







  formData({formElement}) {
    let formData = new FormData(formElement)
    let formDataObject = {}
    for (var pair of formData.entries()) {
      formDataObject[pair[0]] = pair[1]
    }   
    return formDataObject
  }

  formHTML() {
    return `
      <form class="contents" action="/estate_houses" accept-charset="UTF-8" method="post" data-${this.identifier}-target="form" data-action="submit->${this.identifier}#submit">

        <div class="my-5">
          <label for="name">Name</label>
          <input class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="name" id="name">
        </div>

        <div class="my-5">
          <label for="address">Address</label>
          <input class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="address" id="address">
        </div>

        <div class="my-5">
          <label for="price_cents">Price cents</label>
          <input class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="number" name="price_cents" id="price_cents">
        </div>

        <div class="my-5">
          <label for="longitude">Longitude</label>
          <input data-${this.identifier}-target="longitudeInput" class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="longitude" id="longitude">
        </div>

        <div class="my-5">
          <label for="latitude">Latitude</label>
          <input data-${this.identifier}-target="latitudeInput" class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="latitude" id="latitude">
        </div>

        <div class="inline">
          <input type="submit" name="commit" value="Create Estate House" class="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer" data-disable-with="Create Estate House">
        </div>
      </form>
    `
  }
}
