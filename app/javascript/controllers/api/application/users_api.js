import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const UsersApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/users`, { params: params, headers: {...defaultHeaders(), ...headers} })
  }

}