import "axios";

const origin = window.location.origin
const csrfToken = document.querySelector('meta[name="csrf-token"]').content
const defaultHeaders = { 'X-CSRF-Token': csrfToken, 'Content-Type': 'application/json' }

const Api = () => {
  return {
    calendar_schedules: {
      get: ({params, headers} = {}) => {
        axios.get(`${origin}/calendar_schedules`, { params: params, headers: {...defaultHeaders, headers} })
      },
      post: ({params, headers} = {}) => {
        axios.post(`${origin}/calendar_schedules`, params, defaultHeaders)
      },
    },
    calendar_events: {
      get: ({params, headers} = {}) => {
        axios.get(`${origin}/calendar_events`, { params: params, headers: {...defaultHeaders, headers} })
      },
      post: ({params, headers} = {}) => {
        console.log(defaultHeaders)
        axios.post(`${origin}/calendar_events`, params, { headers: { 'X-CSRF-Token': csrfToken, 'Content-Type': 'application/json' }, withCredentials: true } )
      },
    },
  }
}

export default Api;