import { EstateHousesApi } from "../../../../javascript/controllers/api/estate/estate_houses_api";
import Views_Estate_LayoutController from "../layout_controller";

export default class extends Views_Estate_LayoutController {
  static targets = [...super.targets, "newForm", "newMap"]

  initParams() {
    // this.setParams({name: 'viewZoom', defaultValue: 4})
  }
  
  initMain() {
    this.initNewForm()
    this.initNewMap()
    this.initValueCallback()
  }

  initNewForm() {
    this.mergeAttributesHTML(this.newFormTarget, `data-controller="form"`)
  }
  
  initNewMap() {
    this.mergeAttributesHTML(this.newMapTarget, `data-controller="${this.newMapIdentifier()}"`)
  }

  initValueCallback() {
    setTimeout(() => {
      this.newFormController().formValueCallback = () => {
        this.syncFromFormToMap()
      }
      this.newMapController().pointValueCallback = () => {
        this.syncFromMapToForm()
      }
      this.newFormController().submitValueCallback = (value, previousValue) => {
        EstateHousesApi.create({params: this.newFormController().formData()}).then(response => {
          const responseData = response.data
          this.redirectTo(responseData.url)
        }).catch(error => {
          console.log(error)
        })
      }
    }, 1000)
  }

  syncFromFormToMap() {
    const { "estate_house[address][longitude]": longitude, "estate_house[address][latitude]": latitude } = this.newFormController().formValue
    this.newMapController().pointValue = {...this.newMapController().pointValue, longitude: Number(longitude), latitude: Number(latitude)}
  }

  syncFromMapToForm() {
    const { longitude, latitude } = this.newMapController().pointValue
    this.newFormController().formValue = {...this.newFormController().formValue, "estate_house[address][longitude]": Number(longitude), "estate_house[address][latitude]": Number(latitude)}
  }

  newMapIdentifier() {
    return "libs--map--openlayers--new"
  }
  newFormIdentifier() {
    return "form"
  }
  newMapController() {
    return this.application.getControllerForElementAndIdentifier(this.newMapTarget, this.newMapIdentifier())
  }

  newFormController() {
    return this.application.getControllerForElementAndIdentifier(this.newFormTarget, this.newFormIdentifier())
  }
}
