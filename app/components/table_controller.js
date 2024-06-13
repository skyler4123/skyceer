import ApplicationController from "../javascript/controllers/application_controller";

export default class TableController extends ApplicationController {
  static targets = ['thead', 'tbody', 'th', 'td', 'tr']
  static values = {
    ...super.values,
    head: { type: Array },
    body: { type: Array },
    rowIndex: { type: Array },
    columnIndex: { type: Array },
  }

  init() {
    this.initHTML()
    this.initValue()
  }

  initParams() {
    this.setParams({name: 'head', defaultValue: ['Default Header 1', 'Default Header 2', 'Default Header 3', 'Default Header 4']})
    this.setParams({name: 'body', defaultValue: [['1','2','3', '3.1'], ['4','5','6', '6.1'], ['7','8','9', '9.1']]})
    this.rowIndexValue = this.range({to: this.bodyParams.length})
  }
  
  initValue() {
    this.headValue = this.headParams
    this.bodyValue = this.bodyParams
  }

  initHTML() {
    const html = `
      <thead class="${this.headClass}" data-${this.identifier}-target="thead">
        <tr class="${this.headTrClass}" data-${this.identifier}-target="tr">
          <th class="${this.hClass}" data-${this.identifier}-target="th"></th>
          <th class="${this.hClass}" data-${this.identifier}-target="th"></th>
          <th class="${this.hClass}" data-${this.identifier}-target="th"></th>
          <th>Status</th>
          <th class="${this.hClass}" data-${this.identifier}-target="th"></th>
        </tr>
      </thead>
      <tbody class="${this.bodyClass}" data-${this.identifier}-target="tbody">
        ${this.bodyValue.map((row) => 
          `
            <tr class="${this.bodyTrClass}" data-${this.identifier}-target="tr">
              <td class="${this.dClass}" data-${this.identifier}-target="td"></td>
              <td class="${this.dClass}" data-${this.identifier}-target="td"></td>
              <td class="${this.dClass}" data-${this.identifier}-target="td"></td>
              <td>Online</td>
              <td class="${this.dClass}" data-${this.identifier}-target="td"></td>
            </tr>
          `
          ).join('')}
      </tbody>
    `
    this.element.innerHTML = html
  }

  headValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }

    this.thTargets.forEach((target, index) => {
      target.innerText = this.headValue[index]
    })
  }

  bodyValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }
    
    const newBodyData = this.bodyValue.flat(Infinity)
    this.tdTargets.forEach((target, index) => {
      target.innerText = newBodyData[index]
    })
  }

  rowIndexValueChanged(value, previousValue) {
    if (!this.isInitializedValue) { return }

    let newBodyValue = []
    this.rowIndexValue.forEach((newIndex, previousIndex) => {
      newBodyValue[newIndex] = this.bodyValue[previousIndex]
    })
    this.bodyValue = newBodyValue
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

  getColumnByIndex(index) {
    let selectedColumn = this.tdTargets.filter(target => target.cellIndex === index)
    return selectedColumn.map(target => target.innerText)
  }
}
