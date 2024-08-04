import "axios";
import ApiHelpers from "../api_helpers";

const { origin, defaultHeaders } = ApiHelpers
export const ReviewArticlesApi = {

  create({params, headers} = {}) {
    return axios.post(`${origin()}/calendar_events`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}