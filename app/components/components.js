export const Button = (options, children) => {
  return `
    <div class="hidden" data-controller="button-component " data-button-component-options-value='${JSON.stringify(options)}'>
      <button data-button-component-target="button">
        ${children
        ? children()
        : `<img class="w-64 h-40 object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""></img>`}
      </button>
    </div>
  `
}
