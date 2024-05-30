import "axios";
import { defaultHeaders, origin } from "../base_api";

export const ChatUsersApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin}/chat_users`, { params: params, headers: {...defaultHeaders, ...headers} })
  }

}