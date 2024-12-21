import "axios";
import { defaultHeaders, educationSchoolId } from "../api_helpers";

export const EducationSchools_EducationCategoryApi = {

  select({params, headers} = {}) {
    return axios.get(`/education_schools/${educationSchoolId()}/education_categories/select`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  // show({id, params, headers} = {}) {
  //   return axios.get(`/education_schools/${educationSchoolId()}/education_categories/${id}`, { params: params, headers: {...defaultHeaders(), ...headers} })
  // },

  // create({params, headers} = {}) {
  //   return axios.post(`/education_schools/${educationSchoolId()}/education_categories`, params, { headers: {...defaultHeaders(), ...headers}})
  // }

}