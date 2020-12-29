const express = require('express')
const router = express.Router()
const shopList = require('../data/shopList')

router.get('/', (req, res) => {
  res.send(shopList)
})

module.exports = router