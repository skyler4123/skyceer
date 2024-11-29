import dayjs from 'dayjs'
import ApplicationController from "../application_controller";

export default class extends ApplicationController {

  initParams() {
    this.setParams({name: 'timeFormat', defaultValue: 'HH:mm:ss'})
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    setInterval(() => {
      this.element.innerHTML = dayjs().format(this.timeFormatParams)
    }, 1000)
  }

}
