import "axios";
import { defaultHeaders, origin } from "../base_api";

export const VehicleBrandsApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin}/vehicle_brands`, { params: params, headers: {...defaultHeaders, ...headers} })
  }

}