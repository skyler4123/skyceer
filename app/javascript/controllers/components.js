const Components = (name, params = {}, content = null) => {
  let tag
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
        data-${name}-params-value='${JSON.stringify(params)}'
        >
          <div data-${name}-target="overflow">
            ${content ? content() : ``}
          </div>
        </${tag}>
      `
    case 'hr': case 'img': case 'input':
      return `<${tag} class="hidden" data-controller="${name}" data-${name}-params-value='${JSON.stringify(params)}'>`
    case 'modal':
      return `
        <${tag} class="hidden" data-controller="${name}" data-${name}-params-value='${JSON.stringify(params)}'>
          <div data-${name}-target="background"></div>
          <div data-${name}-target="content">
            ${content ? content() : ``}
          </div>
        </${tag}>
      `
    default:
      return `
        <${tag}
          class="hidden"
          data-controller="${name}"
          data-${name}-params-value='${JSON.stringify(params)}'
        >
          ${content ? content() : ``}
        </${tag}>
      `
  }
}

export default Components;
