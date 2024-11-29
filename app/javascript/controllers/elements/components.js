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
    case 'form':
      tag = 'form'
      break;
    case 'editorjs':
        tag = 'form'
        break;
    default:
      tag = 'div'
  }

  switch(name) {
    case 'accordion':
      return `
        <${tag}
        data-controller="${name}"
        data-${name}-params-value='${JSON.stringify(params)}'
        >
          <div data-${name}-target="overflow">
            ${content ? content() : ``}
          </div>
        </${tag}>
      `
    case 'hr': case 'input':
      return `<${tag} data-controller="${name}" data-${name}-params-value='${JSON.stringify(params)}'>`
    case 'modal':
      return `
        <${tag} data-controller="${name}" data-${name}-params-value='${JSON.stringify(params)}'>
          <div data-${name}-target="background"></div>
          <div data-${name}-target="content">
            ${content ? content() : ``}
          </div>
        </${tag}>
      `
    case 'editorjs':
      return `
        <${tag} data-controller="libs--${name}" data-libs--${name}-params-value='${JSON.stringify(params)}'>
          ${content ? content() : ``}
        </${tag}>
      `
    case 'img':
      return `
        <${tag}
          data-controller="${name}"
          data-${name}-params-value='${JSON.stringify(params)}'
          loading="lazy"
        >
          ${content ? content() : ``}
        </${tag}>
      `
    default:
      return `
        <${tag}
          data-controller="${name}"
          data-${name}-params-value='${JSON.stringify(params)}'
        >
          ${content ? content() : ``}
        </${tag}>
      `
  }
}

export default Components;

export const Accordion = (params = {}, content = null) => {
  return Components('accordion', params, content)
}
export const Box = (params = {}, content = null) => {
  return Components('box', params, content)
}
export const Button = (params = {}, content = null) => {
  return Components('button', params, content)
}
export const Carousel = (params = {}, content = null) => {
  return Components('carousel', params, content)
}
export const Hr = (params = {}, content = null) => {
  return Components('hr', params, content)
}
export const Icon = (params = {}, content = null) => {
  return Components('icon', params, content)
}
export const Img = (params = {}, content = null) => {
  return Components('img', params, content)
}
export const Input = (params = {}, content = null) => {
  return Components('input', params, content)
}
export const Link = (params = {}, content = null) => {
  return Components('link', params, content)
}
export const List = (params = {}, content = null) => {
  return Components('list', params, content)
}
export const Mockup = (params = {}, content = null) => {
  return Components('mockup', params, content)
}
export const Modal = (params = {}, content = null) => {
  return Components('modal', params, content)
}
export const Popover = (params = {}, content = null) => {
  return Components('popover', params, content)
}
export const Ratio = (params = {}, content = null) => {
  return Components('ratio', params, content)
}
export const Select = (params = {}, content = null) => {
  return Components('select', params, content)
}
export const Skeleton = (params = {}, content = null) => {
  return Components('skeleton', params, content)
}
export const Tab = (params = {}, content = null) => {
  return Components('tab', params, content)
}
export const Text = (params = {}, content = null) => {
  return Components('text', params, content)
}
export const Toast = (params = {}, content = null) => {
  return Components('toast', params, content)
}
export const Video = (params = {}, content = null) => {
  return Components('video', params, content)
}
export const Form = (params = {}, content = null) => {
  return Components('form', params, content)
}
export const Editorjs = (params = {}, content = null) => {
  return Components('editorjs', params, content)
}








export const BoxChat = ({chatUserId, chatConversationId}) => {
  return `<div data-controller="views--chat--box" data-views--chat--box-chat-user-id-value="${chatUserId}" data-views--chat--box-chat-conversation-id-value="${chatConversationId}"></div>`
}