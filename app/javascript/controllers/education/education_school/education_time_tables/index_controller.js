import Education_EducationSchool_LayoutController from '../layout_controller';
import Education_Calendar_TuiController from '../../calendar/tui_controller';

export default class extends Education_EducationSchool_LayoutController {

  contentHTML() {
    return `
      <div
        data-controller="${Education_Calendar_TuiController.identifier}"
        data-${Education_Calendar_TuiController.identifier}-groups-value="${this.transferToValue(this.contentData())}" 
      >
      </div>
    `
  }
}
