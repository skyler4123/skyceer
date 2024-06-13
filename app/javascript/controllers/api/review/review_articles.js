import "axios";
import ApiHelpers from "../../api_helpers";

const { origin, defaultHeaders } = ApiHelpers
export const ReviewArticlesApi = {

  create({params, headers} = {}) {
    return axios.post(`${origin()}/review_articles`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}