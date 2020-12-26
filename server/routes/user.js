const express = require('express')
const router = express.Router() // 创建路由

router.get('/', (req, res) => {
  res.send('hello')
})

module.exports = router