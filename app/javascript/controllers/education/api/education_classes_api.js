import "axios";
import { defaultHeaders } from "./api_helpers";

export const EducationClassesApi = {

  index({params, headers} = {}) {
    return axios.get(`/education_classes`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  // show({id, params, headers} = {}) {
  //   return axios.get(`/education_schools/${educationSchoolId()}/education_categories/${id}`, { params: params, headers: {...defaultHeaders(), ...headers} })
  // },

  // create({params, headers} = {}) {
  //   return axios.post(`/education_schools/${educationSchoolId()}/education_categories`, params, { headers: {...defaultHeaders(), ...headers}})
  // }

}