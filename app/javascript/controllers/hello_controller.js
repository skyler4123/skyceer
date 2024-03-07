
import { Button } from '../../components/components'
// import ApplicationController from './application_controller'

// export default class extends ApplicationController {
import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  initialize() {
    console.log(crypto, crypto.randomUUID())
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
