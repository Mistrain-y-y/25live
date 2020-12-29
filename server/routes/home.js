const express = require('express')
const router = express.Router() // 创建路由
const homeList = require('../data/homeList')
const jwtDecode = require('jwt-decode')
const User = require('../database/database')

router.get('/', (req, res) => {
  res.send(homeList)
})

router.get('/:name', (req, res) => {
  // 验证 token
  if (req.headers.authorization) {
    const reqToken = jwtDecode(req.headers.authorization)
    const {
      user, id
    } = reqToken
    // id 在数据库是唯一的, 客户端就算解析出 id , 也无法用 id 登录
    // 而 加密的时候用了 config.jwtSecret, 无法伪造加密
    User.findOne({
        user, _id: id
      })
      .then(data => {
        if (data) {// 数据库中有数据, 允许访问, 返回数据
          console.log(data)
          const detail = req.params.name
          const arr = homeList.filter(item => item.name === detail)
          res.send(arr[0])
        } else {// token 不合法
          res.status(401).json()
        }
      })
  } else {// 没有 token, 需要登录
    res.status(401).json()
  }
})

module.exports = router