import ApplicationController from "../application_controller"

export default class extends ApplicationController {

  initParams() {
    this.setParams({ name: 'variant', defaultValue: 'default' })
    this.setParams({ name: 'id', defaultValue: 'chat_boxes' })
  }

  init() {
    this.initId()
    this.initEvent()
  }

  initId() {
    this.element.id = this.idParams
  }

  initEvent() {
    document.addEventListener("turbo:before-stream-render", ((event) => {
      if (event.target.target !== this.idParams) { return }

      const chatboxControllers = this.getChildrenControllersFromIdentifier('views--chat--box')
      const conversationIds = this.pluck({object: chatboxControllers, key: 'conversationIdParams'})
      const fallbackToDefaultActions = event.detail.render
      event.detail.render = (streamElement) => {
        const template = streamElement.querySelector('template')
        const params = template.content.firstElementChild.dataset['views-Chat-BoxParamsValue']
        try {
          const conversationIdFromServer = JSON.parse(params)['conversation_id']
          if (!conversationIds.includes(conversationIdFromServer)) {
            fallbackToDefaultActions(streamElement)
          }
        } catch(error) {}
      }
    }))

  }

  variantClass() {
    return {
      default: {
        element: 'flex flex-row-reverse w-fit h-fit fixed bottom-0 right-0'
      }
    }
  }

}
