import TableComponent from "../table_controller";

export default class extends TableComponent {

  get initHTML() {
    return `
      <thead class="${this.headClass}" data-${this.identifier}-target="head">
        <tr class="${this.headTrClass}" data-${this.identifier}-target="tr">
          <th class="${this.hClass}" data-${this.identifier}-target="h"></th>
          <th class="${this.hClass}" data-${this.identifier}-target="h"></th>
          <th class="${this.hClass}" data-${this.identifier}-target="h"></th>
          <th class="${this.hClass}">Student Name</th>
        </tr>
      </thead>
      <tbody class="${this.bodyClass}" data-${this.identifier}-target="body">
        ${this.body.map((row) => 
          `
            <tr class="${this.bodyTrClass}" data-${this.identifier}-target="tr">
              <td class="${this.dClass}" data-${this.identifier}-target="d"></td>
              <td class="${this.dClass}" data-${this.identifier}-target="d"></td>
              <td class="${this.dClass}" data-${this.identifier}-target="d"></td>
              <td class="${this.dClass}">Skyler</td>
            </tr>
          `
          ).join('')}
      </tbody>
    `
  }
}
