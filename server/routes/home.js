const express = require('express')
const router = express.Router() // 创建路由
const homeList = require('../data/homeList')

router.get('/', (req, res) => {
  res.send(homeList)
})

module.exports = router