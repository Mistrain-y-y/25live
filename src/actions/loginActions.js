import axios from 'axios'

export const loginRequest = (userData) => dispatch => {
  return axios.post('/api/login', userData)
}