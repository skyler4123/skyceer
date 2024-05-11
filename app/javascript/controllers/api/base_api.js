export const origin = window.location.origin
export const csrfToken = document.querySelector('meta[name="csrf-token"]').content
export const defaultHeaders = { 'X-CSRF-Token': csrfToken, 'Content-Type': 'application/json' }