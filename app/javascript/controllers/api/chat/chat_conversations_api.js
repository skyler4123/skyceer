import "axios";
import { defaultHeaders, origin } from "../base_api";

export const ChatConversationsApi = {

  show({id, params, headers} = {}) {
    return axios.get(`${origin}/chat_conversations/${id}`, { params: params, headers: {...defaultHeaders, ...headers} })
  }

}