import "axios";
import { defaultHeaders, origin } from "../base_api";

export const VehicleStoresApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin}/vehicle_stores`, { params: params, headers: {...defaultHeaders, ...headers} })
  }

}