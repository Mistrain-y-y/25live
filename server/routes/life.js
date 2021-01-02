const express = require('express')
const router = express.Router()
const lifeList = require('../data/lifeList')

router.get('/', (req, res) => {
  res.send(lifeList)
})

module.exports = router