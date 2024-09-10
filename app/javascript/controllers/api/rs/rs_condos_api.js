import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const RsCondosApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/rs_condos`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  create({params, headers} = {}) {
    return axios.post(`${origin()}/rs_condos`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}