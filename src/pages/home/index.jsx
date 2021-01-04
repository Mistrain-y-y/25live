import React, { useState, useEffect } from 'react'
import './style.less'
import Header from '../../components/header'
import Swiper from '../../components/swiper'
import FootNav from '../../components/footNav'
import * as loginActions from '../../actions/loginActions'

import banner1 from '../../static/images/01.jpg'
import banner2 from '../../static/images/02.jpg'
import banner3 from '../../static/images/03.jpg'
import banner4 from '../../static/images/04.jpg'
import banner5 from '../../static/images/05.jpg'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Hot from './hot'
import './style.less'
import SearchInput from '../../components/searchInput'

const Home = props => {
  const [homeList, setHomeList] = useState([])

  useEffect(() => {// 一挂载就请求数据
    props.loginActions.homeData()
      .then(res => {
        setHomeList(res.data)
        props.loginActions.changeToLoaded()
      })
  }, [props.loginActions])

  return (
    <div className="home-page">
      <Header title="Home" showLoginBtn={true}>
        <SearchInput/>
      </Header>

      <div className="home-swiper">
        <Swiper banners={[banner3, banner2, banner1, banner4, banner5]} />
      </div>

      <FootNav />

      {
        homeList.map((item, index) => (
          <Hot key={index} item={item} />
        ))
      }
      
      <div style={{height: '2rem', textAlign: 'center', color: '#ccc'}}>
        <span>往上看看吧, 已经到底啦~</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Home)