const express = require('express')
const router = express.Router()
const User = require('../database/user')
const jwtDecode = require('jwt-decode')
const Collect = require('../database/collect')

//前台是登录以后才请求的数据
router.get('/', (req, res) => {
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
        if (data) { // 查找返回数据
          res.send(data)
        }
      })
  }
})

// 请求展示用户的收藏数据
router.get('/collect/:username', (req, res) => {
  const {
    username
  } = req.params

  Collect.findOne({
      name: username
    })
    .then(data => {
      res.send(data)
    }, err => console.log(err))
})

module.exports = router