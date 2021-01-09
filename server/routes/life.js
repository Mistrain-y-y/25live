const express = require('express')
const router = express.Router()
const lifeList = require('../data/lifeList')

// life 页面展示列表
router.get('/', (req, res) => {
  res.send(lifeList)
})

module.exports = router