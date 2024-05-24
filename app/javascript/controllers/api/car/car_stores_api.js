import "axios";
import { defaultHeaders, origin } from "../base_api";

export const CarStoresApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin}/car_stores`, { params: params, headers: {...defaultHeaders, ...headers} })
  }

}