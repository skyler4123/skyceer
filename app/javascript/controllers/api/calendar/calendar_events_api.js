import "axios";
import { defaultHeaders, origin } from "../api_helpers";

export const ReviewArticlesApi = {

  create({params, headers} = {}) {
    return axios.post(`${origin()}/calendar_events`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}