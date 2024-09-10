import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const ChatUsersApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin}/chat_users`, { params: params, headers: {...defaultHeaders, ...headers} })
  }

}