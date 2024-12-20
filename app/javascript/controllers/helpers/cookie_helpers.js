export const CookieHelpers = {
  getCookie(name) {
    const value = `; ${decodeURIComponent(document.cookie)}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  },

  id() {
    return this.getCookie('id')
  },

  email() {
    return this.getCookie('email')
  },

  name() {
    return this.getCookie('name').replace("+", " ")
  },

  sessionId() {
    return this.getCookie('session_id')
  },
  avatar() {
    return this.getCookie('avatar')
  },
  educationRole() {
    return this.getCookie('education_role')
  },
  educationSchoolId() {
    return this.getCookie('education_school_id')
  },
  educationRole() {
    return this.getCookie('education_role')
  },
  navigationName() {
    return this.getCookie('navigation_name')
  },
  navigationId() {
    return this.getCookie('navigation_id')
  },
  navigationUrl() {
    return this.getCookie('navigation_url')
  },

}