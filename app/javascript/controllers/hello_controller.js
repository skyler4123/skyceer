
import { accordion, button } from '../../components/components';
import Api from './api';
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
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
