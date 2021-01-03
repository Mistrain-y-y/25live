import React from 'react'
import './style.less'
import { withRouter } from 'react-router-dom'

const Options = props => {
  const toCollection = () => {
    props.history.push('/mine/collection')
  }
  return (
    <div className="mine-options">
      <div
        onClick={toCollection}
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
        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
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

export default withRouter(Options)