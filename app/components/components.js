export const Button = (options, children) => {
  return `
    "<button class="hidden" data-controller="button-component " data-button-component-options-value='${JSON.stringify(options)}'>
      ${children ? children() : ``}
    </button>"
  `
}

export const Accordion = (options, children) => {
  return `
    <div class="hidden" data-controller="accordion-component" data-accordion-component-options-value='${JSON.stringify(options)}'>
      <div data-accordion-component-target="content">
        ${children ? children() : ''}
      </div>
    </div>
  `
}