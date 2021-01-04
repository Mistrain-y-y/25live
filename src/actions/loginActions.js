import axios from 'axios'
import {
  CHANGE_TO_LOGGED,
  CHANGE_TO_LOADING,
  SHOW_LOGIN_PAGE,
  HIDE_LOGIN_PAGE,
  USER_COLLECTS,
  CHANGE_TO_LOADED
} from '../constants'
import withToken from '../utils/withToken'
import jwtDecode from 'jwt-decode'

export const changeToLogged = userData => ({
  type: CHANGE_TO_LOGGED,
  userData
})

// loading
export const changeToLoading = () => ({
  type: CHANGE_TO_LOADING
})

// loaded
export const changeToLoaded = () => dispatch => (
  dispatch({
    type: CHANGE_TO_LOADED
  })
)

// 登录请求
export const loginRequest = (userData) => dispatch => {
  dispatch(changeToLoading())
  return axios.post('/api/login', userData)
    .then(res => {
      const token = res.data
      sessionStorage.setItem("token", token) // 保存 token 到 sessionStorage
      withToken(token)
      // 设置 token 到公共请求头, 让每次请求都携带这个请求头
      dispatch(changeToLogged(jwtDecode(token)))
    }, err => {
      return err
    })
}

// 请求 home 首页数据
export const homeData = () => dispatch => {
  dispatch(changeToLoading())
  return axios.get('/api/home')
    .then(res => {
      console.log('hhh')
      return res
    }, err => {
      return err
    })
}

// 请求 home 详情页面
export const detailRequest = name => dispatch => {
  dispatch(changeToLoading())
  return axios.get(`/api/home/${name}`)
    .then(res => {
      return res
    }, err => {
      return err
    })
}

export const showLoginPage = () => ({
  type: SHOW_LOGIN_PAGE
})

export const hideLoginPage = () => ({
  type: HIDE_LOGIN_PAGE
})

// 请求 shopList 信息
export const shopList = () => dispatch => {
  dispatch(changeToLoading())
  return axios.get('/api/shop')
    .then(res => {
      return res
    }, err => {
      return err
    })
}

// 请求 shopDetail 详情信息
export const shopDetail = id => dispatch => {
  dispatch(changeToLoading())
  return axios.get(`/api/shop/detail/${id}`)
    .then(res => {
      return res
    }, err => {
      return err
    })
}

// 请求 mine 页面用户信息
export const mineMsg = () => dispatch => {
  dispatch(changeToLoading())
  return axios.get(`/api/mine`)
    .then(res => {
      return res
    }, err => {
      return err
    })
}

// 请求 life 页面数据
export const lifeList = () => dispatch => {
  dispatch(changeToLoading())
  return axios.get('/api/life')
    .then(res => {
      return res
    }, err => {
      return err
    })
}

// redux 保存用户收藏数据
export const userCollects = (collectArr) => ({
  type: USER_COLLECTS,
  collectArr
})

// 请求 collection 数据
export const collections = username => dispatch => {
  dispatch(changeToLoading())
  return axios.get(`/api/mine/collect/${username}`)
    .then(res => {
      dispatch(userCollects(res.data.collectId))
      return res
    }, err => {
      return err
    })
}

// 添加收藏商品
export const addCollect = (username, id) => dispatch => {
  dispatch(changeToLoading())
  return axios.post(`/api/shop/collect`, {
      username,
      id
    })
    .then(res => {
      return res
    }, err => {
      return err
    })
}