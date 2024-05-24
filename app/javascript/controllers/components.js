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

export const accordion = (params = {}, content = null) => {
  return Components('accordion', params, content)
}
export const box = (params = {}, content = null) => {
  return Components('box', params, content)
}
export const button = (params = {}, content = null) => {
  return Components('button', params, content)
}
export const carousel = (params = {}, content = null) => {
  return Components('carousel', params, content)
}
export const hr = (params = {}, content = null) => {
  return Components('hr', params, content)
}
export const icon = (params = {}, content = null) => {
  return Components('icon', params, content)
}
export const img = (params = {}, content = null) => {
  return Components('img', params, content)
}
export const input = (params = {}, content = null) => {
  return Components('input', params, content)
}
export const link = (params = {}, content = null) => {
  return Components('link', params, content)
}
export const list = (params = {}, content = null) => {
  return Components('list', params, content)
}
export const mockup = (params = {}, content = null) => {
  return Components('mockup', params, content)
}
export const modal = (params = {}, content = null) => {
  return Components('modal', params, content)
}
export const popover = (params = {}, content = null) => {
  return Components('popover', params, content)
}
export const ratio = (params = {}, content = null) => {
  return Components('ratio', params, content)
}
export const select = (params = {}, content = null) => {
  return Components('select', params, content)
}
export const skeleton = (params = {}, content = null) => {
  return Components('skeleton', params, content)
}
export const tab = (params = {}, content = null) => {
  return Components('tab', params, content)
}
export const text = (params = {}, content = null) => {
  return Components('text', params, content)
}
export const toast = (params = {}, content = null) => {
  return Components('toast', params, content)
}
export const video = (params = {}, content = null) => {
  return Components('video', params, content)
}