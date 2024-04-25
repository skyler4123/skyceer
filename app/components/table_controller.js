import ApplicationController from "../javascript/controllers/application_controller";

export default class TableController extends ApplicationController {
  static targets = ['head', 'body', 'h', 'd', 'tr']
  static values = {
    ...super.values,
    head: { type: Array },
    body: { type: Array },
  }

  init() {
    this.initHTML()
    this.initValue()
  }

  initParams() {
    this.setParams({name: 'head', defaultValue: ['header 1', 'header 2', 'header 3']})
    this.setParams({name: 'body', defaultValue: [['1','2','3'], ['4','5','6'], ['7','8','9']]})
  }

  initHTML() {
    this.element.innerHTML = this.typeHTML
  }

  initValue() {
    this.headValue = this.headParams
    this.bodyValue = this.bodyParams
  }

  get typeHTML() {
    return `
      <thead class="${this.headClass}" data-${this.identifier}-target="head">
        <tr class="${this.headTrClass}" data-${this.identifier}-target="tr">
          <th class="${this.hClass}" data-${this.identifier}-target="h"></th>
          <th class="${this.hClass}" data-${this.identifier}-target="h"></th>
          <th class="${this.hClass}" data-${this.identifier}-target="h"></th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody class="${this.bodyClass}" data-${this.identifier}-target="body">
        ${this.bodyParams.map((row) => 
          `
            <tr class="${this.bodyTrClass}" data-${this.identifier}-target="tr">
              <td class="${this.dClass}" data-${this.identifier}-target="d"></td>
              <td class="${this.dClass}" data-${this.identifier}-target="d"></td>
              <td class="${this.dClass}" data-${this.identifier}-target="d"></td>
              <td>Online</td>
            </tr>
          `
          ).join('')}
      </tbody>

    `
  }

  headValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }

    this.hTargets.forEach((target, index) => {
      target.innerText = this.headValue[index]
    })
  }

  bodyValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }
    
    const newBodyData = this.bodyValue.flat(Infinity)
    this.dTargets.forEach((target, index) => {
      target.innerText = newBodyData[index]
    })
  }

  hideRow(rowIndex) {
    [rowIndex].flat().forEach((index) => {
      this.mergeClass(this.trTargets[index], 'hidden')
    })
  }

  showRow(rowIndex) {
    [rowIndex].flat().forEach((index) => {
      this.trTargets[index].classList.remove('hidden')
    })
  }

  hideColumn(columnIndex) {
    this.element.querySelectorAll('th').forEach((target) => {
      if (target.cellIndex === columnIndex) { this.mergeClass(target, 'hidden') }
    })
    this.element.querySelectorAll('td').forEach((target) => {
      if (target.cellIndex === columnIndex) { this.mergeClass(target, 'hidden') }
    })
  }

  showColumn(columnIndex) {
    this.element.querySelectorAll('th').forEach((target) => {
      if (target.cellIndex === columnIndex) { target.classList.remove('hidden') }
    })
    this.element.querySelectorAll('td').forEach((target) => {
      if (target.cellIndex === columnIndex) { target.classList.remove('hidden') }
    })
  }

}
