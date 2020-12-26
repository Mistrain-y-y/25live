const express = require('express')
const bodyParser = require('body-parser')
const user = require('./routes/user')

const app = express()// 创建服务器

app.use(bodyParser.json())
app.use('/api/users', user)

app.listen(3033, () => console.log('服务端启动了...'))