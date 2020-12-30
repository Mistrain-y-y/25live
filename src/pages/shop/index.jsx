import React, { useState, useEffect } from 'react'
import Header from '../../components/header'
import FootNav from '../../components/footNav'
import ShopList from './shopList'
import { connect } from 'react-redux'
import * as loginActions from '../../actions/loginActions'
import { bindActionCreators } from 'redux'
import './style.less'

const Shop = props => {
  const [shopList, setShopList] = useState([])
  const [showAlert, setShowAlert] = useState(false)

  const clickShowAlert = () => {
    setShowAlert(true)
    // ------------定时器写在这里不知道对不对-------------
    const timeOut = setTimeout(() => {
      console.log('hhh')
      setShowAlert(false)
    }, 3000)
  }

  useEffect(() => {// 一挂载就请求数据
    props.loginActions.shopList()
      .then(res => {
        setShopList(res.data)
      }, err => console.log(err))
  }, [props.loginActions])

  useEffect(() => {
    return () => {
      // ----------想要清除定时器----------
    }
  }, [])

  return (
    <div>
      <Header title="Shop" />
      <FootNav />

      <div className="container shop-container"
        style={{ paddingTop: '59px'}}>

        {
          showAlert ? <div
            className="alert alert-success shop-success"
            role="alert"
          >
            <span
              className="glyphicon glyphicon-ok"
              style={{ fontSize: '0.5rem', marginRight: '0.2rem' }}></span>
        收藏商品成功!
        </div> : null
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