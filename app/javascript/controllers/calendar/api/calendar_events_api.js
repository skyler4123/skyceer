import "axios";
import { defaultHeaders, origin } from "../../api_helpers";

export const CalendarEventsApi = {

  index({params, headers} = {}) {
    return axios.get(`${origin()}/calendar_events`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

  create({params, headers} = {}) {
    return axios.post(`${origin()}/calendar_events`, params, { headers: {...defaultHeaders(), ...headers}})
  },

  calendar_group_id({params, headers} = {}) {
    return axios.get(`${origin()}/calendar_events/calendar_group_id`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },

}