
import { Button } from '../../components/components'
import ApplicationController from './application_controller'

export default class extends ApplicationController {
  initialize() {
    this.element.innerHTML = this.html
    console.log('<%=  %>')
  }
  // init() {
  //   console.log('Hello Skyler!')

  //   this.initializeComplete()
  // }

  get html() {
    return `

      ${Button({}, () => {
        return `
          <div>WWWWWWWWWWWWWWWWWWWWWWW</div>
        `
      }
        
      )}

    `
  }
  
}
