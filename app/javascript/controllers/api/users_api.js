import "axios";
import ApiHelpers from "../api_helpers";

const { origin, defaultHeaders } = ApiHelpers

export const UsersApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/users`, { params: params, headers: {...defaultHeaders(), ...headers} })
  }

}