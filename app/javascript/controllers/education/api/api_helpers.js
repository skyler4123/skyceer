export const origin = () => {
  return window.location.origin
}

export const csrfToken = () => {
  return document.querySelector('meta[name="csrf-token"]').content
}

export const defaultHeaders = () => {
  return { 'X-CSRF-Token': csrfToken(), 'Accept': 'application/json' }
}

// export const educationSchoolId = () => {
//   const urlObject = new URL(window.location.href)
//   const pathname = urlObject.pathname
//   const splitedPathname = pathname.split("/")
//   const educationSchoolsIndex = splitedPathname.indexOf("education_schools")
//   const educationSchoolIdIndex = educationSchoolsIndex + 1
//   return splitedPathname[educationSchoolIdIndex]
// }