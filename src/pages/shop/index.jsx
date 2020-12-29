import React, {useState, useEffect} from 'react'
import Header from '../../components/header'
import FootNav from '../../components/footNav'
import ShopList from './shopList'
import {connect} from 'react-redux'
import * as loginActions from '../../actions/loginActions'
import { bindActionCreators } from 'redux'

const Shop = props => {
  const [shopList, setShopList] = useState([])
  useEffect(() => {// 一挂载就请求数据
    props.loginActions.shopList()
    .then(res => {
      console.log(res)
      setShopList(res.data)
    }, err => console.log(err))
  }, [])
  return (
    <div>
      <Header title="Shop" />
      <FootNav />

      <div className="container" style={{ marginTop: '59px', marginBottom: '59px' }}>
        {
          shopList.map((item, index) => (
            <ShopList item={item} key={index}/>
          ))
        }
      </div>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Shop)