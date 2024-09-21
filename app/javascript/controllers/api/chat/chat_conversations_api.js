import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const ChatConversationsApi = {

  show({id, params, headers} = {}) {
    return axios.get(`${origin()}/chat_conversations/${id}`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  box({params, headers} = {}) {
    return axios.get(`${origin()}/chat_conversations/box`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },
}