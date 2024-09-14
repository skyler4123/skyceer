import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const VehicleStoresApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/vehicle_stores`, { params: params, headers: {...defaultHeaders(), ...headers} })
  }

}