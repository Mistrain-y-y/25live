import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import * as loginActions from '../../../actions/loginActions'

const ShopList = props => {
  const toShopDetail = () => {
    if (props.login.logged) {
      props.history.push(`/shop/detail/${props.item.id}`)
    } else {// 没登录, 显示登录页面
      props.loginActions.showLoginPage()
    }
  }

  return (
    <div className="thumbnail" style={{display: 'inline-block',width: '50%'}}>
      <img src={props.item.img} alt="img" style={{width: '3rem', height: '3rem'}}/>
      <div className="caption">
        <h3>{props.item.name}</h3>
        <p style={{color: '#666'}}>{props.item.description}</p>
        <p style={{fontSize: '0.32rem', color: '#f97d93', fontWeight: 700, marginBottom: 0}}>{props.item.price}&nbsp;
         <span style={{color: '#666'}}>RMB</span>
         </p>
         <p style={{color: '#9a9a9a'}}>
         月售 <span>{props.item.count}</span> 件
         </p>
        <p><button
         className="btn btn-primary" 
        onClick={props.clickShowAlert}
        >收藏</button>
          <button className="btn btn-default"
          onClick={toShopDetail}
          >查看详情</button></p>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(ShopList))