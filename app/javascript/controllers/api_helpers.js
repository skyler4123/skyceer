const ApiHelpers = {
  origin() {
    return window.location.origin
  },
  csrfToken() {
    return document.querySelector('meta[name="csrf-token"]').content
  },
  defaultHeaders() {
    return { 'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content, 'Accept': 'application/json' }
  },
}

export default ApiHelpers;