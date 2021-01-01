const shopList = [{
    name: '恐龙头套',
    img: 'https://s3.ax1x.com/2020/12/27/rIwRDU.jpg',
    description: '恐龙一族最爱的恐龙头套仿制版',
    price: '99.00',
    count: '4',
    id: '01',
    labels: ['当季爆款', '炒鸡温暖', '好评'],
    owner: {name: '恐龙粽子', img: 'https://s3.ax1x.com/2020/12/27/rIw7gx.jpg', grade: '4.8'},
    comments: [
      {type: true, user: '极酷真品烟雨仔', comment: '超级好看超级暖和, 都给爷买!', feedback: '冲!'},
      {type: true, user: '温言恐龙(淡游)', comment: '祝恐龙们天天开心!', feedback: '[开心][开心][开心]'},
      {type: true, user: 'nv色恐龙', comment: '买了我也能加恐龙群吗?', feedback: '不能!'},
      {type: true, user: '恐龙坤坤', comment: '全世界最好的恐龙!', feedback: 'ohohoh!!!!'}
    ]
  },
  {
    name: '变阿乳遥控器',
    img: 'https://s3.ax1x.com/2020/12/30/rLeBEq.jpg',
    description: '不知名带货主播企鹅仔亲测可以一键变阿乳',
    price: '998.00',
    count: '32',
    id: '02',
    labels: ['网红产品', '七天无理由退款'],
    owner: {name: '恐龙温言', img: 'https://s3.ax1x.com/2020/12/27/rIwT81.jpg', grade: '4.6'},
    comments: [
      {type: true, user: '恐龙坤坤', comment: '网红产品买来试试, 目前使用感觉良好, 祝店家生意兴隆!', feedback: '感谢这位亲的支持!'}

    ]
  },
  {
    name: '雷阿姨的约定',
    img: 'https://s3.ax1x.com/2020/12/27/rIw2uT.jpg',
    description: '保证人人都买得起, 因为大概率会咕掉',
    price: '0.99',
    count: '999+',
    id: '03',
    labels: ['销量冠军', '不可退换', '差评多'],
    owner: {name: '弱小雷', img: 'https://s3.ax1x.com/2020/12/27/rIw2uT.jpg', grade: '1.0'},
    comments: [
      {type: false, user: '被咕咕雷忽悠的灰风', comment: '差评! 虚假广告! 不是大概率会咕, 是一定会咕! [白眼]', feedback: '不满意别买![白眼]'},
      {type: true, user: '极酷真品烟雨仔', comment: '支持阿姨!'},
      {type: false, user: '又是卑微的小阿乳了', comment: '再也不买了, 每次来长沙都被咕. 信你个鬼!', feedback: '下次一定!'},
      {type: false, user: '温言恐龙(淡游)', comment: '这么多差评xswl!'}
    ]
  },
  {
    name: '反乳会员卡',
    img: 'https://s3.ax1x.com/2020/12/30/rqzXtA.jpg',
    description: '这里是反乳联盟! 反乳联盟万岁!',
    price: '88.00',
    count: '32',
    id: '04',
    labels: ['白金会员卡', '不可退换'],
    owner: {name: '反乳小前锋', img: 'https://s3.ax1x.com/2021/01/01/rxsmuV.jpg', grade: '4.5'},
    comments: [
      {type: true, user: '反乳联盟大忽悠', comment: '反乳联盟万岁!'},
      {type: true, user: '反乳地下党清野一郎', comment: '反乳联盟万岁!'},
      {type: true, user: '匿名用户', comment: '评论区怎么像进了传销组织一样?'},
      {type: true, user: '反乳联盟烟雨仔', comment: '反乳联盟万岁!'},
      {type: true, user: '反乳求忍宗风影', comment: '反乳联盟万岁!'},
      {type: false, user: '又是卑微的小阿乳了', comment: '反乳联盟万岁!'},
      {type: true, user: '反乳不积极，思想有问题', comment: '反乳联盟万岁!'}
    ]
  },
  {
    name: '欧洲人复读机',
    img: 'https://s3.ax1x.com/2020/12/30/rLu3U1.png',
    description: '欧洲人的复读机, 一直复读, 质量极佳',
    price: '59.00',
    count: '99',
    id: '05',
    labels: ['爆款产品', '终身售后'],
    owner: {name: '刘德华', img: 'https://s3.ax1x.com/2021/01/01/rx6CWj.jpg', grade: '4.9'},
    comments: [
      {type: false, user: '反乳联盟大忽悠', comment: '让我看看是谁买了复读机! 再卖复读机头都给你打掉!', feedback: '[狗头]'},
      {type: true, user: '匿名用户', comment: '质量真的很好'},
      {type: true, user: '匿名用户', comment: '体验极佳!'},
      {type: true, user: '匿名用户', comment: '复读复读复读......'},
      {type: true, user: '匿名用户', comment: '匿名以躲过稽查大队'}
    ]
  },
  {
    name: '超勤快的降降',
    img: 'https://s3.ax1x.com/2020/12/30/rOOa7j.jpg',
    description: '被管理员置为工具人的超勤快的霜降',
    price: '9998.00',
    count: '1',
    id: '06',
    labels: ['好评', '不可退换', '质量好', '贵'],
    owner: {name: '工具人霜降', img: 'https://s3.ax1x.com/2020/12/30/rOOa7j.jpg', grade: '5.0'},
    comments: [
      {type: true, user: '被咕咕雷忽悠的灰风', comment: '工具人石锤了! 就是贵了点!', feedback: '[流泪]'},
      {type: true, user: '反乳联盟大忽悠', comment: '工具人石锤了!'}
    ]
  }
]

module.exports = shopList