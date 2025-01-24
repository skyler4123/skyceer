import "axios";
import { defaultHeaders } from "./api_helpers";

export const EducationScoreBoardsApi = {

  index({params, headers} = {}) {
    return axios.get(`/education_scoreboards`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  education_class_id({params, headers} = {}) {
    return axios.get(`/education_scoreboards/education_class_id`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  // show({id, params, headers} = {}) {
  //   return axios.get(`/education_schools/${educationSchoolId()}/education_categories/${id}`, { params: params, headers: {...defaultHeaders(), ...headers} })
  // },

  // create({params, headers} = {}) {
  //   return axios.post(`/education_schools/${educationSchoolId()}/education_categories`, params, { headers: {...defaultHeaders(), ...headers}})
  // }

}