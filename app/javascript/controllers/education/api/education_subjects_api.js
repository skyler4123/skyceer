import "axios";
import { defaultHeaders } from "./api_helpers";

export const EducationSubjectsApi = {

  index({params, headers} = {}) {
    return axios.get(`/education_subjects`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  education_class_id({params, headers} = {}) {
    return axios.get(`/education_subjects/education_class_id`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

}