import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const RsHotelsApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/rs_hotels`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  create({params, headers} = {}) {
    return axios.post(`${origin()}/rs_hotels`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}