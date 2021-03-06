const express = require('express')
const bodyParser = require('body-parser')
const login = require('./routes/login')
const home = require('./routes/home')
const shop = require('./routes/shop')
const mine = require('./routes/mine')
const life = require('./routes/life')

const app = express()// 创建服务器

app.use(bodyParser.json())

app.use('/api/login', login)
app.use('/api/home', home)
app.use('/api/shop', shop)
app.use('/api/mine', mine)
app.use('/api/life', life)

app.listen(3033, () => console.log('服务端启动了...'))