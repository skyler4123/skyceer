import "axios";
import ApiHelpers from "../api_helpers";

const { origin, defaultHeaders } = ApiHelpers

export const SessionsApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/sessions`, { params: params, headers: {...defaultHeaders(), ...headers} })
  }

}