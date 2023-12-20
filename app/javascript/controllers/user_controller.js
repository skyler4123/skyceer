import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    header: { type: Array, default: ['header 1', 'header 2', 'header 3'] },
    body: { type: Array, default: [['1','2','3'], ['4','5','6'], ['7','8','9']] }
  }
  connect() {
    // console.log('User Controller')
  }
  initialize() {
    // console.log(this.table())
  }
  table() {
    return `
    <table class="bg-red-500">
  <tr>
    <th>${this.headerValue[0]}</th>
    <th>${this.headerValue[1]}</th>
    <th>${this.headerValue[2]}</th>
  </tr>
    ${this.bodyValue.map((row) => 
      `
      <tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
      <td>${row[2]}</td>
    </tr>
      `
      ).join('')}
      <div>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
</table>
<div>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</div>
    `
  }
}
