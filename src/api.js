import axios from 'axios'

// Recipes
export default {
  get: url => {
    return axios.get(url)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  post: (url, data) => {
    return axios.post(url, data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  put: (url, data) => {
    return axios.put(url, data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error))
  },
  delete: url => {
    return axios.delete(url)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error))
  }
}
