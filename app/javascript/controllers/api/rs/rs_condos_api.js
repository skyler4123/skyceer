import "axios";
import ApiHelpers from "../api_helpers";

const { origin, defaultHeaders } = ApiHelpers

export const RsCondosApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/rs_condos`, { params: params, headers: {...defaultHeaders(), ...headers} })
  }

}