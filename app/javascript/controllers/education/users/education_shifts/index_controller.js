import Education_LayoutController from "../../layout_controller";
import Libs_Calendar_TuiController from '../../../libs/calendar/tui_controller';
export default class extends Education_LayoutController {
  static targets = ["calendar", "index"]
  
  init() {
    this.initCalendar()
  }

  initCalendar() {
    this.indexTarget.innerHTML = this.calendarHTML()
  }

  calendarHTML() {
    
    return `
      <div
        class="w-full h-[700px]"
        data-controller="${Libs_Calendar_TuiController.identifier}"
        data-${Libs_Calendar_TuiController.identifier}-events-value="${this.transferToValue(this.contentData().education_shifts)}"
        data-${Libs_Calendar_TuiController.identifier}-groups-value="${this.transferToValue(this.contentData().education_classes)}"
      >
      </div>
    `
  }

}
