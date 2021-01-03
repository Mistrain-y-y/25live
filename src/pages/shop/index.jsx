import React, { useState, useEffect } from 'react'
import Header from '../../components/header'
import FootNav from '../../components/footNav'
import ShopList from './shopList'
import { connect } from 'react-redux'
import * as loginActions from '../../actions/loginActions'
import { bindActionCreators } from 'redux'
import './style.less'
import Alert from './alert'
import jwtDecode from 'jwt-decode'

const Shop = props => {
  const [shopList, setShopList] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const [collected, setCollected] = useState([])

  const clickShowAlert = e => {
    e.stopPropagation()
    if (props.login.logged) {
      setShowAlert(true)
    } else {
      props.loginActions.showLoginPage()
    }
  }

  const hideAlert = () => {
    setShowAlert(false)
  }

  useEffect(() => {// 一挂载就请求数据
    props.loginActions.shopList()
      .then(res => {
        setShopList(res.data)
      }, err => console.log(err))
  }, [props.loginActions])

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      const {username} = jwtDecode(sessionStorage.getItem('token'))
      props.loginActions.collections(username)
      .then(res => {
        console.log(res.data)
        setCollected(res.data.collectId)
      })
    }
    
  }, [props.loginActions])

  return (
    <div className="shop-page">
      <Header title="Shop" showLoginBtn={true} />
      <FootNav />

      <div className="container shop-container"
        style={{ padding: '59px .1rem .1rem 0' }}>

        {
          showAlert ? <Alert hideAlert={hideAlert} /> : null
        }

        {
          shopList.map((item, index) => (
            <ShopList item={item}
              key={index}
              clickShowAlert={clickShowAlert}
              collected={collected}
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