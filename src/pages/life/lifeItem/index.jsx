import React from 'react'
import './style.less'
import mistrainImg from '../../../static/images/icons/mistrain.jpg'

const LifeItem = props => {
  return (
    <div className="panel panel-default item-life" style={{ marginTop: '59px' }}>
      <div>
        <img className="icon-user" src={mistrainImg} alt="img" />
        <span style={{ margin: '0 0.2rem', fontSize: '0.35rem' }}>烟雨恐龙</span>
        <span style={{ color: '#888' }}>今天 14:13</span>
        <p style={{ margin: '0.2rem 0', fontSize: '0.3rem' }}>恐龙最棒!</p>
      </div>
      <img src={'https://s3.ax1x.com/2021/01/02/sSkwEd.jpg'} alt="img" style={{ width: '100%' }} />
      <p className="icon-box">
        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
        <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>
        <span class="glyphicon glyphicon-share" aria-hidden="true"></span>
      </p>
      <div className="bottom-box">
        <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
        粽子恐龙、温言恐龙、坤坤恐龙、尘封、阿乳
        <p className="comments">
          <div>
            <span>粽子恐龙 : </span>守护全世界最好的恐龙!
          </div>
          <div>
            <span>温言恐龙 : </span>希望恐龙们每天开心!
          </div>
          <div>
            <p><span>坤坤恐龙 : </span>烟雨, 照片卖我一份😂</p>
            <p><span>烟雨恐龙</span> 回复 <span>坤坤恐龙 : </span>好的!</p>
          </div>
          <div>
            <span>nv色恐龙 : </span>带带我!
          </div>
        </p>
      </div>
    </div>
  )
}

export default LifeItem