export class BaseApi {
  // static where(params) {
  //   return new Promise((resolve, reject) => {
  //     fetch(`/api/v1/${this.resourceName}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         ...params.headers,
  //       },
  //       body: JSON.stringify(params),
  //     })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(data => resolve(data))
  //     .catch(error => reject(error));
  //   });
  // }
  // static find(id, params = {}) {
  //   return new Promise((resolve, reject) => {
  //     fetch(`/api/v1/${this.resourceName}/${id}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         ...params.headers,
  //       },
  //     })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(data => resolve(data))
  //     .catch(error => reject(error));
  //   });
  // }
  static index(params = {}) {
    return new Promise((resolve, reject) => {
      fetch(`/api/v1/${this.resourceName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...params.headers,
        },
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
  static show(id, params = {}) {
    return new Promise((resolve, reject) => {
      fetch(`/api/v1/${this.resourceName}/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...params.headers,
        },
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
  static create(params) {
    return new Promise((resolve, reject) => {
      fetch(`/api/v1/${this.resourceName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...params.headers,
        },
        body: JSON.stringify(params),
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
  static update(id, params) {
    return new Promise((resolve, reject) => {
      fetch(`/api/v1/${this.resourceName}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...params.headers,
        },
        body: JSON.stringify(params),
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
  static destroy(id, params = {}) {
    return new Promise((resolve, reject) => {
      fetch(`/api/v1/${this.resourceName}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...params.headers,
        },
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