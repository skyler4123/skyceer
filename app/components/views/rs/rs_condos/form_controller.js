import "axios";
import { RsCondosApi } from "../../../../javascript/controllers/api/rs/rs_condos_api";
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
    let response = await RsCondosApi.create({params: formData})
    console.log(response)
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
      <form class="contents" action="/rs_condos" accept-charset="UTF-8" method="post" data-${this.identifier}-target="form" data-action="submit->${this.identifier}#submit">

        <div class="my-5">
          <label for="rs_condo_name">Name</label>
          <input class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="rs_condo[name]" id="rs_condo_name">
        </div>

        <div class="my-5">
          <label for="rs_condo_address">Address</label>
          <input class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="rs_condo[address]" id="rs_condo_address">
        </div>

        <div class="my-5">
          <label for="rs_condo_price_cents">Price cents</label>
          <input class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="number" name="rs_condo[price_cents]" id="rs_condo_price_cents">
        </div>

        <div class="my-5">
          <label for="rs_condo_longitude">Longitude</label>
          <input data-${this.identifier}-target="longitudeInput" class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="rs_condo[longitude]" id="rs_condo_longitude">
        </div>

        <div class="my-5">
          <label for="rs_condo_latitude">Latitude</label>
          <input data-${this.identifier}-target="latitudeInput" class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="rs_condo[latitude]" id="rs_condo_latitude">
        </div>

        <div class="inline">
          <input type="submit" name="commit" value="Create Rs condo" class="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer" data-disable-with="Create Rs condo">
        </div>
      </form>
    `
  }
}
