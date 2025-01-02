import "axios";
import { defaultHeaders } from "./api_helpers";

export const EducationCoursesApi = {

  education_school_id({params, headers} = {}) {
    return axios.get(`/education_courses/education_school_id`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

}