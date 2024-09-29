import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const EstateHomesApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/estate_homes`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  create({params, headers} = {}) {
    return axios.post(`${origin()}/estate_homes`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}