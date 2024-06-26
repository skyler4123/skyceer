export const CookieHelpers = {
  getCookie(name) {
    const value = `; ${decodeURIComponent(document.cookie)}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  },
  
  email() {
    return this.getCookie('email')
  },

  name() {
    return this.getCookie('name')
  },

  sessionId() {
    return this.getCookie('session_id')
  }
}