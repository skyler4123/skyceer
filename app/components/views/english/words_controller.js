import { FreeDictionaryApi } from "../../../javascript/controllers/api/english/free_dictionary_api";
import ApplicationController from "../../../javascript/controllers/application_controller";
import { icon } from "../../../javascript/controllers/components";

export default class extends ApplicationController {
  static targets = ['input', 'submit', 'form', 'ipa']
  static values = {
    words: { type: Array, default: [] },
    ipas: { type: Array, default: [] },
  }

  init() {
    this.initHTML()
  }

  submit(event) {
    event.preventDefault()
    this.wordsValue = this.inputTarget.value.split(' ')
  }

  async wordsValueChanged(value, previousValue) {
    this.resetIpasValue()
    if (this.wordsValue.length === 0) { return }
    const ipas = []
    this.wordsValue.map((word, index) => {
      return FreeDictionaryApi.show({word: word}).then(response => {
        const { data } = response
        const ipa = data[0]['phonetic']
        ipas[index] = ipa
      })
    })
    setTimeout(() => {
      this.ipasValue = ipas
    }, 1000)
  }
  
  resetIpasValue() {
    this.ipasValue = []
  }

  ipasValueChanged(value, previousValue) {
    if (!this.isInitializedValue) { return }
    this.ipaTarget.innerHTML = this.ipasValue.join(' ')
  }

  initHTML() {
    const html = `
      <form data-action="submit->${this.identifier}#submit" data-${this.identifier}-target="form" class="flex flex-row justify-center items-center">
        <input data-${this.identifier}-target="input" type="text" name="word"/>
        <label data-${this.identifier}-target="submit">
          <input type="submit" class="hidden"/>
          ${icon({variant: ['outline', 'magnifying-glass']})}
        </label>
      </form>
      <div data-${this.identifier}-target="ipa"></div>
    `
    this.element.innerHTML = html
  }
}
