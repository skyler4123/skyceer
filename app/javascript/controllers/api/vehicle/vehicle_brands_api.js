import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const VehicleBrandsApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin}/vehicle_brands`, { params: params, headers: {...defaultHeaders, ...headers} })
  }

}