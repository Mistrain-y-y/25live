import React, { useState, useEffect } from 'react'
import Header from '../../components/header'
import FootNav from '../../components/footNav'
import ShopList from './shopList'
import { connect } from 'react-redux'
import * as loginActions from '../../actions/loginActions'
import { bindActionCreators } from 'redux'
import './style.less'
import Alert from './alert'

const Shop = props => {
  const [shopList, setShopList] = useState([])
  const [showAlert, setShowAlert] = useState(false)

  const clickShowAlert = () => {
    setShowAlert(true)
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

  return (
    <div className="shop-page">
      <Header title="Shop" showLoginBtn={true}/>
      <FootNav />

      <div className="container shop-container"
        style={{ paddingTop: '59px'}}>

        {
          showAlert ? <Alert hideAlert={hideAlert}/> : null
        }

        {
          shopList.map((item, index) => (
            <ShopList item={item} key={index} clickShowAlert={clickShowAlert} />
          ))
        }

        <div style={{ height: '2rem', textAlign: 'center', color: '#ccc' }}>
          <span>往上看看吧, 已经到底啦~</span>
        </div>
      </div>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Shop)