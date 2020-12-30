import React from 'react'
import './style.less'

const Options = () => {
  return (
    <div className="mine-options">
      <div
        className="thumbnail mine-option"
        style={{
          display: 'inline-block',
          width: '50%'
        }}>
        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
        收藏
      </div>
      <div
        className="thumbnail mine-option"
        style={{
          display: 'inline-block',
          width: '50%'
        }}>
        <span className="glyphicon glyphicon-barcode" aria-hidden="true"></span>
        购物车
      </div>
      <div
        className="thumbnail mine-option"
        style={{
          display: 'inline-block',
          width: '50%'
        }}>
        <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
        其他
      </div>
      <div
        className="thumbnail mine-option"
        style={{
          display: 'inline-block',
          width: '50%'
        }}>
        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
        设置
      </div>
    </div>

  )
}

export default Options