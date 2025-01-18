import "axios";
import { defaultHeaders } from "./api_helpers";

export const EducationTeachersApi = {

  index({params, headers} = {}) {
    return axios.get(`/education_teachers`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

}