// 让每个请求都携带 token
import axios from 'axios'

const withToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `token ${token}`
  } else {
    delete axios.defaults.headers['Authorization']
  }
}

export default withToken