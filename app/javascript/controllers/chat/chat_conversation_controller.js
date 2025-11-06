import ApplicationController from "controllers/application_controller"


export default class Chat_ChatConversationController extends ApplicationController {
  static targets = ["message"]

  initialize() {
    this.initInterval()
  }

  initInterval() {
    setInterval(() => {
      console.log("scanning...")
      const templateElements = this.element.querySelectorAll("template")
      if (templateElements) {
        templateElements.forEach(templateElement => {
          const templateContent = templateElement.innerHTML
          const [nosqlUserId, content] = templateContent.split(this.delimiter())
          templateElement.insertAdjacentHTML("afterend", this.messageHTML(nosqlUserId, content));
          templateElement.remove();
        })
      }
    }, 1000)
  }

  // app/packages/chat/models/chat_message.rb
  delimiter() {
    return "@@@"
  }

  messageHTML(nosqlUserId, content) {
    return `
       <div data-${this.identifier}-target="message">${content}</div>
     `
  }

}