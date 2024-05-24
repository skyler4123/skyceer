import "axios";
import { defaultHeaders, origin } from "../base_api";

export const CarBrandsApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin}/car_brands`, { params: params, headers: {...defaultHeaders, ...headers} })
  }

}