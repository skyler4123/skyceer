import { ChatConversationsApi } from "./api/chat/chat_conversations_api"
import { ChatUsersApi } from "./api/chat/chat_users_api"
import ApplicationController from "./application_controller"
import { boxChat, icon } from "./components"

export default class ChatController extends ApplicationController {
  static targets = ["trigger", "boxese", "box", "closeButton", "chatMessages", "input", "send"]
  static values = {
    ...super.values,
    hostChatUserId: { type: String, default: "" },
    chatConversationId: { type: Array, default: [] },
    guestChatUserId: { type: Array, default: [] },
  }

  initParams() {
    this.setParams({ name: 'variant', defaultValue: 'default' })
    // this.setParams({ name: 'id', defaultValue: 'chat_boxes' })
  }

  init() {
    this.initTarget()
    this.initHTML()
  }

  initTarget() {
    this.element.querySelectorAll(`[data-${this.identifier}-guest-chat-user-id-param]`).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'trigger')
    })
  }

  initHTML() {
    this.element.insertAdjacentHTML("beforeend", this.boxeseHTML())
    // this.boxeseTarget.innerHTML = this.boxHTML()
  }

  initAction() {
    this.triggerTargets.forEach((target) => {
      this.addAction(target, `click->${this.identifier}#addGuestChatUserId`)
    })
  }

  addGuestChatUserId(event) {
    if (this.hostChatUserIdValue.length < 1) { this.initHostChatUserIdValue() }
    this.guestChatUserIdValue = this.unique([...this.guestChatUserIdValue, event.params.guestChatUserId])
  }

  removeGuestChatUserId(event) {
    this.guestChatUserIdValue = this.removeFromArray({array: this.guestChatUserIdValue, item: event.params.guestChatUserId})
  }

  async initHostChatUserIdValue() {
    let response = await ChatUsersApi.host()
    this.hostChatUserIdValue = response.data.host._id
  }

  guestChatUserIdValueChanged(value, previousValue) {
    if (value.length < 1) { return }
    let addedGuestChatUserId = this.difference(value, previousValue)['add'][0]
    let subtractedGuestChatUserId = this.difference(value, previousValue)['subtract'][0]

    if (addedGuestChatUserId) {
      this.addChatBox({guestChatUserId: addedGuestChatUserId})
    }
  }

  async addChatBox({guestChatUserId}) {
    let response = await ChatConversationsApi.box({params: {guest_chat_user_id: guestChatUserId}})
    let chatUserId = response.data.chat_user_id
    let chatConversationId = response.data.id
    this.chatConversationIdValue = [...this.chatConversationIdValue, chatConversationId]
    this.boxeseTarget.insertAdjacentHTML("beforeend", boxChat({chatUserId: chatUserId, chatConversationId: chatConversationId}))
  }

  openChatBox(event) {
    console.log(event.target)

  }

  // chatConversationIdValueChanged(value, previousValue) {
  //   if (value.length < 1) { return }
  //   let addedChatConversationId = this.difference(value, previousValue)['add'][0]

  //   if (addedChatConversationId) {
  //     this.boxeseTarget.insertAdjacentHTML("beforeend", boxChat({chatConversationId: addedChatConversationId}))
  //   }
  // }









  variantClass() {
    return {
      default: {
        element: "z-50",
        triggerTarget: "cursor-pointer",
        boxeseTarget: 'flex flex-row-reverse w-fit h-[700px] fixed bottom-0 right-0'
      }
    }
  }

  boxeseHTML() {
    return `
      <div data-${this.identifier}-target="boxese"></div>
    `
  }

  boxHTML({guestChatUserId}) {
    return `
      <div data-${this.identifier}-target="box" data-${this.identifier}-guest-chat-user-id-param="${guestChatUserId}" class="flex flex-col w-[400px] h-full border-2 rounded-md">
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
                  <span class="text-gray-700 mr-3">Group name</span>
                </div>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <button data-${this.identifier}-target="closeButton" data-action="click->${this.identifier}#removeGuestChatUserId" data-${this.identifier}-guest-chat-user-id-param="${guestChatUserId}" type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
              ${icon({variant: ['outline', 'x-mark'], klass: 'w-5 h-5 fill-blue-950'})}
            </button>
          </div>
        </div>

        <div data-${this.identifier}-target="chatMessages" id="conversationIdParam" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
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