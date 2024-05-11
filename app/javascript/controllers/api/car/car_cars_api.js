import "axios";
import { defaultHeaders, origin } from "../base_api";

export const CarCarsApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin}/car_cars`, { params: params, headers: {...defaultHeaders, ...headers} })
  }

}