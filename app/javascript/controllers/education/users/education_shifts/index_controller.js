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
      <div ${Libs_Calendar_TuiController.identifier} >
      </div>
    `
  }
  // connect() {
  //   console.log("Hello, Stimulus!", this.element);
  // }
}
