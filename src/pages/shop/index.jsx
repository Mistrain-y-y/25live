import React, { useState, useEffect } from 'react'
import Header from '../../components/header'
import FootNav from '../../components/footNav'
import ShopList from './shopList'
import { connect } from 'react-redux'
import * as loginActions from '../../actions/loginActions'
import { bindActionCreators } from 'redux'
import './style.less'
import SuccessAlert from './../../components/alert/successCollect'
import CancelAlert from './../../components/alert/cancelCollect'

const Shop = props => {
  const [shopList, setShopList] = useState([])
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showCancelAlert, setShowCancelAlert] = useState(false)

  const clickShowSuccessAlert = () => {
    if (props.login.logged) {
      setShowSuccessAlert(true)
    } else {
      props.loginActions.showLoginPage()
    }
  }

  const clickShowCancelAlert = () => {
    // 只有登陆了才会出现 已收藏 按钮, 因此不用判断是否登录
    setShowCancelAlert(true)
  }

  const hideAlert = () => {
    setShowSuccessAlert(false)
    setShowCancelAlert(false)
  }

  useEffect(() => {// 一挂载就请求展示列表数据
    props.loginActions.shopList()
      .then(res => {
        setShopList(res.data)
        props.loginActions.changeToLoaded()
      }, err => console.log(err))
  }, [props.loginActions])

  useEffect(() => {
    if (props.login.logged) {
      const { username } = props.login.user
      if (username) {// 请求用户收藏数据
        props.loginActions.collections(username)
          .then(res => {
            props.loginActions.changeToLoaded()
          })
      }
    }
  }, [props.loginActions, props.login])

  return (
    <div className="shop-page">
      <Header title="Shop" showLoginBtn={true} />
      <FootNav />

      <div className="container shop-container"
        style={{ padding: '59px .1rem .1rem 0' }}>

        {
          showSuccessAlert ? <SuccessAlert hideAlert={hideAlert} /> : null
        }

        {
          showCancelAlert ? <CancelAlert hideAlert={hideAlert} /> : null
        }

        {
          shopList.map((item, index) => (
            <ShopList item={item}
              key={index}
              clickShowSuccessAlert={clickShowSuccessAlert}
              clickShowCancelAlert={clickShowCancelAlert}
            />
          ))
        }

        <div style={{ height: '2rem', textAlign: 'center', color: '#ccc', paddingTop: '0.2rem' }}>
          <span>往上看看吧, 已经到底啦~</span>
        </div>
      </div>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(Shop)