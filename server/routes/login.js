const express = require('express')
const router = express.Router() // 创建路由
const User = require('../database/database')

router.post('/', (req, res) => {
  console.log(req.body)
  const {username, password} = req.body
  // 在数据库中验证 username 和 password
  User.findOne({
    username, password
  })
  .then(data => {
    if (data) {
      res.json(// 查找到数据, 登陆成功
        res.json({
          success: true
        })
      )
    } else {// 没有查找到
      res.status(400).json({
        errors: {
          
        }
      })
    }
  })
})

module.exports = router