export const button = (options, children) => {
  return `
    <div class="hidden" data-controller="button-component " data-button-component-options-value='${JSON.stringify(options)}'>
      <button data-button-component-target="button"></button>
      ${children ? children() : ``}
    </div>
  `
}

export const accordion = (options, children) => {
  return `
    <div class="hidden" data-controller="accordion-component" data-accordion-component-options-value='${JSON.stringify(options)}'>
      <div data-accordion-component-target="content">
        ${children ? children() : ''}
      </div>
    </div>
  `
}