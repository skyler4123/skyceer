import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const EstateCondosApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/estate_condos`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  create({params, headers} = {}) {
    return axios.post(`${origin()}/estate_condos`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}