import "axios";


const origin = window.location.origin
const csrfToken = document.querySelector('meta[name="csrf-token"]').content
const defaultHeaders = { 'X-CSRF-Token': csrfToken, 'Accept': 'application/json' }

export const MapPointsApi = {
  index({params, headers} = {}) {
    return axios.get(`${origin()}/map_points`, { params: params, headers: {...defaultHeaders(), ...headers} })
  },
  create({params, headers} = {}) {
    return axios.post(`${origin()}/map_points`, params, { headers: {...defaultHeaders(), ...headers}})
  }

}