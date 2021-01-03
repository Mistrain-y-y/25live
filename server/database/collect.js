const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/play', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('数据库连接成功...'),
err => console.log(err, '数据库连接失败!'))

// 创建集合规则
const collectSchema = new mongoose.Schema({
  name: String,
  user: String,
  collectId: Array
})

// 创建集合
const Collect = mongoose.model('Collect', collectSchema)

module.exports = Collect