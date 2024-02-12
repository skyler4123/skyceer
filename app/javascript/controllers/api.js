import "axios";

const origin = window.location.origin
const csrfToken = document.querySelector('meta[name="csrf-token"]').content
const defaultHeaders = { 'X-CSRF-Token': csrfToken, 'Content-Type': 'application/json' }

const Api = {
  calendar_schedules: {
    get: ({params, headers} = {}) => {
      return axios.get(`${origin}/calendar_schedules`, { params: params, headers: {...defaultHeaders, headers} })
    },
    post: ({params, headers} = {}) => {
      return axios.post(`${origin}/calendar_schedules`, params, defaultHeaders)
    },
  },
  calendar_events: {
    get: ({params, headers} = {}) => {
      return axios.get(`${origin}/calendar_events`, { params: params, headers: {...defaultHeaders, headers} })
    },
    post: ({params, headers} = {}) => {
      return axios.post(`${origin}/calendar_events`, params, { headers: { 'X-CSRF-Token': csrfToken, 'Content-Type': 'application/json' }, withCredentials: true } )
    },
  },
}

export default Api;