import React from 'react'
import './style.less'

const DetailNav = () => {
  return (
    <div className="navbar navbar-footer nav-detail" style={{ marginBottom: 0 }}>
     <span style={{lineHeight: '1.1rem', margin: '0 0.3rem 0', color: '#aaa'}}>举报</span>
     <span style={{lineHeight: '1.1rem', margin: '0 0.3rem 0 0', color: '#aaa'}}>
     <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>
       客服</span>
     <button className="btn btn-primary btn-collect">
        <span className="glyphicon glyphicon-star-empty" aria-hidden="true" style={{ marginRight: '0.1rem' }}></span>
        收藏</button>
      <button className="btn btn-primary btn-add">加入购物车</button>
    </div>
  )
}

export default DetailNav