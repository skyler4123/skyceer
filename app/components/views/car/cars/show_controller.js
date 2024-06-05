import { CarCarsApi } from "../../../../javascript/controllers/api/car/car_cars_api";
import ApplicationController from "../../../../javascript/controllers/application_controller";
import { car } from "../car";
import { carLayout } from "../layout";

export default class extends ApplicationController {
  // static targets = ['search', 'map']
  // static values = {
  //   search: { type: Object, default: {} }
  // }

  async car() {
    const { data } = await CarCarsApi.show({id: this.carIdParams})
    return data
  }

  async init() {
    await this.initHTML()
  }

  async initHTML() {
    this.element.className = 'flex flex-col justify-center items-center w-full h-full'
    this.element.innerHTML =
      carLayout(
        `
          <main>
            <div class="mx-auto md:w-2/3 w-full flex">
              <div class="mx-auto">

              ${car(await this.car())}

            
              </div>
            </div>
          </main>
        `
      )
  }
  

}
