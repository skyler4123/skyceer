import Views_Estate_LayoutController from "../layout_controller";

export default class extends Views_Estate_LayoutController {
  static targets = [...super.targets, "newForm", "newMap"]

  initParams() {
    // this.setParams({name: 'viewZoom', defaultValue: 4})
  }
  
  initMain() {
    this.initNewForm()
    this.initNewMap()
    // this.initEstateHousesNewMap()
  }

  initNewForm() {
    this.mergeAttributesHTML(this.newFormTarget, `data-controller="form"`)
  }
  
  initNewMap() {
    this.mergeAttributesHTML(this.newMapTarget, `data-controller="${this.newMapIdentifier()}"`)
  }

  initAction() {
    this.addAction(this.newFormTarget, `keydown->${this.identifier}#syncFromFormToMap`)
    this.addAction(this.newMapTarget, `click->${this.identifier}#syncFromMapToForm`)
  }

  syncFromFormToMap(event) {
    setTimeout(() => {
      console.log(this.newFormController().formValue)
      const { "estate_house[longitude]": longitude, "estate_house[latitude]": latitude } = this.newFormController().formValue
      this.newMapController().pointValue = {...this.newMapController().pointValue, longitude: longitude, latitude: latitude}
    }, 1000)
  }

  syncFromMapToForm(event) {
    setTimeout(() => {
      const { longitude, latitude } = this.newMapController().pointValue
      console.log(longitude, latitude)
      this.newFormController().formValue = {...this.newFormController().formValue, "estate_house[longitude]": longitude, "estate_house[latitude]": latitude}
    }, 1000)
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
