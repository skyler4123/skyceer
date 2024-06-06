import "axios";
import { defaultHeaders, origin } from "../base_api";

export const CarCarsApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin}/car_cars`, { params: params, headers: {...defaultHeaders, ...headers} })
  },

  show({id, params, headers} = {}) {
    return axios.get(`${origin}/car_cars/${id}`, { params: params, headers: {...defaultHeaders, ...headers} })
  },

  create({params, headers} = {}) {
    return axios.post(`${origin}/car_cars`, params, { headers: {...defaultHeaders, ...headers}})
  }

}