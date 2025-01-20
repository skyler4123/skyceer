import "axios";
import { defaultHeaders } from "./api_helpers";

export const EducationExamsApi = {

  index({params, headers} = {}) {
    return axios.get(`/education_exams`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

}