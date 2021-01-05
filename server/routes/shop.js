const express = require('express')
const router = express.Router()
const shopList = require('../data/shopList')
const jwtDecode = require('jwt-decode')
const User = require('../database/user')
const Collect = require('../database/collect')

router.get('/', (req, res) => {
  res.send(shopList)
})

router.get('/detail/:id', (req, res) => {
  // 验证 token
  if (req.headers.authorization) {
    const reqToken = jwtDecode(req.headers.authorization)
    const {
      user,
      id
    } = reqToken
    User.findOne({
        user,
        _id: id
      })
      .then(data => {
        if (data) { //允许访问, 返回数据
          const detail = req.params.id
          const arr = shopList.filter(item => item.id === detail)
          res.send(arr[0]) // 返回 shopList 里面的某一个
        } else { // token 不合法
          res.status(401).json()
        }
      })
  } else { // 没有 token, 需要登录
    res.status(401).json()
  }
})

// 用户点击收藏, 添加 id 到数据库
router.post('/collect', (req, res) => {
  const {
    id,
    username
  } = req.body

  Collect.findOne({
      name: username
    })
    .then(data => {
      Collect.updateOne({
          name: username // 查询条件
        }, {
          collectId: [...data.collectId, id] // 更新的数据
        })
        .then(() => {
          // 返回更新后的数据
          Collect.findOne({
              name: username
            })
            .then(data => {
              res.send(data)
            })
        })
    })
})

router.post('/cancel', (req, res) => {
  const {
    id,
    username
  } = req.body

  Collect.findOne({
      name: username
    })
    .then(data => {
      const newArr = data.collectId.filter(item => item !== id)
      Collect.updateOne({
          name: username // 查询条件
        }, {
          collectId: newArr // 更新的数据
        })
        .then(() => {
          // 返回更新后的数据
          Collect.findOne({
              name: username
            })
            .then(data => {
              res.send(data)
            })
        })
    })
})

module.exports = router