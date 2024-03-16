export const Button = (options, children) => {
  return `
    "<button class="hidden" data-controller="button" data-button-options-value='${JSON.stringify(options)}'>
      ${children ? children() : ``}
    </button>"
  `
}

export const Accordion = (options, children) => {
  return `
    <div class="hidden" data-controller="accordion" data-accordion-options-value='${JSON.stringify(options)}'>
      <div data-accordion-target="content">
        ${children ? children() : ''}
      </div>
    </div>
  `
}