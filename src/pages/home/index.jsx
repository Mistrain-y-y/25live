import React from 'react'
import './style.less'
import Header from '../../components/header'
import Swiper from '../../components/swiper'
import FootNav from '../../components/footNav'

import banner1 from '../../static/images/01.jpg'
import banner2 from '../../static/images/02.jpg'
import banner3 from '../../static/images/03.jpg'
import banner4 from '../../static/images/04.jpg'
import banner5 from '../../static/images/05.jpg'

const Home = props => {
  const test = () => {
    // axios 要写自己的地址, 不是跨过去的地址.
    // 可以省略协议, 主机和端口
  }
  return (
    <div className="swiper-box">
      <Header title="Home">
        <form className="navbar-form navbar-left container" role="search" style={{ padding: 0, marginRight: '0.2rem', marginLeft: '0.2rem' }}>
          <div className="form-group col-xs-9" style={{ padding: 0 }}>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-primary col-xs-3">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button> 
        </form>
      </Header>
      <Swiper banners={[banner1, banner2, banner3, banner4, banner5]} />
      <FootNav />
    </div>
  )
}

export default Home