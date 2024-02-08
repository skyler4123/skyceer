
import { accordion, button } from '../../components/components';
import Api from './api';
import ApplicationController from './application_controller'
export default class extends ApplicationController {
  initialize() {
    // console.log("Hello, Stimulus!", this.element);
    // const api = new Api()
    // const res = api.calendar_schedules.get({headers: {}})

    // res.then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })

    console.log(Api)

  }
  
}
