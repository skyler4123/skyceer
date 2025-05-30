import { camelCaseToUnderscore } from "controllers/education/helpers/data_helpers";
export class BaseApi {
  static get resourceName() {
    return camelCaseToUnderscore(this.name.replace('Api', ''))
  }

  static defaultHeaders() {
    const csrfToken = document.querySelector('meta[name="csrf-token"]');
    return {
      'X-CSRF-Token': csrfToken ? csrfToken.content : '',
      'Accept': 'application/json',
    }
  }

  static index({params = {}, headers = {}} = {}) {
    return new Promise((resolve, reject) => {
      fetch(`/${this.resourceName}`, {
        method: 'GET',
        headers: {
          ...this.defaultHeaders(),
          ...headers,
        },
        params: new URLSearchParams(params).toString(),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }
}
