export const origin = () => {
  return window.location.origin
}

export const csrfToken = () => {
  return document.querySelector('meta[name="csrf-token"]').content
}

export const defaultHeaders = () => {
  return { 'X-CSRF-Token': csrfToken(), 'Accept': 'application/json' }
}
