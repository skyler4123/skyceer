import "axios";
import ApiHelpers from "../../api_helpers";

const { origin, defaultHeaders } = ApiHelpers
export const ArticlePostsApi = {

  create({params, headers} = {}) {
    return axios.post(`${origin()}/article_posts`, params, { headers: {...defaultHeaders(), ...headers}})
  },

  update({id, params, headers} = {}) {
    return axios.put(`${origin()}/article_posts/${id}`, params, { headers: {...defaultHeaders(), ...headers}})
  },

  show({id, params, headers} = {}) {
    return axios.get(`${origin()}/article_posts/${id}`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

}