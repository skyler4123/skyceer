const Components = (name, options = {}, content = null) => {
  let tag = ''
  switch(name) {
    case 'button':
      tag = 'button'
      break;
    case 'hr':
      tag = 'hr'
      break;
    case 'icon':
      tag = 'svg'
      break;
    case 'img':
      tag = 'img'
      break;
    case 'input':
      tag = 'input'
      break;
    case 'link':
      tag = 'a'
      break;
    case 'list':
      tag = 'ol'
      break;
    case 'select':
      tag = 'select'
      break;
    case 'table':
      tag = 'table'
      break;
    case 'video':
      tag = 'video'
      break;
    default:
      tag = 'div'
  }

  switch(name) {
    case 'accordion':
      return `
        <${tag}
        class="hidden"
        data-controller="${name}"
        data-${name}-options-value='${JSON.stringify(options)}'
        >
          <div data-${name}-target="overflow">
            ${content ? content() : ``}
          </div>
        </${tag}>
      `
    case 'hr': case 'img': case 'input':
      return `<${tag} class="hidden" data-controller="${name}" data-${name}-options-value='${JSON.stringify(options)}'>`
    default:
      return `
        <${tag}
          class="hidden"
          data-controller="${name}"
          data-${name}-options-value='${JSON.stringify(options)}'
        >
          ${content ? content() : ``}
        </${tag}>
      `
  }
}

export default Components;
