const express = require('express')
const router = express.Router() // 创建路由

router.get('/play', (req, res) => {
  console.log(req.body)
  res.send({
    msg: 'hello'
  })
})

module.exports = router