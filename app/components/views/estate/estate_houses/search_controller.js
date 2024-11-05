import "choices"
import country from 'country-list-js';

import { Button, Popover, Link, Box } from "../../../../javascript/controllers/components";
import FormController from "../../../form_controller";

export default class extends FormController {
  static targets = ["addressLevel2Input", 'addressLevel3Input', 'priceFromInput', 'priceToInput']
  static values = {
    country: { type: String, default: "" },
    city: { type: String, default: "" },
  }

  init() {
    this.initHTML()
    super.init()
    // this.choicesCountry = new Choices(this.countryTarget, {
    //   classNames: {
    //     containerOuter: ['choices w-full']
    //   }
    // });
    // this.choicesCity = new Choices(this.cityTarget, {
    //   classNames: {
    //     containerOuter: ['choices w-full']
    //   },
    // });
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  // countryChanged(event) {
  //   this.countryValue = event.detail.value
  //   const provinces = country.findByIso2(this.countryValue).provinces
  //   if (this.isUndefined(provinces)) { return }
  //   const provincesChoices = provinces.map((province) => ({...province, value: province.name, label: province.name}))
  //   this.choicesCity.setValue(provincesChoices);
  // }

  defaultHTML() {
    return `      
      <div role="text-and-button" class="flex flex-row">
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input name="full_text" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Price cents" />
        </div>
        <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>Search
        </button>
      </div>
      <div role="select-box" class="flex flex-row">
        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected disabled>Address Level 1</option>
        </select>
        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected disabled>Address Level 2</option>
        </select>
        <select data-placeholder="This is a placeholder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected disabled>Choose a category</option>
        </select>
      </div>
    `
  }

}
