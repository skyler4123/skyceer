import { ChatConversationsApi } from "../../../javascript/controllers/api/chat/chat_conversations_api";
import { ChatMessagesApi } from "../../../javascript/controllers/api/chat/chat_messages_api";
import { ChatUsersApi } from "../../../javascript/controllers/api/chat/chat_users_api";
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ['message', 'chatMessages', 'input']
  // static values = {
  //   users: { type: Object, default: {} }
  // }

  initParams() {
    this.setParams({ name: 'variant', defaultValue: 'default' })
  }

  get variantClass() {
    return {
      default: {
        element: 'w-fit h-fit'
      }
    }
  }

  init() {
    this.initChatUsers().then(() => {
      if (!this.chatUserIds().includes(this.chatUserIdParams)) {
        this.element.innerHTML = ''
        console.log('This chat user does not belongs to this chat conversation!')
        return
      }
      this.initChatMessages()
      this.initHTML()
      this.initEvent()
    })

  }

  initEvent() {
    addEventListener("turbo:before-stream-render", ((event) => {
      if (event.target.target !== this.conversationIdParams) { return }
      
      const fallbackToDefaultActions = event.detail.render
      event.detail.render = (streamElement) => {
        const template = streamElement.querySelector('template')
        try {
          const [chatUserId, content] = JSON.parse(template.innerHTML)
          template.innerHTML = this.newChatMessageHTML({chatUserId: chatUserId, messageContent: content})
        } catch(error) {}
        fallbackToDefaultActions(streamElement)
        this.chatMessagesTarget.scrollTo(0, this.chatMessagesTarget.scrollHeight)
      }
    }))
  }

  getAvatarByChatUserId(chatUserId) {
    const chatUser = this.chatUsers.find(chatUser => chatUser.id === chatUserId)
    return chatUser.avatar
  }

  initChatUsers() {
    return ChatUsersApi.index({params: { 'chat_conversation_id': this.conversationIdParams }}).then(response => {
      const chatUsersData = response.data
      this.chatUsers = chatUsersData
    })
  }

  initChatMessages() {
    ChatConversationsApi.show({id: this.conversationIdParams}).then(response => {
      const messagesData = response.data
      messagesData.messages.forEach(message => {
        this.chatMessagesTarget.insertAdjacentHTML('beforeend', this.newChatMessageHTML({chatUserId: message.chat_user_id, messageContent: message.content}))
      })
      this.chatMessagesTarget.scrollTo(0, this.chatMessagesTarget.scrollHeight) 
    })
  }

  createChatMessage(event) {
    ChatMessagesApi.create({params: {
      chat_conversation_id: this.conversationIdParams,
      content: this.inputTarget.value
    }})
    this.inputTarget.value = ''
    this.inputTarget.focus()
  }

  chatUserIds() {
    return this.pluck({object: this.chatUsers, key: 'id'})
  }

  isHostChatUser(chatUserId) {
    return chatUserId === this.chatUserIdParams
  }

  isGuessChatUser(chatUserId) {
    return !this.isHostChatUser(chatUserId)
  }

  newChatMessageHTML({chatUserId, messageContent}) {
    return `
      <div
        ${this.isHostChatUser(chatUserId) ? "dir='rtl'" : "dir='ltr'"}
        class="flex flex-row items-end justify-center w-full h-fit gap-x-2"
        data-${this.identifier}-target="message"
        data-chat-user-id="${chatUserId}"
      >
        <img
          class="w-6 h-6 rounded-full"
          src="${this.getAvatarByChatUserId(chatUserId)}"
        >
        <div class="w-full px-4 py-2 rounded-lg inline-block bg-gray-300 rtl:bg-blue-600 text-gray-600 rtl:text-white">${messageContent}</div>
      </div>
    `
  }

  initHTML() {
    this.element.innerHTML = `
    <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col w-[400px] h-[500px] border-2 rounded-md">
      <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div class="relative flex items-center space-x-4">
          <div class="relative">
              <span class="absolute text-green-500 right-0 bottom-0">
                <svg width="20" height="20">
                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                </svg>
              </span>
          <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full">
          </div>
          <div class="flex flex-col leading-tight">
              <div class="text-2xl mt-1 flex items-center">
                <span class="text-gray-700 mr-3">Anderson Vanhron</span>
              </div>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
          </button>
        </div>
      </div>

      <div data-${this.identifier}-target="chatMessages" id="${this.conversationIdParams}" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      </div>

      <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div class="relative flex">
            <span class="absolute inset-y-0 flex items-center">
            <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
            </span>
            <input data-${this.identifier}-target='input' data-action="keydown.enter->${this.identifier}#createChatMessage" type="text" placeholder="Write your message!" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3">
            <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">

                <button data-action="click->${this.identifier}#createChatMessage" type="button" class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
            </div>
          </div>
      </div>

    </div>
    `
  }
}
