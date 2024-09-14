import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const ChatMessagesApi = {

  create({params, headers} = {}) {
    return axios.post(`${origin()}/chat_messages`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}