import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const EstateHotelsApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/estate_hotels`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  create({params, headers} = {}) {
    return axios.post(`${origin()}/estate_hotels`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}