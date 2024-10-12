import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const EstateHousesApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/estate_houses`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  show({id, params, headers} = {}) {
    return axios.get(`${origin()}/estate_houses/${id}`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  create({params, headers} = {}) {
    return axios.post(`${origin()}/estate_houses`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}