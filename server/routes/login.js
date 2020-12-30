const express = require('express')
const router = express.Router() // 创建路由
const User = require('../database/database')
const jwt = require('jsonwebtoken')
const config = require('../config')

router.post('/', (req, res) => {
  const {username, password} = req.body
  // 在数据库中验证 username 和 password
  User.findOne({
    username, password
  })
  .then(data => {
    if (data) {// 查找到数据, 登陆成功
      console.log(data)
      const { user, img, id, msg, identity} = data
      const token = jwt.sign({// 生成 token
        user, id, img, msg, identity
      }, config.jwtSecret)// 参数2是自定义的字符串
      res.send(token)
    } else {// 没有查找到
      res.status(400).json()
    }
  })
})

module.exports = router