import axios from 'axios'
import {
  CHANGE_TO_LOGGED,
  CHANGE_TO_LOADING,
  SHOW_LOGIN_PAGE,
  HIDE_LOGIN_PAGE
} from '../constants'
import withToken from '../utils/withToken'
import jwtDecode from 'jwt-decode'

export const changeToLogged = userData => ({
  type: CHANGE_TO_LOGGED,
  userData
})

export const changeToLoading = () => ({
  type: CHANGE_TO_LOADING
})

// 登录请求
export const loginRequest = (userData) => dispatch => {
  dispatch(changeToLoading())
  return axios.post('/api/login', userData)
    .then(res => {
      const token = res.data
      sessionStorage.setItem("token", token) // 保存 token 到 sessionStorage
      withToken(token)
      // 设置 token 到公共请求头, 让每次请求都携带这个请求头
      console.log(jwtDecode(token))
      dispatch(changeToLogged(jwtDecode(token)))
      dispatch(changeToLoading())
    }, err => {
      dispatch(changeToLoading())
    })
}

// 请求详情页面
export const detailRequest = name => dispatch => {
  dispatch(changeToLoading())
  return axios.get(`/api/home/${name}`)
    .then(res => {
      dispatch(changeToLoading())
      return res
    }, err => {
      dispatch(changeToLoading())
      return err
    })
}

export const showLoginPage = () => ({
  type: SHOW_LOGIN_PAGE
})

export const hideLoginPage = () => ({
  type: HIDE_LOGIN_PAGE
})

// 请求 shopList
export const shopList = () => dispatch => {
  dispatch(changeToLoading())
  return axios.get('/api/shop')
    .then(res => {
      dispatch(changeToLoading())
      return res
    }, err => {
      dispatch(changeToLoading())
      return err
    })
}
