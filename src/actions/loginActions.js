import axios from 'axios'
import {
  CHANGE_TO_LOGGED,
  CHANGE_TO_LOADING
} from '../constants'
import withToken from '../utils/withToken'
import jwtDecode from 'jwt-decode'

export const changeToLogged = userData => ({// {_id:'', user: ''}
  type: CHANGE_TO_LOGGED,
  userData
})

export const changeToLoading = () => ({
  type: CHANGE_TO_LOADING
})

export const loginRequest = (userData) => dispatch => {
  dispatch(changeToLoading)
  return axios.post('/api/login', userData)
    .then(res => {
      const token = res.data
      sessionStorage.setItem("token", token)// 保存 token 到 sessionStorage
      withToken(token)
      // 设置 token 到公共请求头, 让每次请求都携带这个请求头
      dispatch(changeToLogged(jwtDecode(token)))
      dispatch(changeToLoading)
    })
}



