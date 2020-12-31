const express = require('express')
const router = express.Router()
const User = require('../database/database')
const jwtDecode = require('jwt-decode')

//前台是登录以后才请求的数据
router.get('/', (req, res) => {
  // 验证 token
  if (req.headers.authorization) {
    const reqToken = jwtDecode(req.headers.authorization)
    const {
      user, id
    } = reqToken
    User.findOne({
        user, _id: id
      })
      .then(data => {
        if (data) {// 查找返回数据
          console.log(data)
          res.send(data)
        }
      })
  }
})

module.exports = router