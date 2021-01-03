const express = require('express')
const router = express.Router()
const shopList = require('../data/shopList')
const jwtDecode = require('jwt-decode')
const User = require('../database/user')

router.get('/', (req, res) => {
  res.send(shopList)
})

router.get('/detail/:id', (req, res) => {
  // 验证 token
  if (req.headers.authorization) {
    const reqToken = jwtDecode(req.headers.authorization)
    const {
      user,
      id
    } = reqToken
    User.findOne({
        user,
        _id: id
      })
      .then(data => {
        if (data) { //允许访问, 返回数据
          const detail = req.params.id
          const arr = shopList.filter(item => item.id === detail)
          res.send(arr[0]) // 返回 shopList 里面的某一个
        } else { // token 不合法
          res.status(401).json()
        }
      })
  } else { // 没有 token, 需要登录
    res.status(401).json()
  }
})

module.exports = router