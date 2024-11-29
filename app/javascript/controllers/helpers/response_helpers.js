import { origin } from "../api/api_helpers";

const ResponseHelpers = {
  redirectTo(url) {
    // window.location.href = url;
    window.location.replace(url)
  },

  isStatusOk(response) {
    return response.status === 200 || response.statusText === "Ok"
  },

  isStatusCreated(response) {
    return response.status === 201 || response.statusText === "Created"
  },
  
  handleResponse({response, resource}) {
    if (this.isStatusOk(response)) {
      let id = response.data.id
      this.redirectTo(origin() + "/" + resource + "/" + id)
    } else if (this.isStatusCreated(response)) {
      let id = response.data.id
      this.redirectTo(origin() + "/" + resource + "/" + id)
    }
  }

}



export default ResponseHelpers;