const lifeList = [
  {
    name: '粽子恐龙',
    iconImg: 'https://s3.ax1x.com/2020/12/27/rIw7gx.jpg',
    time: '昨天 20:42',
    content: {
      text: '恭喜烟雨放假回家~'
    },
    likes: [
      '烟雨恐龙', '温言恐龙', '坤坤恐龙', '酸酸乳', 'nobody'
    ],
    comments: [{
        user: '烟雨恐龙',
        content: '谢谢粽!',
        feedback: ''
      }
    ]
  }, {
    name: '烟雨恐龙',
    iconImg: 'https://s3.ax1x.com/2020/12/27/rIwRDU.jpg',
    time: '昨天 14:13',
    content: {
      text: '恐龙最棒!',
      img: 'https://s3.ax1x.com/2021/01/02/sSkwEd.jpg'
    },
    likes: [
      '粽子恐龙', '温言恐龙', '坤坤恐龙', '尘封', '大忽悠雷'
    ],
    comments: [{
        user: '粽子恐龙',
        content: '守护全世界最好的恐龙!',
        feedback: ''
      },
      {
        user: '坤坤恐龙',
        content: '守护全世界最好的恐龙!',
        feedback: ''
      },
      {
        user: '温言恐龙',
        content: '烟雨, 照片卖我一份😂',
        feedback: '好的!'
      },
      {
        user: 'nv色恐龙',
        content: '带带我!',
        feedback: ''
      },
    ]
  },{
    name: '乌云',
    iconImg: 'https://s3.ax1x.com/2021/01/03/spTyo4.jpg',
    time: '12月25日 14:13',
    content: {
      text: '成功面基! 虽然没有合照.',
    },
    likes: [
      '烟雨恐龙', '尘封', '阿乳', '霜降', '大忽悠雷', '白'
    ],
    comments: [{
        user: '烟雨恐龙',
        content: '今天玩得很开心!',
        feedback: '我也是!'
      },
      {
        user: '阿乳',
        content: '玩的时间太短了, 我也没吃饱!',
        feedback: '阿乳吃少点吧.'
      },
      {
        user: '霜降',
        content: '感谢二位老板!',
        feedback: '感谢二位老板!'
      },
      {
        user: '尘封',
        content: '下次请你们唱歌.'
      },
    ]
  }
]

module.exports = lifeList