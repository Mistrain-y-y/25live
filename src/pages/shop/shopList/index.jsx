import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../../actions/loginActions'
import './style.less'
import CollectBtn from './collectBtn'

const ShopList = props => {

  const toShopDetail = e => {
    e.stopPropagation()
    if (props.login.logged) {
      props.history.push(`/shop/detail/${props.item.id}`)
    } else {// 没登录, 显示登录页面
      props.loginActions.showLoginPage()
    }
  }

  const collectTheItem = (username, id, e) => {// 点击增加收藏
    e.stopPropagation()
    props.loginActions.addCollect(username, id)
      .then(res => {
        props.clickShowSuccessAlert()
        props.loginActions.changeToLoaded()
      })
  }

  const cancelCollect = (username, id, e) => {// 点击取消收藏
    e.stopPropagation()
    props.loginActions.cancelCollect(username, id)
      .then(res => {
        props.clickShowCancelAlert()
        props.loginActions.changeToLoaded()
      })
  }

  return (
    <div
      onClick={toShopDetail}
      className="thumbnail" style={{ display: 'inline-block', width: '47%', margin: '0.1rem 0 0 2%', border: 'none' }}>
      <img src={props.item.img} alt="img" style={{ width: '3rem', height: '3rem' }} />
      <div className="caption">
        <h3>{props.item.name}</h3>
        <p style={{ color: '#666' }}>{props.item.description}</p>
        <p style={{ fontSize: '0.32rem', color: '#f97d93', fontWeight: 700, marginBottom: 0 }}>{props.item.price}&nbsp;
         <span style={{ color: '#666' }}>RMB</span>
        </p>
        <p style={{ color: '#9a9a9a' }}>
          月售 <span>{props.item.count}</span> 件
         </p>
        <p className="btns">
          <CollectBtn
            item={props.item}
            collectTheItem={collectTheItem}
            cancelCollect={cancelCollect}
          />

          <button
            className="btn btn-primary btn-detail"
            onClick={toShopDetail}
          >查看详情</button>
        </p>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(ShopList))