const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/live', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('数据库连接成功...'),
err => console.log(err, '数据库连接失败!'))

// 创建集合规则
const itemSchema = new mongoose.Schema({
  id: Number,
  title: {
    type: String,
    required: true
  },
  img: String,
  link: String
})

// 创建集合
const Item = mongoose.model('Item', itemSchema)

module.exports = Item