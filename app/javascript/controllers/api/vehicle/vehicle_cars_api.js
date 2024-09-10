import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const VehicleCarsApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin}/vehicle_cars`, { params: params, headers: {...defaultHeaders, ...headers} })
  },

  show({id, params, headers} = {}) {
    return axios.get(`${origin}/vehicle_cars/${id}`, { params: params, headers: {...defaultHeaders, ...headers} })
  },

  create({params, headers} = {}) {
    return axios.post(`${origin}/vehicle_cars`, params, { headers: {...defaultHeaders, ...headers}})
  }

}