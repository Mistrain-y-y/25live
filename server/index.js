const express = require('express')
const bodyParser = require('body-parser')
import user from './routes/user'

const app = express()// 创建服务器

app.use(bodyParser)
app.use('/api')

app.listen(3033, () => console.log('服务端启动了...'),
err => console.log(err, '出错了...'))