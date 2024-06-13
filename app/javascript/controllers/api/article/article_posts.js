import "axios";
import ApiHelpers from "../../api_helpers";

const { origin, defaultHeaders } = ApiHelpers
export const ArticlePostsApi = {

  create({params, headers} = {}) {
    return axios.post(`${origin()}/article_posts`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}